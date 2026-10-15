import {
  ARCO_EXTERNO,
  ARCO_INTERNO,
  COR_ARCO_EXTERNO,
  COR_ARCO_INTERNO,
  HORIZONTAL_SIMBOLO_TRANSFORM,
  HORIZONTAL_TEXTO_TRANSFORM,
  HORIZONTAL_VIEWBOX,
  SIMBOLO_VIEWBOX,
  WORDMARK_COMERCIAL,
  WORDMARK_TEIXEIRA,
} from '@/lib/marca'

/** Os dois arcos da logo oficial, usados como elemento gráfico. `className` controla tamanho e posição. */
export function Arcos({
  className,
  externo = COR_ARCO_EXTERNO,
  interno = COR_ARCO_INTERNO,
}: {
  className?: string
  externo?: string
  interno?: string
}) {
  return (
    <svg viewBox={SIMBOLO_VIEWBOX} className={className} aria-hidden="true" focusable="false">
      <path d={ARCO_EXTERNO} fill={externo} fillRule="evenodd" />
      <path d={ARCO_INTERNO} fill={interno} fillRule="evenodd" />
    </svg>
  )
}

/**
 * Logo horizontal oficial (logo-teixeira-horizontal.svg). Em fundo claro "Comercial" fica em verde escuro e
 * "Teixeira" em carvão; em fundo escuro, verde-limão e branco (design system v2, seção 4.1).
 */
export default function Logo({ escuro = false, className = 'h-14 w-auto' }: { escuro?: boolean; className?: string }) {
  return (
    <svg viewBox={HORIZONTAL_VIEWBOX} className={className} role="img" aria-label="Comercial Teixeira">
      <g transform={HORIZONTAL_SIMBOLO_TRANSFORM}>
        <path d={ARCO_EXTERNO} fill={COR_ARCO_EXTERNO} fillRule="evenodd" />
        <path d={ARCO_INTERNO} fill={COR_ARCO_INTERNO} fillRule="evenodd" />
      </g>
      <g transform={HORIZONTAL_TEXTO_TRANSFORM}>
        <path d={WORDMARK_COMERCIAL} fill={escuro ? '#a8d23c' : '#05683a'} />
        <path d={WORDMARK_TEIXEIRA} fill={escuro ? '#ffffff' : '#0f1f16'} />
      </g>
    </svg>
  )
}
