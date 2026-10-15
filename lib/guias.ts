import type { CategoriaSlug } from './catalogo'

export interface Guia {
  titulo: string
  /** Itens exatamente como a loja listou no post ("Use: ...") da série #simplesassim. */
  usar: string[]
  /** Família do catálogo onde a pessoa encontra os itens. */
  categoria: CategoriaSlug
}

// Série "Serviços que você mesmo pode fazer" (#simplesassim), publicada pela loja no Instagram em abril de 2018.
// Só entram os itens que os próprios posts citam. Nenhum passo a passo foi acrescentado.
export const GUIAS: Guia[] = [
  {
    titulo: 'Pendurar objetos',
    usar: ['Trena', 'Furadeira', 'Lápis', 'Parafusos com bucha para paredes', 'Chave de fenda'],
    categoria: 'ferramentas-eletricas',
  },
  {
    titulo: 'Soldagem',
    usar: ['Máquina de solda (portátil)', 'Botas', 'Luvas', 'Máscara de proteção', 'Eletrodos'],
    categoria: 'solda',
  },
  {
    titulo: 'Jardinagem',
    usar: ['Luvas', 'Ancinho', 'Roçadeira', 'Botas', 'Óculos de proteção'],
    categoria: 'motores-jardinagem',
  },
  {
    titulo: 'Pintura',
    usar: ['Mangueira de alta pressão', 'Pistola', 'Compressor'],
    categoria: 'compressores-pneumatica',
  },
  {
    titulo: 'Lavar o carro',
    usar: ['Detergente automotivo', 'Aspirador', 'Lavadora de alta pressão'],
    categoria: 'limpeza',
  },
]
