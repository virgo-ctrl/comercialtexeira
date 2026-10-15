'use client'

import { useMemo, useState } from 'react'
import { CATEGORIAS, PRODUTOS, type CategoriaSlug } from '@/lib/catalogo'
import ProductCard from './ProductCard'

function semAcento(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

export default function CatalogoFiltro({ categoriaInicial }: { categoriaInicial?: CategoriaSlug }) {
  const [categoria, setCategoria] = useState<CategoriaSlug | 'todas'>(categoriaInicial ?? 'todas')
  const [busca, setBusca] = useState('')

  const lista = useMemo(() => {
    const q = semAcento(busca.trim())
    return PRODUTOS.filter(
      (p) => (categoria === 'todas' || p.categoria === categoria) && (!q || semAcento(p.nome).includes(q)),
    )
  }, [categoria, busca])

  const chip = (ativo: boolean) =>
    `min-h-11 rounded-full border px-4 text-sm font-semibold ${
      ativo ? 'border-brand bg-brand text-white' : 'border-line bg-surface hover:border-brand'
    }`

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="busca" className="mb-1 block text-sm font-semibold">
            Buscar produto
          </label>
          <input
            id="busca"
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Ex.: compressor, filtro, motosserra"
            className="min-h-12 w-full rounded-xl border border-line bg-surface px-4 text-base sm:max-w-md"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
          <button type="button" className={chip(categoria === 'todas')} aria-pressed={categoria === 'todas'} onClick={() => setCategoria('todas')}>
            Todas
          </button>
          {CATEGORIAS.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={chip(categoria === c.slug)}
              aria-pressed={categoria === c.slug}
              onClick={() => setCategoria(c.slug)}
            >
              {c.nome}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
        {lista.length} {lista.length === 1 ? 'produto' : 'produtos'}
      </p>

      {lista.length ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((p) => (
            <li key={p.slug}>
              <ProductCard produto={p} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 rounded-[var(--radius-card)] border border-dashed border-line bg-surface p-8 text-center">
          <p className="font-semibold">Nada encontrado para essa busca.</p>
          <p className="mt-1 text-sm text-ink-soft">Chame a loja no WhatsApp, talvez o item esteja em estoque e ainda não esteja no site.</p>
        </div>
      )}
    </div>
  )
}
