import { Arcos } from './Marca'

/** Faixa verde-floresta com os arcos da logo, usada no topo das páginas internas. */
export default function TopoPagina({
  titulo,
  texto,
  migalhas,
}: {
  titulo: string
  texto?: string
  migalhas?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-on-dark">
      <Arcos className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 opacity-25 sm:h-96 sm:w-96 sm:opacity-80" />
      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:py-14">
        {migalhas && <nav aria-label="Você está em" className="text-sm text-on-dark-soft [&_a]:underline">{migalhas}</nav>}
        <h1 className="mt-2 text-5xl font-bold uppercase">{titulo}</h1>
        {texto && <p className="mt-3 max-w-xl text-lg text-on-dark-soft">{texto}</p>}
      </div>
    </section>
  )
}
