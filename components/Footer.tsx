import Link from 'next/link'
import { CATEGORIAS } from '@/lib/catalogo'
import { ENDERECO_TEXTO, SITE } from '@/lib/site'
import Pendente from './Pendente'

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-wide">{SITE.nome}</p>
          <p className="mt-3 text-sm text-white/80">Máquinas e ferramentas em Caruaru, Pernambuco.</p>
          <p className="mt-3 text-sm text-white/80">
            Razão social e CNPJ: <Pendente />
          </p>
        </div>

        <div>
          <p className="font-semibold">Categorias</p>
          <ul className="mt-3 space-y-1 text-sm text-white/80">
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
          <p className="font-semibold">Fale com a loja</p>
          <address className="mt-3 space-y-1 text-sm not-italic text-white/80">
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
            <p>
              Horário: <Pendente />
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-4 text-center text-xs text-white/70">
        <Link href="/politica-de-privacidade" className="underline">Política de privacidade</Link>
        {' · '}
        {new Date().getFullYear()} {SITE.nome}
      </div>
    </footer>
  )
}
