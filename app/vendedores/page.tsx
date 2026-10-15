import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { Arcos } from '@/components/Marca'
import TopoPagina from '@/components/TopoPagina'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import WhatsAppLink from '@/components/WhatsAppLink'
import { schemaMigalhas } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'
import { ENDERECO_TEXTO, SITE } from '@/lib/site'
import { VENDEDORES } from '@/lib/vendedores'
import { mensagemVendedor } from '@/lib/whatsapp'

export const metadata = metaPagina({
  titulo: 'Fale com um vendedor',
  descricao:
    'Escolha com quem falar na Comercial Teixeira, em Caruaru. Cada vendedor tem o seu WhatsApp, com a mensagem já escrita.',
  caminho: '/vendedores',
})

export default function Vendedores() {
  return (
    <>
      <JsonLd
        dados={schemaMigalhas([
          { nome: 'Início', caminho: '/' },
          { nome: 'Fale com um vendedor', caminho: '/vendedores' },
        ])}
      />
      <TopoPagina
        titulo="Fale com um vendedor"
        texto="Escolha com quem você quer falar. O WhatsApp abre com a mensagem já escrita."
        migalhas={
          <>
            <Link href="/">Início</Link> / Fale com um vendedor
          </>
        }
      />

      <div className="mx-auto max-w-5xl px-5 py-10">
        <ul className="grid gap-5 sm:grid-cols-2">
          {VENDEDORES.map((v) => (
            <li key={v.slug}>
              <article
                aria-labelledby={`vendedor-${v.slug}`}
                className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <Arcos className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-15" />
                <div className="relative flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest font-display text-4xl font-bold text-lime"
                  >
                    {v.inicial}
                  </span>
                  <div>
                    <h2 id={`vendedor-${v.slug}`} className="text-3xl font-bold uppercase leading-tight">
                      {v.nome}
                    </h2>
                    <p className="text-sm text-ink-soft">{v.papel}</p>
                  </div>
                </div>

                <p className="relative mt-5 text-ink-soft">
                  WhatsApp:{' '}
                  <a className="font-semibold text-ink underline" href={`tel:+${v.whatsapp}`}>
                    {v.exibicao}
                  </a>
                </p>

                <div className="relative mt-auto pt-5">
                <WhatsAppLink
                  mensagem={mensagemVendedor(v.chamar)}
                  numero={v.whatsapp}
                  interesse={`Vendedor: ${v.nome}`}
                  rotuloAria={`Chamar ${v.nome} no WhatsApp, ${v.exibicao}`}
                  className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-lg font-bold text-white hover:bg-whatsapp-strong"
                >
                  <WhatsAppIcon tamanho={22} />
                  Chamar {v.chamar}
                </WhatsAppLink>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-ink-soft">
          Prefere ir à loja? Ela fica na {ENDERECO_TEXTO}. Veja o mapa e o telefone fixo, {SITE.telefone.exibicao}, em{' '}
          <Link href="/contato" className="font-semibold text-brand-strong underline">
            Contato
          </Link>
          .
        </p>
      </div>
    </>
  )
}
