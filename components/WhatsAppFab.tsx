'use client'

import { usePathname } from 'next/navigation'
import { categoriaPorSlug, produtoPorSlug } from '@/lib/catalogo'
import { mensagemCategoria, mensagemGeral, mensagemProduto } from '@/lib/whatsapp'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

/** Botão fixo. A mensagem muda conforme a página: produto, categoria ou geral. */
export default function WhatsAppFab() {
  const pathname = usePathname()
  const [, rota, slug] = pathname.split('/')

  let mensagem = mensagemGeral()
  let produto: string | undefined
  let interesse: string | undefined

  if (rota === 'produto' && slug) {
    const p = produtoPorSlug(slug)
    if (p) {
      mensagem = mensagemProduto(p.nome)
      produto = p.nome
      interesse = categoriaPorSlug(p.categoria)?.nome
    }
  } else if (rota === 'categoria' && slug) {
    const c = categoriaPorSlug(slug)
    if (c) {
      mensagem = mensagemCategoria(c.nome)
      interesse = c.nome
    }
  }

  return (
    <WhatsAppLink
      mensagem={mensagem}
      produto={produto}
      interesse={interesse}
      rotuloAria="Falar com a Comercial Teixeira no WhatsApp"
      className="pulse-whatsapp fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-strong"
    >
      <WhatsAppIcon tamanho={28} />
    </WhatsAppLink>
  )
}
