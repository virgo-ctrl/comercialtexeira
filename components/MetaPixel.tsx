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

  // O stub entra na hora (PageView e demais eventos ficam na fila). O script da Meta, que sozinho leva
  // ~400 ms de CPU, só carrega na primeira interação ou depois de 4,5 s, para não pesar no TBT e no LCP.
  useEffect(() => {
    prepararFbq()
    let carregado = false
    const eventos = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const
    const carregar = () => {
      if (carregado) return
      carregado = true
      eventos.forEach((e) => window.removeEventListener(e, carregar))
      clearTimeout(timer)
      carregarScript()
    }
    const timer = setTimeout(carregar, 4500)
    eventos.forEach((e) => window.addEventListener(e, carregar, { passive: true, once: true }))
    return () => {
      clearTimeout(timer)
      eventos.forEach((e) => window.removeEventListener(e, carregar))
    }
  }, [])

  useEffect(() => {
    dispararPixel('PageView', novoEventId('PageView'))
  }, [pathname])

  return null
}
