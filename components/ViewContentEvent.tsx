'use client'

import { useEffect } from 'react'
import { dispararPixel, novoEventId } from '@/lib/tracking'

/** Dispara ViewContent quando a página de produto ou de categoria abre. */
export default function ViewContentEvent({ nome, categoria }: { nome: string; categoria?: string }) {
  useEffect(() => {
    dispararPixel('ViewContent', novoEventId('ViewContent'), {
      content_name: nome,
      content_category: categoria,
      content_type: 'product',
    })
  }, [nome, categoria])
  return null
}
