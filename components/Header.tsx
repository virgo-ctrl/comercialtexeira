import Link from 'next/link'
import { SITE } from '@/lib/site'
import { mensagemGeral } from '@/lib/whatsapp'
import Logo from './Marca'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-x-6 px-5 py-2">
        <Link href="/" aria-label={`${SITE.nome}, página inicial`}>
          <Logo />
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-5 text-sm font-semibold">
          <Link href="/produtos" className="py-2 hover:text-brand-strong">Produtos</Link>
          <Link href="/contato" className="py-2 hover:text-brand-strong">Contato</Link>
          <WhatsAppLink
            mensagem={mensagemGeral()}
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-white hover:bg-whatsapp-strong sm:inline-flex"
          >
            <WhatsAppIcon tamanho={18} />
            WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  )
}
