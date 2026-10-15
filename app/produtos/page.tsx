import JsonLd from '@/components/JsonLd'
import CatalogoFiltro from '@/components/CatalogoFiltro'
import { schemaMigalhas } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'

export const metadata = metaPagina({
  titulo: 'Produtos: máquinas e ferramentas em Caruaru',
  descricao: 'Veja os produtos da Comercial Teixeira por categoria: oficina, agro, piscina, limpeza e construção. Peça pelo WhatsApp.',
  caminho: '/produtos',
})

export default function Produtos() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <JsonLd
        dados={schemaMigalhas([
          { nome: 'Início', caminho: '/' },
          { nome: 'Produtos', caminho: '/produtos' },
        ])}
      />
      <h1 className="text-5xl font-bold uppercase">Produtos</h1>
      <p className="mt-2 max-w-xl text-ink-soft">Filtre por categoria ou busque pelo nome. Cada produto tem um botão que abre o WhatsApp da loja.</p>
      <div className="mt-8">
        <CatalogoFiltro />
      </div>
    </div>
  )
}
