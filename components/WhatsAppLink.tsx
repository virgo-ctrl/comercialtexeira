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
  /** Número de outro destinatário (vendedor). Sem ele, vai para o WhatsApp da loja. */
  numero?: string
}

/** Link do WhatsApp que registra o evento Contact (Pixel + servidor, mesmo event_id). */
export default function WhatsAppLink({ mensagem, produto, interesse, className, children, rotuloAria, numero }: Props) {
  function aoClicar() {
    const eventId = novoEventId('Contact')
    dispararPixel('Contact', eventId, { content_name: produto || interesse || 'geral' })
    enviarEvento({ eventId, produto, interesse })
  }

  return (
    <a
      href={linkWhatsApp(mensagem, numero)}
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
