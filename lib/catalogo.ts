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

// Produtos que aparecem no Instagram da loja (@comercialteixeiracaruaru). As fotos vêm das publicações da própria
// loja, recortadas sem o rodapé de telefones. Sem marca, preço ou ficha: entram quando o cliente confirmar.
export const PRODUTOS: Produto[] = [
  { slug: "moenda-de-cana-a-gasolina", nome: "Moenda de cana a gasolina", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/moenda-de-cana-a-gasolina.jpg", imagemAlt: "Moenda de cana a gasolina" },
  { slug: "filtro-de-piscina", nome: "Filtro de piscina", categoria: "piscina", dadosConfirmados: false, imagem: "/produtos/filtro-de-piscina.jpg", imagemAlt: "Filtro de piscina" },
  { slug: "compressor-de-ar-50-litros", nome: "Compressor de ar 50 L", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/compressor-de-ar-50-litros.jpg", imagemAlt: "Compressor de ar 50 L" },
  { slug: "tesoura-de-chapa", nome: "Tesoura de chapa", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/tesoura-de-chapa.jpg", imagemAlt: "Tesoura de chapa" },
  { slug: "furadeiras-e-parafusadeiras", nome: "Furadeiras e parafusadeiras", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/furadeiras-e-parafusadeiras.jpg", imagemAlt: "Furadeiras e parafusadeiras" },
  { slug: "motosserra-eletrica", nome: "Motosserra elétrica", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/motosserra-eletrica.jpg", imagemAlt: "Motosserra elétrica" },
  { slug: "snow-foam-para-lavadora", nome: "Snow foam para lavadora", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/snow-foam-para-lavadora.jpg", imagemAlt: "Snow foam para lavadora" },
  { slug: "bomba-dagua", nome: "Bomba d'água", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/bomba-dagua.jpg", imagemAlt: "Bomba d'água" },
  { slug: "compressor-para-poco-artesiano", nome: "Compressor para poço artesiano", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/compressor-para-poco-artesiano.jpg", imagemAlt: "Compressor para poço artesiano" },
  { slug: "controlador-de-pressao", nome: "Controlador de pressão para bomba d'água", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/controlador-de-pressao.jpg", imagemAlt: "Controlador de pressão para bomba d'água" },
  { slug: "podador-de-galhos", nome: "Podador de galhos elétrico", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/podador-de-galhos.jpg", imagemAlt: "Podador de galhos elétrico" },
  { slug: "aparador-de-grama", nome: "Aparador de grama", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/aparador-de-grama.jpg", imagemAlt: "Aparador de grama" },
  { slug: "inversor-de-solda", nome: "Inversor de solda", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/inversor-de-solda.jpg", imagemAlt: "Inversor de solda" },
  { slug: "extratora-de-limpeza", nome: "Extratora de limpeza", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/extratora-de-limpeza.jpg", imagemAlt: "Extratora de limpeza" },
  { slug: "desempenadeira-eletrica", nome: "Desempenadeira elétrica", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/desempenadeira-eletrica.jpg", imagemAlt: "Desempenadeira elétrica" },
  { slug: "lixadeira-de-parede", nome: "Lixadeira de parede", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/lixadeira-de-parede.jpg", imagemAlt: "Lixadeira de parede" },
  { slug: "maquina-de-pintura-airless", nome: "Máquina de pintura airless", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/maquina-de-pintura-airless.jpg", imagemAlt: "Máquina de pintura airless" },
  { slug: "talha-manual", nome: "Talha manual", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/talha-manual.jpg", imagemAlt: "Talha manual" },
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
