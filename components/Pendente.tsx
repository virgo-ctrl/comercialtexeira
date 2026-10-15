import { PENDENTE } from '@/lib/site'

/** Marcador visível para tudo que o cliente ainda não confirmou. */
export default function Pendente({ children }: { children?: React.ReactNode }) {
  return (
    <span className="rounded border border-pending-line bg-pending-bg px-1.5 py-0.5 text-sm font-semibold text-pending-ink">
      {children ?? PENDENTE}
    </span>
  )
}

export function ImagemPendente({ rotulo = 'FOTO' }: { rotulo?: string }) {
  return (
    <div
      role="img"
      aria-label="Foto do produto ainda não enviada pelo cliente"
      className="flex aspect-[4/3] w-full items-center justify-center rounded-t-[var(--radius-card)] border-b border-dashed border-pending-line bg-pending-bg p-4 text-center text-sm font-semibold text-pending-ink"
    >
      [{rotulo}: {PENDENTE.slice(1, -1)}]
    </div>
  )
}
