import JsonLd from '@/components/JsonLd'
import CatalogoFiltro from '@/components/CatalogoFiltro'
import TopoPagina from '@/components/TopoPagina'
import { schemaMigalhas } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'

export const metadata = metaPagina({
  titulo: 'Produtos: máquinas e ferramentas em Caruaru',
  descricao: 'Veja os produtos da Comercial Teixeira por família: peças, bombas, compressores, ferramentas, solda, EPI, limpeza e piscina. Peça pelo WhatsApp.',
  caminho: '/produtos',
})

export default function Produtos() {
  return (
    <>
      <JsonLd
        dados={schemaMigalhas([
          { nome: 'Início', caminho: '/' },
          { nome: 'Produtos', caminho: '/produtos' },
        ])}
      />
      <TopoPagina
        titulo="Produtos"
        texto="Filtre por categoria ou busque pelo nome. Cada produto tem um botão que abre o WhatsApp da loja."
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <CatalogoFiltro />
      </div>
    </>
  )
}
