'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SITE } from '@/lib/site'
import { dispararPixel, novoEventId } from '@/lib/tracking'

function prepararFbq() {
  if (window.fbq) return
  const fbq = function (...args: unknown[]) {
    const f = fbq as unknown as { callMethod?: (...a: unknown[]) => void; queue: unknown[][] }
    if (f.callMethod) f.callMethod(...args)
    else f.queue.push(args)
  } as unknown as NonNullable<Window['fbq']> & { queue: unknown[][]; loaded: boolean; version: string; push: unknown }
  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.push = fbq
  window.fbq = fbq
  window._fbq = fbq
  window.fbq('init', SITE.pixelId)
}

function carregarScript() {
  const s = document.createElement('script')
  s.async = true
  s.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(s)
}

export default function MetaPixel() {
  const pathname = usePathname()

  // O stub entra na hora (eventos ficam na fila); o script da Meta só carrega quando o navegador está ocioso,
  // para não pesar no LCP.
  useEffect(() => {
    prepararFbq()
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void })
      .requestIdleCallback
    if (ric) ric(carregarScript, { timeout: 3000 })
    else setTimeout(carregarScript, 1500)
  }, [])

  useEffect(() => {
    dispararPixel('PageView', novoEventId('PageView'))
  }, [pathname])

  return null
}
