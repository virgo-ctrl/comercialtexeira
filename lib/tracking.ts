'use client'

// Eventos do Pixel no navegador + envio ao servidor (n8n -> API de Conversões) com o MESMO event_id,
// para a Meta deduplicar o que chegou pelos dois caminhos.

type Fbq = (...args: unknown[]) => void

declare global {
  interface Window {
    fbq?: Fbq
    _fbq?: unknown
  }
}

export type EventoMeta = 'PageView' | 'ViewContent' | 'Contact' | 'Lead'

export function novoEventId(evento: EventoMeta) {
  const aleatorio =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`
  return `${evento}.${aleatorio}`
}

export function dispararPixel(evento: EventoMeta, eventId: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', evento, params, { eventID: eventId })
}

function lerCookie(nome: string) {
  if (typeof document === 'undefined') return undefined
  const m = document.cookie.match(new RegExp(`(?:^|; )${nome}=([^;]*)`))
  return m ? decodeURIComponent(m[1]) : undefined
}

function utms() {
  const q = new URLSearchParams(window.location.search)
  const out: Record<string, string> = {}
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid']) {
    const v = q.get(k)
    if (v) out[k] = v
  }
  return out
}

/** Contexto que o servidor precisa para montar o evento da API de Conversões. */
export function contextoNavegador() {
  return {
    fbp: lerCookie('_fbp'),
    fbc: lerCookie('_fbc'),
    pageUrl: window.location.href,
    ...utms(),
  }
}

/** Envia o evento ao servidor sem travar a navegação (keepalive). */
export function enviarEvento(payload: Record<string, unknown>) {
  try {
    fetch('/api/evento', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, ...contextoNavegador() }),
      keepalive: true,
    }).catch(() => {})
  } catch {
    // rastreamento nunca pode quebrar a página
  }
}
