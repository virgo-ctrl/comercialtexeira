'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CATEGORIAS } from '@/lib/catalogo'
import { contextoNavegador, dispararPixel, novoEventId } from '@/lib/tracking'

function mascaraTelefone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function LeadForm() {
  const router = useRouter()
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')
  const [erros, setErros] = useState<Record<string, string>>({})
  const [whatsapp, setWhatsapp] = useState('')

  async function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErro('')
    const f = new FormData(e.currentTarget)
    const nome = String(f.get('nome') || '').trim()
    const tel = whatsapp.replace(/\D/g, '')

    const novos: Record<string, string> = {}
    if (nome.length < 2) novos.nome = 'Informe seu nome.'
    if (tel.length < 10) novos.whatsapp = 'Informe o WhatsApp com DDD.'
    if (!f.get('aceite')) novos.aceite = 'Marque a autorização para continuar.'
    setErros(novos)
    if (Object.keys(novos).length) return

    setEnviando(true)
    const eventId = novoEventId('Lead')
    const interesse = String(f.get('interesse') || '')
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          whatsapp,
          interesse,
          mensagem: String(f.get('mensagem') || ''),
          website: String(f.get('website') || ''),
          eventId,
          ...contextoNavegador(),
        }),
      })
      if (!r.ok) throw new Error(String(r.status))
      dispararPixel('Lead', eventId, { content_name: interesse || 'contato' })
      router.push('/obrigado')
    } catch {
      setErro('Não foi possível enviar agora. Tente de novo ou chame a loja no WhatsApp.')
      setEnviando(false)
    }
  }

  const campo =
    'min-h-12 w-full rounded-xl border border-line bg-canvas px-4 text-base aria-[invalid=true]:border-error'

  return (
    <form onSubmit={aoEnviar} noValidate className="rounded-[var(--radius-card)] bg-surface p-5 shadow-[var(--shadow-card)] sm:p-7">
      <div className="space-y-5">
        <div>
          <label htmlFor="nome" className="mb-1 block text-sm font-semibold">Nome</label>
          <input id="nome" name="nome" type="text" autoComplete="name" maxLength={120} className={campo} aria-invalid={!!erros.nome} />
          {erros.nome && <p role="alert" className="mt-1 text-sm text-error">{erros.nome}</p>}
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-1 block text-sm font-semibold">WhatsApp</label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(81) 90000-0000"
            value={whatsapp}
            onChange={(e) => setWhatsapp(mascaraTelefone(e.target.value))}
            className={campo}
            aria-invalid={!!erros.whatsapp}
          />
          {erros.whatsapp && <p role="alert" className="mt-1 text-sm text-error">{erros.whatsapp}</p>}
        </div>
        <div>
          <label htmlFor="interesse" className="mb-1 block text-sm font-semibold">O que você procura?</label>
          <select id="interesse" name="interesse" className={campo} defaultValue="">
            <option value="">Escolha uma categoria</option>
            {CATEGORIAS.map((c) => (
              <option key={c.slug} value={c.nome}>{c.nome}</option>
            ))}
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <label htmlFor="mensagem" className="mb-1 block text-sm font-semibold">Mensagem (opcional)</label>
          <textarea id="mensagem" name="mensagem" rows={3} maxLength={600} className={`${campo} py-3`} />
        </div>

        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="website">Não preencha este campo</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input id="aceite" name="aceite" type="checkbox" className="mt-1 h-5 w-5 accent-[var(--color-brand)]" />
            <label htmlFor="aceite" className="text-sm text-ink-soft">
              Autorizo a Comercial Teixeira a usar meus dados para responder este contato, conforme a{' '}
              <a href="/politica-de-privacidade" className="underline">política de privacidade</a>.
            </label>
          </div>
          {erros.aceite && <p role="alert" className="mt-1 text-sm text-error">{erros.aceite}</p>}
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="min-h-[52px] w-full rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-white hover:bg-whatsapp-strong disabled:cursor-wait disabled:opacity-70"
        >
          {enviando ? 'Enviando...' : 'Enviar contato'}
        </button>
        {erro && <p role="alert" className="text-center text-sm text-error">{erro}</p>}
      </div>
    </form>
  )
}
