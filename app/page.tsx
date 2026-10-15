import Link from 'next/link'
import IconeCategoria from '@/components/IconeCategoria'
import JsonLd from '@/components/JsonLd'
import { Arcos } from '@/components/Marca'
import { Dado } from '@/components/Pendente'
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

const caixa = 'mx-auto max-w-6xl px-5'

export default function Home() {
  const outrasCidades = SITE.regiao.length - 3

  return (
    <>
      <JsonLd dados={schemaLoja()} />
      <JsonLd dados={schemaSite()} />
      <JsonLd dados={schemaFaq(FAQ_CONFIRMADO)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest text-on-dark">
        <Arcos className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 opacity-25 sm:-right-10 sm:h-[44rem] sm:w-[44rem] sm:opacity-40 lg:right-10 lg:opacity-90" />
        <div className={`${caixa} relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr]`}>
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-lime">
              <span className="h-px w-8 bg-lime" aria-hidden="true" />
              Caruaru, Pernambuco
            </p>
            <h1 className="mt-4 max-w-2xl text-5xl font-bold uppercase sm:text-6xl lg:text-7xl">
              Máquinas e ferramentas em <span className="text-lime">Caruaru</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-on-dark-soft">
              Compressores, furadeiras, motosserras, filtros de piscina e outros itens. Escolha o produto e chame a loja no WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                mensagem={mensagemGeral()}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3 text-lg font-bold text-white ring-2 ring-white/30 hover:bg-whatsapp-strong"
              >
                <WhatsAppIcon tamanho={22} />
                Falar no WhatsApp
              </WhatsAppLink>
              <Link
                href="/produtos"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 py-3 text-lg font-bold text-ink hover:bg-lime-soft"
              >
                Ver produtos
              </Link>
            </div>
          </div>

          <div className="relative rounded-[var(--radius-card)] bg-surface p-6 text-ink shadow-[var(--shadow-card)] lg:justify-self-end lg:max-w-sm">
            <p className="font-display text-xl font-bold uppercase tracking-wider text-brand-strong">Visite a loja</p>
            <address className="mt-3 space-y-2 not-italic">
              <p className="font-semibold">{ENDERECO_TEXTO}</p>
              <p className="text-ink-soft">WhatsApp: {SITE.whatsapp.exibicao}</p>
              <p className="text-ink-soft">Telefone: {SITE.telefone.exibicao}</p>
            </address>
          </div>
        </div>
      </section>

      {/* Fatos confirmados */}
      <section className="border-b border-line bg-surface" aria-label="Sobre a loja">
        <ul className={`${caixa} grid gap-6 py-8 sm:grid-cols-3`}>
          {[
            ['Loja física em Caruaru', ENDERECO_TEXTO],
            ['Atendimento no WhatsApp', SITE.whatsapp.exibicao],
            ['Região atendida', `${SITE.regiao.slice(0, 3).join(', ')} e mais ${outrasCidades} cidades`],
          ].map(([titulo, texto], i) => (
            <li key={titulo} className="flex items-start gap-3">
              <span
                className={`mt-1 h-10 w-1.5 shrink-0 rounded-full ${i % 2 ? 'bg-lime' : 'bg-brand'}`}
                aria-hidden="true"
              />
              <div>
                <p className="font-display text-lg font-bold uppercase tracking-wide">{titulo}</p>
                <p className="text-sm text-ink-soft">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Categorias */}
      <section className="bg-canvas py-14" aria-labelledby="categorias">
        <div className={caixa}>
          <h2 id="categorias" className="text-4xl font-bold uppercase">Categorias</h2>
          <p className="mt-2 text-ink-soft">Escolha pelo tipo de trabalho.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORIAS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/categoria/${c.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow-card)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-strong group-hover:bg-brand-strong group-hover:text-white">
                    <IconeCategoria slug={c.slug} className="h-6 w-6" />
                  </span>
                  <span className="mt-4 font-display text-2xl font-bold uppercase">{c.nome}</span>
                  <span className="mt-1 text-sm text-ink-soft">{c.resumo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Produtos */}
      <section className="bg-surface py-14" aria-labelledby="destaques">
        <div className={caixa}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 id="destaques" className="text-4xl font-bold uppercase">Produtos</h2>
              <p className="mt-2 text-ink-soft">Valor e disponibilidade você confirma direto no WhatsApp.</p>
            </div>
            <Link href="/produtos" className="shrink-0 text-sm font-semibold text-brand-strong underline">Ver todos</Link>
          </div>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUTOS.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <ProductCard produto={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative overflow-hidden bg-lime-soft py-14" aria-labelledby="como">
        <div className={`${caixa} relative`}>
          <h2 id="como" className="text-4xl font-bold uppercase">Como funciona</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['1', 'Escolha o produto', 'Veja as categorias ou busque pelo nome na página de produtos.'],
              ['2', 'Chame no WhatsApp', 'Cada produto tem um botão que já abre a conversa com a mensagem escrita.'],
              ['3', 'Combine com a loja', 'Pergunte o valor e se o item está em estoque.'],
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-[var(--radius-card)] bg-surface p-5 shadow-[var(--shadow-card)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest font-display text-2xl font-bold text-lime">{n}</span>
                <p className="mt-3 font-display text-2xl font-bold uppercase">{t}</p>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Loja e região */}
      <section className="bg-canvas py-14" aria-labelledby="loja">
        <div className={caixa}>
          <div className="grid gap-8 rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-8">
            <div>
              <h2 id="loja" className="text-4xl font-bold uppercase">Visite a loja</h2>
              <address className="mt-4 space-y-1 not-italic">
                <p className="font-semibold">{ENDERECO_TEXTO}</p>
                <p>WhatsApp: {SITE.whatsapp.exibicao}</p>
                <p>Telefone: {SITE.telefone.exibicao}</p>
                <Dado rotulo="Horário de atendimento" valor={SITE.horario} />
                <Dado rotulo="Formas de pagamento" />
                <Dado rotulo="Retirada e entrega" />
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
        </div>
      </section>

      {/* Dúvidas */}
      <section className="bg-surface py-14" aria-labelledby="duvidas">
        <div className="mx-auto max-w-3xl px-5">
          <h2 id="duvidas" className="text-4xl font-bold uppercase">Dúvidas frequentes</h2>
          <div className="mt-6 divide-y divide-line rounded-[var(--radius-card)] border border-line bg-canvas">
            {FAQ_CONFIRMADO.map((f) => (
              <details key={f.pergunta} className="group p-5">
                <summary className="cursor-pointer list-none text-lg font-bold marker:hidden">{f.pergunta}</summary>
                <p className="mt-2 text-ink-soft">{f.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
