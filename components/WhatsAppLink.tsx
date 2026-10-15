import { linkWhatsApp } from '@/lib/whatsapp'

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

/**
 * Link do WhatsApp. Não é componente de cliente de propósito: a home tem mais de 20 botões e hidratar cada um pesava
 * no TBT. O evento Contact (Pixel + servidor, mesmo event_id) sai do listener único em RastreioWhatsApp,
 * que lê os atributos data-* deste link.
 */
export default function WhatsAppLink({ mensagem, produto, interesse, className, children, rotuloAria, numero }: Props) {
  return (
    <a
      href={linkWhatsApp(mensagem, numero)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotuloAria}
      data-wa=""
      data-produto={produto}
      data-interesse={interesse}
      className={className}
    >
      {children}
    </a>
  )
}
