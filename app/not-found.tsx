import Link from 'next/link'
import { Arcos } from '@/components/Marca'
import IconeCategoria from '@/components/IconeCategoria'
import { CATEGORIAS } from '@/lib/catalogo'
import { metaPagina } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata = metaPagina({
  titulo: 'Página não encontrada',
  descricao: 'Essa página não existe na Comercial Teixeira.',
  caminho: '/404',
  indexar: false,
})

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <Arcos className="pointer-events-none absolute -left-24 top-4 h-[28rem] w-[28rem] opacity-20" />
      <div className="relative mx-auto max-w-2xl px-5 py-20 text-center">
        <p className="font-display text-8xl font-bold leading-none text-brand-strong">404</p>
        <h1 className="mt-3 text-4xl font-bold uppercase">Essa página não foi encontrada</h1>
        <p className="mt-3 text-ink-soft">
          O endereço pode ter mudado ou ter sido digitado errado. Veja os produtos da {SITE.nome} ou volte para o início.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-whatsapp px-7 py-3 font-bold text-white hover:bg-whatsapp-strong">
            Página inicial
          </Link>
          <Link href="/produtos" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-ink px-7 py-3 font-bold hover:bg-ink hover:text-white">
            Ver produtos
          </Link>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
          {CATEGORIAS.map((c) => (
            <li key={c.slug}>
              <Link href={`/categoria/${c.slug}`} className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 font-semibold text-brand-strong hover:bg-lime-soft">
                <IconeCategoria slug={c.slug} className="h-4 w-4" />
                {c.nome}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
