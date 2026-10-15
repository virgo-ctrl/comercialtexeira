import Link from 'next/link'
import { CATEGORIAS } from '@/lib/catalogo'
import { ENDERECO_TEXTO, SITE } from '@/lib/site'
import Logo, { Arcos } from './Marca'
import { Dado } from './Pendente'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-on-dark">
      <Arcos className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 opacity-15" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3">
        <div>
          <Logo escuro className="h-16 w-auto" />
          <p className="mt-4 text-sm text-on-dark-soft">Máquinas e ferramentas em Caruaru, Pernambuco.</p>
          <div className="mt-3 space-y-1 text-sm text-on-dark-soft">
            <Dado rotulo="Razão social" valor={SITE.razaoSocial} />
            <Dado rotulo="CNPJ" valor={SITE.cnpj} />
          </div>
        </div>

        <div>
          <p className="font-display text-lg font-bold uppercase tracking-wider text-lime">Categorias</p>
          <ul className="mt-3 space-y-1 text-sm text-on-dark-soft">
            {CATEGORIAS.map((c) => (
              <li key={c.slug}>
                <Link href={`/categoria/${c.slug}`} className="inline-block py-1 hover:text-white hover:underline">
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-lg font-bold uppercase tracking-wider text-lime">Fale com a loja</p>
          <address className="mt-3 space-y-1 text-sm not-italic text-on-dark-soft">
            <p>{ENDERECO_TEXTO}</p>
            <p>
              WhatsApp:{' '}
              <a className="underline" href={`https://wa.me/${SITE.whatsapp.numero}`} rel="noopener noreferrer">
                {SITE.whatsapp.exibicao}
              </a>
            </p>
            <p>
              Telefone: <a className="underline" href={`tel:${SITE.telefone.tel}`}>{SITE.telefone.exibicao}</a>
            </p>
            <p>
              Instagram:{' '}
              <a className="underline" href={SITE.instagram} rel="noopener noreferrer" target="_blank">
                @comercialteixeiracaruaru
              </a>
            </p>
            <Dado rotulo="Horário" valor={SITE.horario} />
          </address>
        </div>
      </div>
      <div className="relative border-t border-white/15 px-5 py-4 text-center text-xs text-on-dark-soft">
        <Link href="/politica-de-privacidade" className="underline">Política de privacidade</Link>
        {' · '}
        {new Date().getFullYear()} {SITE.nome}
      </div>
    </footer>
  )
}
