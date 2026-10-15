import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Pendente from '@/components/Pendente'
import ProductCard from '@/components/ProductCard'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import WhatsAppLink from '@/components/WhatsAppLink'
import { CATEGORIAS, PRODUTOS } from '@/lib/catalogo'
import { FAQ_CONFIRMADO, schemaFaq, schemaLoja, schemaSite } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'
import { ENDERECO_TEXTO, SITE } from '@/lib/site'
import { mensagemGeral } from '@/lib/whatsapp'

export const metadata = metaPagina({
  titulo: `${SITE.nome} | Máquinas e ferramentas em Caruaru-PE`,
  descricao:
    'Máquinas e ferramentas para oficina, agro, piscina, limpeza e construção em Caruaru. Veja os produtos e peça valor e disponibilidade pelo WhatsApp.',
  caminho: '/',
})

export default function Home() {
  return (
    <>
      <JsonLd dados={schemaLoja()} />
      <JsonLd dados={schemaSite()} />
      <JsonLd dados={schemaFaq(FAQ_CONFIRMADO)} />

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Caruaru, Pernambuco</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-bold uppercase sm:text-6xl">Máquinas e ferramentas em Caruaru</h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Compressores, furadeiras, motosserras, filtros de piscina e outros itens. Escolha o produto e chame a loja no WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink
              mensagem={mensagemGeral()}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3 text-lg font-bold text-white hover:bg-whatsapp-strong"
            >
              <WhatsAppIcon tamanho={22} />
              Falar no WhatsApp
            </WhatsAppLink>
            <Link
              href="/produtos"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-white/70 px-7 py-3 text-lg font-bold hover:bg-white hover:text-ink"
            >
              Ver produtos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14" aria-labelledby="categorias">
        <h2 id="categorias" className="text-4xl font-bold uppercase">Categorias</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIAS.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/categoria/${c.slug}`}
                className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <span className="font-display text-2xl font-bold uppercase text-brand">{c.nome}</span>
                <span className="mt-2 text-sm text-ink-soft">{c.resumo}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14" aria-labelledby="destaques">
        <div className="flex items-end justify-between gap-4">
          <h2 id="destaques" className="text-4xl font-bold uppercase">Produtos</h2>
          <Link href="/produtos" className="text-sm font-semibold text-brand underline">Ver todos</Link>
        </div>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUTOS.slice(0, 6).map((p) => (
            <li key={p.slug}>
              <ProductCard produto={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14" aria-labelledby="como">
        <h2 id="como" className="text-4xl font-bold uppercase">Como funciona</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['1', 'Escolha o produto', 'Veja as categorias ou busque pelo nome na página de produtos.'],
            ['2', 'Chame no WhatsApp', 'Cada produto tem um botão que já abre a conversa com a mensagem escrita.'],
            ['3', 'Combine com a loja', 'Pergunte o valor e se o item está em estoque.'],
          ].map(([n, t, d]) => (
            <li key={n} className="rounded-[var(--radius-card)] bg-surface p-5 shadow-[var(--shadow-card)]">
              <span className="font-display text-4xl font-bold text-brand">{n}</span>
              <p className="mt-1 text-lg font-bold">{t}</p>
              <p className="mt-1 text-sm text-ink-soft">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-14" aria-labelledby="loja">
        <div className="grid gap-8 rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-8">
          <div>
            <h2 id="loja" className="text-4xl font-bold uppercase">Visite a loja</h2>
            <address className="mt-4 space-y-1 not-italic">
              <p className="font-semibold">{ENDERECO_TEXTO}</p>
              <p>WhatsApp: {SITE.whatsapp.exibicao}</p>
              <p>Telefone: {SITE.telefone.exibicao}</p>
              <p>Horário de atendimento: <Pendente /></p>
              <p>Formas de pagamento: <Pendente /></p>
              <p>Retirada e entrega: <Pendente /></p>
            </address>
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase">Cidades atendidas</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SITE.regiao.map((c) => (
                <li key={c} className="rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand-strong">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pt-14" aria-labelledby="duvidas">
        <h2 id="duvidas" className="text-4xl font-bold uppercase">Dúvidas frequentes</h2>
        <div className="mt-6 divide-y divide-line rounded-[var(--radius-card)] bg-surface shadow-[var(--shadow-card)]">
          {FAQ_CONFIRMADO.map((f) => (
            <details key={f.pergunta} className="group p-5">
              <summary className="cursor-pointer list-none text-lg font-bold marker:hidden">{f.pergunta}</summary>
              <p className="mt-2 text-ink-soft">{f.resposta}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
