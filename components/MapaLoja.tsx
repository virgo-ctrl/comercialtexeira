import { SITE } from '@/lib/site'

const consulta = `Comercial Teixeira, ${SITE.endereco.rua}, ${SITE.endereco.cidade}, ${SITE.endereco.uf}`
const embed = `https://www.google.com/maps?q=${encodeURIComponent(consulta)}&output=embed&hl=pt-BR`
const abrir = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(consulta)}`
const rota = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(consulta)}`

/** Mapa da loja. O iframe é preguiçoso (só carrega perto da dobra) para não pesar o primeiro carregamento. */
export default function MapaLoja({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-canvas">
        <iframe
          src={embed}
          title="Mapa com a localização da Comercial Teixeira em Caruaru"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-72 w-full border-0 sm:h-80"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-3">
        <a
          href={rota}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-whatsapp px-5 py-2 text-sm font-semibold text-white hover:bg-whatsapp-strong"
        >
          Como chegar
        </a>
        <a
          href={abrir}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-surface px-5 py-2 text-sm font-semibold text-ink hover:border-brand-strong"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
  )
}
