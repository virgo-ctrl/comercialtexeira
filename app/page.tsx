import MapaLoja from '@/components/MapaLoja'
import Link from 'next/link'
import IconeCategoria from '@/components/IconeCategoria'
import JsonLd from '@/components/JsonLd'
import { Arcos } from '@/components/Marca'
import { Dado } from '@/components/Pendente'
import ProductCard from '@/components/ProductCard'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import WhatsAppLink from '@/components/WhatsAppLink'
import { CATEGORIAS, PRODUTOS, categoriaPorSlug, type CategoriaSlug } from '@/lib/catalogo'
import { GUIAS } from '@/lib/guias'
import { FAQ_CONFIRMADO, schemaFaq, schemaLoja, schemaSite } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'
import {
  CONFIRMADO_ASSISTENCIA,
  CONFIRMADO_ENTREGA,
  CONFIRMADO_FOTO_PECA,
  CONFIRMADO_ITENS_ESTOQUE,
  CONFIRMADO_MELHOR_LOJA,
  CONFIRMADO_NOTA_GOOGLE,
  ENDERECO_TEXTO,
  SITE,
} from '@/lib/site'
import { mensagemGeral, mensagemGuia, mensagemPeca } from '@/lib/whatsapp'

export const metadata = metaPagina({
  titulo: `${SITE.nome} | Peças, ferramentas e máquinas em Caruaru-PE`,
  descricao:
    'Peça, ferramenta e máquina no mesmo balcão, em Caruaru. Carburador, correia, bomba, compressor, furadeira, solda e EPI. Peça valor e disponibilidade pelo WhatsApp.',
  caminho: '/',
})

const caixa = 'mx-auto max-w-6xl px-5'

// Peças que a loja cita na estratégia de copy (lista de estoque de 15/10/2026).
const PECAS = ['Carburador', 'Filtro de ar', 'Anel e pistão', 'Bobina', 'Correia', 'Rolamento', 'Kit de reparo', 'Vedação de bomba']

// "Por tipo de trabalho": cada tipo leva à família do catálogo que resolve o serviço.
const TIPOS: { nome: string; texto: string; categoria: CategoriaSlug }[] = [
  { nome: 'Oficina e mecânica', texto: 'Peças, compressores e ferramentas manuais.', categoria: 'pecas-motores-maquinas' },
  { nome: 'Obra e construção', texto: 'Betoneira, placa vibratória, talha e paleteira.', categoria: 'obra-e-carga' },
  { nome: 'Campo e jardim', texto: 'Roçadeira, motosserra e gerador.', categoria: 'motores-jardinagem' },
  { nome: 'Água e bombas', texto: 'Bombas, vedações e adaptadores.', categoria: 'bombas-hidraulica' },
  { nome: 'Solda', texto: 'Inversor, eletrodos e máscara.', categoria: 'solda' },
  { nome: 'Segurança no trabalho', texto: 'Luvas, botas e óculos de proteção.', categoria: 'epi' },
  { nome: 'Limpeza', texto: 'Lavadoras de alta pressão e aspiradores.', categoria: 'limpeza' },
]

export default function Home() {
  const regiao: string[] = [...SITE.regiao]
  const sede = regiao[0]
  const demaisCidades = regiao.slice(1)
  const listaCidades = `${demaisCidades.slice(0, -1).join(', ')} e ${demaisCidades[demaisCidades.length - 1]}`
  const fatos: [string, string][] = [
    ['Loja física em Caruaru', ENDERECO_TEXTO],
    ['Atendimento no WhatsApp', SITE.whatsapp.exibicao],
    ['Região atendida', `Atendemos ${sede} e região: ${listaCidades}.`],
    ...(CONFIRMADO_NOTA_GOOGLE ? ([['Avaliação no Google', '4,5 no Google, com 395 avaliações']] as [string, string][]) : []),
  ]

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
              <span className="h-px w-8 shrink-0 bg-lime" aria-hidden="true" />
              {CONFIRMADO_MELHOR_LOJA ? 'A melhor loja de máquinas e ferramentas do Brasil' : 'Caruaru, Pernambuco'}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
              Peça, ferramenta e máquina no mesmo balcão, em <span className="text-lime">Caruaru</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-on-dark-soft">
              Carburador, anel, correia, bomba, compressor, furadeira, solda e EPI.{' '}
              {CONFIRMADO_ITENS_ESTOQUE && 'Mais de 7 mil itens em estoque. '}
              Diga o que você precisa e a loja responde pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                mensagem={mensagemGeral()}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3 text-lg font-bold text-white ring-2 ring-white/30 hover:bg-whatsapp-strong"
              >
                <WhatsAppIcon tamanho={22} />
                Pedir pelo WhatsApp
              </WhatsAppLink>
              <a
                href="#categorias"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 py-3 text-lg font-bold text-ink hover:bg-lime-soft"
              >
                Ver categorias
              </a>
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

      {/* Faixa de confiança */}
      <section className="border-b border-line bg-surface" aria-label="Sobre a loja">
        <ul className={`${caixa} grid gap-6 py-8 sm:grid-cols-2 ${fatos.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {fatos.map(([titulo, texto], i) => (
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

      {/* Máquina parada? */}
      <section id="pecas" className="relative overflow-hidden bg-lime-soft py-14" aria-labelledby="maquina-parada">
        <Arcos className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 opacity-20" />
        <div className={`${caixa} relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]`}>
          <div>
            <h2 id="maquina-parada" className="text-4xl font-bold uppercase">Máquina parada? Procure a peça</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Roçadeira, motosserra, motor estacionário, compressor ou bomba.{' '}
              {CONFIRMADO_FOTO_PECA ? 'Mande o modelo ou uma foto da peça' : 'Mande o modelo'} pelo WhatsApp e a loja confere se
              tem em estoque.
            </p>
            {CONFIRMADO_ASSISTENCIA && (
              <p className="mt-2 max-w-xl text-ink-soft">A loja também faz assistência técnica de máquinas.</p>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppLink
                mensagem={mensagemPeca()}
                interesse="Peças para motores e máquinas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white hover:bg-whatsapp-strong"
              >
                <WhatsAppIcon tamanho={20} />
                Perguntar pela peça
              </WhatsAppLink>
              <Link
                href="/categoria/pecas-motores-maquinas"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-ink px-6 py-3 font-bold hover:bg-ink hover:text-white"
              >
                Ver peças
              </Link>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Peças que você pode pedir">
            {PECAS.map((p) => (
              <li key={p} className="rounded-full bg-surface px-4 py-2 font-semibold text-brand-strong shadow-[var(--shadow-card)]">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Categorias */}
      <section id="categorias" className="scroll-mt-20 bg-canvas py-14" aria-labelledby="categorias-titulo">
        <div className={caixa}>
          <h2 id="categorias-titulo" className="text-4xl font-bold uppercase">Categorias</h2>
          <p className="mt-2 text-ink-soft">Escolha pela família do produto, com as peças em primeiro lugar.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {CATEGORIAS.map((c) => (
              <li key={c.slug} className={c.destaque ? 'col-span-2' : undefined}>
                <Link
                  href={`/categoria/${c.slug}`}
                  className={`group flex h-full flex-col rounded-[var(--radius-card)] border p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] sm:p-5 ${
                    c.destaque
                      ? 'border-brand-strong bg-brand-strong text-white'
                      : 'border-line bg-surface hover:border-brand'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      c.destaque
                        ? 'bg-white/15 text-lime'
                        : 'bg-brand-soft text-brand-strong group-hover:bg-brand-strong group-hover:text-white'
                    }`}
                  >
                    <IconeCategoria slug={c.slug} className="h-6 w-6" />
                  </span>
                  <span className="mt-3 font-display text-xl font-bold uppercase leading-tight sm:text-2xl">{c.nome}</span>
                  <span className={`mt-1 text-sm ${c.destaque ? 'text-white/90' : 'hidden text-ink-soft sm:block'}`}>{c.resumo}</span>
                </Link>
              </li>
            ))}
            <li>
              <WhatsAppLink
                mensagem={mensagemGeral()}
                className="flex h-full min-h-32 flex-col justify-center gap-2 rounded-[var(--radius-card)] border-2 border-dashed border-brand-strong bg-lime-soft p-4 text-brand-strong hover:bg-brand-soft sm:p-5"
              >
                <span className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl">Não achou o item?</span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <WhatsAppIcon tamanho={18} />
                  Pergunte pelo WhatsApp
                </span>
              </WhatsAppLink>
            </li>
          </ul>
        </div>
      </section>

      {/* Marcas */}
      <section className="bg-surface py-14" aria-labelledby="marcas">
        <div className={caixa}>
          <h2 id="marcas" className="text-4xl font-bold uppercase">Marcas que a loja trabalha</h2>
          <p className="mt-2 text-ink-soft">Nomes que aparecem no estoque da loja. Pergunte pela marca que você procura.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SITE.marcas.map((m) => (
              <li key={m} className="rounded-full border border-line bg-canvas px-4 py-2 font-display text-lg font-bold uppercase tracking-wide">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Por tipo de trabalho */}
      <section className="bg-canvas py-14" aria-labelledby="tipo-trabalho">
        <div className={caixa}>
          <h2 id="tipo-trabalho" className="text-4xl font-bold uppercase">Por tipo de trabalho</h2>
          <p className="mt-2 text-ink-soft">Veja primeiro o que serve para o seu serviço.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {TIPOS.map((t) => {
              const cat = categoriaPorSlug(t.categoria)!
              return (
                <li key={t.nome}>
                  <Link
                    href={`/categoria/${cat.slug}`}
                    className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow-card)] sm:p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-strong group-hover:bg-brand-strong group-hover:text-white">
                      <IconeCategoria slug={cat.slug} className="h-5 w-5" />
                    </span>
                    <span className="mt-3 font-display text-xl font-bold uppercase leading-tight">{t.nome}</span>
                    <span className="mt-1 text-sm text-ink-soft">{t.texto}</span>
                  </Link>
                </li>
              )
            })}
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

      {/* Faça você mesmo */}
      <section className="bg-canvas py-14" aria-labelledby="faca-voce-mesmo">
        <div className={caixa}>
          <h2 id="faca-voce-mesmo" className="text-4xl font-bold uppercase">Faça você mesmo: simples assim</h2>
          <p className="mt-2 max-w-2xl text-ink-soft">
            Guias curtos da série que a loja publica no Instagram. Cada um lista o que usar no serviço.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIAS.map((g) => {
              const cat = categoriaPorSlug(g.categoria)!
              return (
                <li
                  key={g.titulo}
                  className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-5 shadow-[var(--shadow-card)]"
                >
                  <h3 className="font-display text-2xl font-bold uppercase text-brand-strong">{g.titulo}</h3>
                  <p className="mt-2 text-sm font-semibold">Use:</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-ink-soft">
                    {g.usar.map((u) => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 sm:mt-auto">
                    <WhatsAppLink
                      mensagem={mensagemGuia(g.titulo, g.usar)}
                      interesse={cat.nome}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-5 py-2 text-sm font-bold text-white hover:bg-whatsapp-strong"
                    >
                      <WhatsAppIcon tamanho={18} />
                      Pedir esses itens
                    </WhatsAppLink>
                    <Link href={`/categoria/${cat.slug}`} className="text-sm font-semibold text-brand-strong underline">
                      {cat.nome}
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Como pedir */}
      <section className="relative overflow-hidden bg-lime-soft py-14" aria-labelledby="como">
        <div className={`${caixa} relative`}>
          <h2 id="como" className="text-4xl font-bold uppercase">Como pedir</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['1', 'Diga o que precisa', `Fale o produto ou o modelo${CONFIRMADO_FOTO_PECA ? ', ou mande uma foto' : ''}.`],
              ['2', 'A loja confirma', 'A loja informa o valor e se o item está em estoque.'],
              ['3', 'Combine com a loja', `Você combina a retirada${CONFIRMADO_ENTREGA ? ' ou a entrega' : ''} com a loja.`],
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
          <MapaLoja className="mt-6" />
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
