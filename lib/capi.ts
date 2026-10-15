import { createHash } from 'node:crypto'
import { SITE } from './site'

// Montagem do payload enviado ao n8n. O n8n grava a linha na planilha e repassa
// `capi` (já hasheado) para a API de Conversões da Meta, usando META_CAPI_TOKEN da instância.

export const WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL || 'https://webhook.virgomarketingeia.com.br/webhook/comercial-teixeira'

const sha256 = (v: string) => createHash('sha256').update(v).digest('hex')

export function texto(v: unknown, max = 200) {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export function normalizarTelefone(v: string) {
  const d = v.replace(/\D/g, '')
  if (d.length === 10 || d.length === 11) return `55${d}`
  return d
}

export interface EntradaEvento {
  tipo: 'formulario' | 'clique_whatsapp'
  eventName: 'Lead' | 'Contact'
  eventId: string
  pageUrl: string
  fbp?: string
  fbc?: string
  ip?: string
  userAgent?: string
  nome?: string
  whatsapp?: string
  interesse?: string
  mensagem?: string
  produto?: string
  utm?: Record<string, string>
}

export function montarPayload(e: EntradaEvento) {
  const agora = new Date()
  const userData: Record<string, string> = {}
  if (e.whatsapp) {
    const tel = normalizarTelefone(e.whatsapp)
    if (tel) userData.ph = sha256(tel)
  }
  if (e.nome) {
    const [primeiro, ...resto] = e.nome.toLowerCase().split(/\s+/)
    if (primeiro) userData.fn = sha256(primeiro)
    if (resto.length) userData.ln = sha256(resto[resto.length - 1])
  }
  if (e.fbp) userData.fbp = e.fbp
  if (e.fbc) userData.fbc = e.fbc
  if (e.ip) userData.client_ip_address = e.ip
  if (e.userAgent) userData.client_user_agent = e.userAgent

  return {
    // Campos da planilha
    planilha: {
      data: agora.toLocaleString('pt-BR', { timeZone: 'America/Recife' }),
      tipo: e.tipo,
      nome: e.nome || '',
      whatsapp: e.whatsapp || '',
      interesse: e.interesse || '',
      produto: e.produto || '',
      mensagem: e.mensagem || '',
      pagina: e.pageUrl,
      utm_source: e.utm?.utm_source || '',
      utm_medium: e.utm?.utm_medium || '',
      utm_campaign: e.utm?.utm_campaign || '',
      utm_content: e.utm?.utm_content || '',
      utm_term: e.utm?.utm_term || '',
      event_id: e.eventId,
    },
    // Evento pronto para o corpo `data[0]` de POST /{pixel}/events
    capi: {
      pixel_id: SITE.pixelId,
      event: {
        event_name: e.eventName,
        event_time: Math.floor(agora.getTime() / 1000),
        event_id: e.eventId,
        action_source: 'website',
        event_source_url: e.pageUrl,
        user_data: userData,
        custom_data: {
          content_name: e.produto || e.interesse || undefined,
          lead_event_source: 'site-comercial-teixeira',
        },
      },
    },
  }
}

export async function enviarAoN8n(payload: unknown) {
  const r = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  })
  if (!r.ok) throw new Error(`n8n respondeu ${r.status}`)
}

type PayloadCapi = ReturnType<typeof montarPayload>

/**
 * Envia o evento à API de Conversões. O token vem de META_CAPI_TOKEN (variável de ambiente da Vercel,
 * nunca do código). Sem token, não faz nada: o Pixel do navegador segue funcionando.
 * META_TEST_EVENT_CODE (opcional) manda o evento para a aba "Testar eventos" do Gerenciador.
 */
export async function enviarCapi(payload: PayloadCapi) {
  const token = process.env.META_CAPI_TOKEN
  if (!token) return 'sem-token' as const

  const corpo: Record<string, unknown> = { data: [payload.capi.event] }
  if (process.env.META_TEST_EVENT_CODE) corpo.test_event_code = process.env.META_TEST_EVENT_CODE

  const r = await fetch(`https://graph.facebook.com/v21.0/${payload.capi.pixel_id}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(corpo),
    signal: AbortSignal.timeout(8000),
  })
  // Não registra o corpo da resposta nem a URL com token.
  if (!r.ok) throw new Error(`API de Conversões respondeu ${r.status}`)
  return 'enviado' as const
}

/** Planilha (n8n) e API de Conversões em paralelo. Só a planilha decide se o envio deu certo. */
export async function registrarEvento(payload: PayloadCapi) {
  const [planilha, capi] = await Promise.allSettled([enviarAoN8n(payload), enviarCapi(payload)])
  if (capi.status === 'rejected') console.error('Falha na API de Conversões', String(capi.reason))
  if (planilha.status === 'rejected') throw planilha.reason
}

export function contextoRequisicao(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || undefined
  return { ip, userAgent: req.headers.get('user-agent') || undefined }
}

export function utmsDoCorpo(b: Record<string, unknown>) {
  const out: Record<string, string> = {}
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid']) {
    const v = texto(b[k], 200)
    if (v) out[k] = v
  }
  return out
}
