import Link from 'next/link'
import { metaPagina } from '@/lib/seo'

export const metadata = metaPagina({
  titulo: 'Contato recebido',
  descricao: 'Recebemos seu contato. A Comercial Teixeira responde em breve.',
  caminho: '/obrigado',
  indexar: false,
})

export default function Obrigado() {
  return (
    <div className="mx-auto max-w-xl px-5 py-20 text-center">
      <h1 className="text-5xl font-bold uppercase">Contato recebido</h1>
      <p className="mt-4 text-ink-soft">Obrigado. A loja vai responder pelo WhatsApp que você informou.</p>
      <Link href="/produtos" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-brand px-7 py-3 font-bold text-white hover:bg-brand-strong">
        Ver produtos
      </Link>
    </div>
  )
}
