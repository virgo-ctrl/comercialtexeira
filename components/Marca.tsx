import { ARCO_EXTERNO, ARCO_INTERNO, COR_ARCO_EXTERNO, COR_ARCO_INTERNO } from '@/lib/marca'

/** Os dois arcos da logo, usados como elemento gráfico. `className` controla tamanho e posição. */
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
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <path d={ARCO_EXTERNO} fill={externo} />
      <path d={ARCO_INTERNO} fill={interno} />
    </svg>
  )
}

/** Logo completa: arcos + "Comercial" em verde-limão e "Teixeira" em verde, como no original. */
export default function Logo({ escuro = false, className = '' }: { escuro?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Arcos className="h-10 w-10 shrink-0" />
      <span className="flex flex-col font-display font-bold uppercase leading-[0.95] tracking-[0.08em]">
        <span className={`text-[0.95rem] ${escuro ? 'text-lime' : 'text-brand-strong'}`}>Comercial</span>
        <span className={`text-[1.45rem] ${escuro ? 'text-on-dark' : 'text-ink'}`}>Teixeira</span>
      </span>
    </span>
  )
}
