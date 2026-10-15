import { contextoRequisicao, montarPayload, registrarEvento, texto, utmsDoCorpo } from '@/lib/capi'

// Clique no botão de WhatsApp (evento Contact). O navegador já disparou o Pixel com o mesmo eventId.
export async function POST(request: Request) {
  let b: Record<string, unknown>
  try {
    b = await request.json()
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  const eventId = texto(b.eventId, 120)
  const pageUrl = texto(b.pageUrl, 500)
  if (!eventId || !pageUrl) return Response.json({ ok: false }, { status: 400 })

  const payload = montarPayload({
    tipo: 'clique_whatsapp',
    eventName: 'Contact',
    eventId,
    pageUrl,
    fbp: texto(b.fbp, 200) || undefined,
    fbc: texto(b.fbc, 300) || undefined,
    ...contextoRequisicao(request),
    produto: texto(b.produto, 120),
    interesse: texto(b.interesse, 80),
    utm: utmsDoCorpo(b),
  })

  try {
    await registrarEvento(payload)
    return Response.json({ ok: true })
  } catch (err) {
    console.error('Falha ao enviar clique ao n8n', err)
    return Response.json({ ok: false }, { status: 502 })
  }
}
