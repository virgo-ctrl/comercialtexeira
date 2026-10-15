import { contextoRequisicao, montarPayload, normalizarTelefone, registrarEvento, texto, utmsDoCorpo } from '@/lib/capi'

export async function POST(request: Request) {
  let b: Record<string, unknown>
  try {
    b = await request.json()
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  // Honeypot: pessoas não veem o campo, robôs preenchem.
  if (texto(b.website)) return Response.json({ ok: true })

  const nome = texto(b.nome, 120)
  const whatsapp = texto(b.whatsapp, 30)
  const eventId = texto(b.eventId, 120)
  const pageUrl = texto(b.pageUrl, 500)
  const tel = normalizarTelefone(whatsapp)

  if (nome.length < 2 || tel.length < 12 || tel.length > 13 || !eventId || !pageUrl) {
    return Response.json({ ok: false, error: 'dados-invalidos' }, { status: 400 })
  }

  const payload = montarPayload({
    tipo: 'formulario',
    eventName: 'Lead',
    eventId,
    pageUrl,
    fbp: texto(b.fbp, 200) || undefined,
    fbc: texto(b.fbc, 300) || undefined,
    ...contextoRequisicao(request),
    nome,
    whatsapp,
    interesse: texto(b.interesse, 80),
    mensagem: texto(b.mensagem, 600),
    produto: texto(b.produto, 120),
    utm: utmsDoCorpo(b),
  })

  try {
    await registrarEvento(payload)
    return Response.json({ ok: true })
  } catch (err) {
    console.error('Falha ao enviar lead ao n8n', err)
    return Response.json({ ok: false, error: 'indisponivel' }, { status: 502 })
  }
}
