'use client'

import { linkWhatsApp } from '@/lib/whatsapp'
import { dispararPixel, enviarEvento, novoEventId } from '@/lib/tracking'

interface Props {
  mensagem: string
  produto?: string
  interesse?: string
  className?: string
  children: React.ReactNode
  rotuloAria?: string
}

/** Link do WhatsApp que registra o evento Contact (Pixel + servidor, mesmo event_id). */
export default function WhatsAppLink({ mensagem, produto, interesse, className, children, rotuloAria }: Props) {
  function aoClicar() {
    const eventId = novoEventId('Contact')
    dispararPixel('Contact', eventId, { content_name: produto || interesse || 'geral' })
    enviarEvento({ eventId, produto, interesse })
  }

  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotuloAria}
      onClick={aoClicar}
      className={className}
    >
      {children}
    </a>
  )
}
