import type { CategoriaSlug } from '@/lib/catalogo'
import { MOSTRAR_PENDENTES, PENDENTE } from '@/lib/site'
import { Arcos } from './Marca'
import IconeCategoria from './IconeCategoria'

/** Marcador de pendência. Só renderiza com SHOW_PENDING=1 (preview e dev); em produção some. */
export default function Pendente({ children }: { children?: React.ReactNode }) {
  if (!MOSTRAR_PENDENTES) return null
  return (
    <span className="rounded border border-pending-line bg-pending-bg px-1.5 py-0.5 text-sm font-semibold text-pending-ink">
      {children ?? PENDENTE}
    </span>
  )
}

/**
 * Linha "rótulo: valor". Sem valor confirmado, a linha não existe em produção.
 * Com SHOW_PENDING=1 aparece com o marcador, para a equipe ver o que falta.
 */
export function Dado({ rotulo, valor }: { rotulo: string; valor?: string }) {
  const confirmado = valor && valor !== PENDENTE
  if (!confirmado && !MOSTRAR_PENDENTES) return null
  return (
    <p>
      {rotulo}: {confirmado ? valor : <Pendente />}
    </p>
  )
}

/** Placeholder de marca para produto sem foto: fundo neutro, ícone da categoria e "Foto em breve". */
export function FotoEmBreve({ categoria, className = '' }: { categoria: CategoriaSlug; className?: string }) {
  return (
    <div
      role="img"
      aria-label="Foto do produto em breve"
      className={`relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 overflow-hidden bg-brand-soft text-brand-strong ${className}`}
    >
      <Arcos className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 opacity-25" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-surface shadow-[var(--shadow-card)]">
        <IconeCategoria slug={categoria} className="h-8 w-8" />
      </span>
      <span className="relative text-sm font-semibold">Foto em breve</span>
    </div>
  )
}
