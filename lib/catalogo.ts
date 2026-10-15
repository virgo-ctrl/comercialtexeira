import { PENDENTE } from './site'

export type CategoriaSlug = 'oficina' | 'agro' | 'piscina' | 'limpeza' | 'construcao'

export interface Categoria {
  slug: CategoriaSlug
  nome: string
  resumo: string
}

export interface Produto {
  slug: string
  nome: string
  categoria: CategoriaSlug
  /**
   * Só vira true quando o cliente confirmar marca, ficha técnica e disponibilidade.
   * Enquanto for false, a página não emite JSON-LD de Product (regra do briefing).
   */
  dadosConfirmados: boolean
  marca?: string
  descricao?: string
  imagem?: string
  imagemAlt?: string
}

// As cinco categorias vêm do briefing. Os textos descrevem só o tipo de produto, sem marca nem preço.
export const CATEGORIAS: Categoria[] = [
  { slug: 'oficina', nome: 'Oficina', resumo: 'Compressores, furadeiras, parafusadeiras e ferramentas para bancada.' },
  { slug: 'agro', nome: 'Agro', resumo: 'Máquinas e equipamentos para o campo e o sítio.' },
  { slug: 'piscina', nome: 'Piscina', resumo: 'Filtros e itens de manutenção de piscina.' },
  { slug: 'limpeza', nome: 'Limpeza', resumo: 'Produtos e acessórios para lavadoras e limpeza pesada.' },
  { slug: 'construcao', nome: 'Construção', resumo: 'Ferramentas de corte e de obra.' },
]

// Produtos que já aparecem no Instagram da loja (briefing de 15/10). Sem marca, preço, foto ou ficha:
// tudo isso entra quando o cliente enviar.
export const PRODUTOS: Produto[] = [
  { slug: 'moenda-de-cana-a-gasolina', nome: 'Moenda de cana a gasolina', categoria: 'agro', dadosConfirmados: false },
  { slug: 'filtro-de-piscina', nome: 'Filtro de piscina', categoria: 'piscina', dadosConfirmados: false },
  { slug: 'compressor-de-ar-50-litros', nome: 'Compressor de ar 50 L', categoria: 'oficina', dadosConfirmados: false },
  { slug: 'tesoura-de-chapa', nome: 'Tesoura de chapa', categoria: 'construcao', dadosConfirmados: false },
  { slug: 'furadeiras-e-parafusadeiras', nome: 'Furadeiras e parafusadeiras', categoria: 'oficina', dadosConfirmados: false },
  { slug: 'motosserra-eletrica', nome: 'Motosserra elétrica', categoria: 'agro', dadosConfirmados: false },
  { slug: 'snow-foam-para-lavadora', nome: 'Snow foam para lavadora', categoria: 'limpeza', dadosConfirmados: false },
]

export const TEXTO_PENDENTE_PRODUTO = `Descrição, marca e ficha técnica: ${PENDENTE}`

export function categoriaPorSlug(slug: string) {
  return CATEGORIAS.find((c) => c.slug === slug)
}

export function produtoPorSlug(slug: string) {
  return PRODUTOS.find((p) => p.slug === slug)
}

export function produtosDaCategoria(slug: string) {
  return PRODUTOS.filter((p) => p.categoria === slug)
}
