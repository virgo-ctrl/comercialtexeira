'use client'

import { useEffect } from 'react'
import { dispararPixel, enviarEvento, novoEventId } from '@/lib/tracking'

/** Um listener para todos os links do WhatsApp (a[data-wa]): registra o evento Contact no Pixel e no servidor. */
export default function RastreioWhatsApp() {
  useEffect(() => {
    function aoClicar(e: MouseEvent) {
      const alvo = e.target
      if (!(alvo instanceof Element)) return
      const link = alvo.closest<HTMLAnchorElement>('a[data-wa]')
      if (!link) return
      const produto = link.dataset.produto || undefined
      const interesse = link.dataset.interesse || undefined
      const eventId = novoEventId('Contact')
      dispararPixel('Contact', eventId, { content_name: produto || interesse || 'geral' })
      enviarEvento({ eventId, produto, interesse })
    }
    document.addEventListener('click', aoClicar)
    return () => document.removeEventListener('click', aoClicar)
  }, [])
  return null
}
