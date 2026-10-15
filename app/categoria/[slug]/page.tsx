import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import ProductCard from '@/components/ProductCard'
import TopoPagina from '@/components/TopoPagina'
import ViewContentEvent from '@/components/ViewContentEvent'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import WhatsAppLink from '@/components/WhatsAppLink'
import { CATEGORIAS, categoriaPorSlug, produtosDaCategoria } from '@/lib/catalogo'
import { schemaColecao, schemaMigalhas } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'
import { mensagemCategoria } from '@/lib/whatsapp'

export function generateStaticParams() {
  return CATEGORIAS.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = categoriaPorSlug(slug)
  if (!cat) return {}
  return metaPagina({
    titulo: `${cat.nome} em Caruaru`,
    descricao: `${cat.texto} Peça valor e disponibilidade pelo WhatsApp da Comercial Teixeira, em Caruaru.`,
    caminho: `/categoria/${cat.slug}`,
  })
}

export default async function Categoria({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = categoriaPorSlug(slug)
  if (!cat) notFound()
  const produtos = produtosDaCategoria(cat.slug)

  return (
    <>
      <JsonLd
        dados={schemaMigalhas([
          { nome: 'Início', caminho: '/' },
          { nome: 'Produtos', caminho: '/produtos' },
          { nome: cat.nome, caminho: `/categoria/${cat.slug}` },
        ])}
      />
      <JsonLd dados={schemaColecao(cat, produtos)} />
      <ViewContentEvent nome={cat.nome} categoria={cat.nome} />

      <TopoPagina
        titulo={cat.nome}
        texto={cat.texto}
        migalhas={
          <>
            <Link href="/">Início</Link> / <Link href="/produtos">Produtos</Link> / {cat.nome}
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-8 rounded-[var(--radius-card)] border border-line bg-surface p-5">
          <p className="font-display text-xl font-bold uppercase tracking-wide text-brand-strong">Pergunte por</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {cat.buscas.map((b) => (
              <li key={b} className="rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-strong">
                {b}
              </li>
            ))}
          </ul>
          <WhatsAppLink
            mensagem={mensagemCategoria(cat.nome)}
            interesse={cat.nome}
            className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white hover:bg-whatsapp-strong"
          >
            <WhatsAppIcon tamanho={20} />
            Perguntar no WhatsApp
          </WhatsAppLink>
        </div>
        {produtos.length ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {produtos.map((p) => (
              <li key={p.slug}>
                <ProductCard produto={p} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-[var(--radius-card)] border border-dashed border-line bg-surface p-6 text-ink-soft">
            Os produtos desta categoria ainda não estão publicados no site. Chame a loja no WhatsApp e pergunte pelo item.
          </p>
        )}
      </div>
    </>
  )
}
