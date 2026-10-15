import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import Pendente, { ImagemPendente } from '@/components/Pendente'
import ViewContentEvent from '@/components/ViewContentEvent'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import WhatsAppLink from '@/components/WhatsAppLink'
import { PRODUTOS, categoriaPorSlug, produtoPorSlug } from '@/lib/catalogo'
import { schemaMigalhas, schemaProduto } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'
import { mensagemProduto } from '@/lib/whatsapp'

export function generateStaticParams() {
  return PRODUTOS.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = produtoPorSlug(slug)
  if (!p) return {}
  return metaPagina({
    titulo: `${p.nome} em Caruaru`,
    descricao: `${p.nome} na Comercial Teixeira, em Caruaru. Peça valor e disponibilidade pelo WhatsApp.`,
    caminho: `/produto/${p.slug}`,
    // Página sem marca, foto e ficha ainda é conteúdo raso: fica fora do índice até o cliente confirmar os dados.
    indexar: p.dadosConfirmados,
  })
}

export default async function Produto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = produtoPorSlug(slug)
  if (!p) notFound()
  const cat = categoriaPorSlug(p.categoria)!
  const schema = schemaProduto(p, cat)

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <JsonLd
        dados={schemaMigalhas([
          { nome: 'Início', caminho: '/' },
          { nome: 'Produtos', caminho: '/produtos' },
          { nome: cat.nome, caminho: `/categoria/${cat.slug}` },
          { nome: p.nome, caminho: `/produto/${p.slug}` },
        ])}
      />
      <JsonLd dados={schema} />
      <ViewContentEvent nome={p.nome} categoria={cat.nome} />

      <nav aria-label="Você está em" className="text-sm text-ink-soft">
        <Link href="/produtos" className="underline">Produtos</Link> /{' '}
        <Link href={`/categoria/${cat.slug}`} className="underline">{cat.nome}</Link> / {p.nome}
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-[var(--shadow-card)]">
          <ImagemPendente />
        </div>
        <div>
          <h1 className="text-5xl font-bold uppercase">{p.nome}</h1>
          <dl className="mt-5 space-y-2 text-sm">
            <div className="flex gap-2"><dt className="font-semibold">Categoria:</dt><dd>{cat.nome}</dd></div>
            <div className="flex gap-2"><dt className="font-semibold">Marca:</dt><dd>{p.marca ?? <Pendente />}</dd></div>
            <div className="flex gap-2"><dt className="font-semibold">Descrição e ficha técnica:</dt><dd>{p.descricao ?? <Pendente />}</dd></div>
            <div className="flex gap-2"><dt className="font-semibold">Valor e disponibilidade:</dt><dd>consulte pelo WhatsApp</dd></div>
          </dl>
          <WhatsAppLink
            mensagem={mensagemProduto(p.nome)}
            produto={p.nome}
            interesse={cat.nome}
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3 text-lg font-bold text-white hover:bg-whatsapp-strong sm:w-auto"
          >
            <WhatsAppIcon tamanho={22} />
            Pedir no WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </div>
  )
}
