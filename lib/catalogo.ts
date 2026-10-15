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
  { slug: "politriz-angular-750-w", nome: "Politriz angular 750 W", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/politriz-angular-750-w.jpg", imagemAlt: "Politriz angular 750 W" },
  { slug: "botas-de-seguranca", nome: "Botas de segurança", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/botas-de-seguranca.jpg", imagemAlt: "Botas de segurança" },
  { slug: "mini-serra-eletrica-24-v", nome: "Mini serra elétrica 24 V", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/mini-serra-eletrica-24-v.jpg", imagemAlt: "Mini serra elétrica 24 V" },
  { slug: "faca-para-triturador-e-forrageira", nome: "Faca para triturador e forrageira", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/faca-para-triturador-e-forrageira.jpg", imagemAlt: "Faca para triturador e forrageira" },
  { slug: "tela-metalica-hexagonal", nome: "Tela metálica hexagonal", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/tela-metalica-hexagonal.jpg", imagemAlt: "Tela metálica hexagonal" },
  { slug: "maquina-para-assentar-piso-a-bateria", nome: "Máquina para assentar piso a bateria", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/maquina-para-assentar-piso-a-bateria.jpg", imagemAlt: "Máquina para assentar piso a bateria" },
  { slug: "roda-de-medicao", nome: "Roda de medição", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/roda-de-medicao.jpg", imagemAlt: "Roda de medição" },
  { slug: "alicate-desencapador-de-fios", nome: "Alicate desencapador de fios", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/alicate-desencapador-de-fios.jpg", imagemAlt: "Alicate desencapador de fios" },
  { slug: "motosserra-a-gasolina", nome: "Motosserra a gasolina", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/motosserra-a-gasolina.jpg", imagemAlt: "Motosserra a gasolina" },
  { slug: "placa-solar-340-w", nome: "Placa solar 340 W", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/placa-solar-340-w.jpg", imagemAlt: "Placa solar 340 W" },
  { slug: "empilhadeira-manual", nome: "Empilhadeira manual", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/empilhadeira-manual.jpg", imagemAlt: "Empilhadeira manual" },
  { slug: "esquadro-articulado", nome: "Esquadro articulado", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/esquadro-articulado.jpg", imagemAlt: "Esquadro articulado" },
  { slug: "serra-circular-a-bateria", nome: "Serra circular a bateria", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/serra-circular-a-bateria.jpg", imagemAlt: "Serra circular a bateria" },
  { slug: "carregadores-inteligentes-de-bateria", nome: "Carregadores inteligentes de bateria", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/carregadores-inteligentes-de-bateria.jpg", imagemAlt: "Carregadores inteligentes de bateria" },
  { slug: "aerografo-e-compressor-para-aerografia", nome: "Aerógrafo e compressor para aerografia", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/aerografo-e-compressor-para-aerografia.jpg", imagemAlt: "Aerógrafo e compressor para aerografia" },
  { slug: "removedor-de-ferrugem", nome: "Removedor de ferrugem", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/removedor-de-ferrugem.jpg", imagemAlt: "Removedor de ferrugem" },
  { slug: "compressor-odontologico", nome: "Compressor odontológico", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/compressor-odontologico.jpg", imagemAlt: "Compressor odontológico" },
  { slug: "maquina-de-solda-tig-ac-dc", nome: "Máquina de solda TIG AC/DC", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/maquina-de-solda-tig-ac-dc.jpg", imagemAlt: "Máquina de solda TIG AC/DC" },
  { slug: "bomba-para-poco-artesiano-solar", nome: "Bomba para poço artesiano solar", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/bomba-para-poco-artesiano-solar.jpg", imagemAlt: "Bomba para poço artesiano solar" },
  { slug: "motosserra-a-bateria", nome: "Motosserra a bateria", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/motosserra-a-bateria.jpg", imagemAlt: "Motosserra a bateria" },
  { slug: "pistola-de-pintura-eletrica", nome: "Pistola de pintura elétrica", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/pistola-de-pintura-eletrica.jpg", imagemAlt: "Pistola de pintura elétrica" },
  { slug: "soprador-termico", nome: "Soprador térmico", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/soprador-termico.jpg", imagemAlt: "Soprador térmico" },
  { slug: "furadeira-de-impacto", nome: "Furadeira de impacto", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/furadeira-de-impacto.jpg", imagemAlt: "Furadeira de impacto" },
  { slug: "pinador-pneumatico", nome: "Pinador pneumático", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/pinador-pneumatico.jpg", imagemAlt: "Pinador pneumático" },
  { slug: "vulcanizadora-de-camaras-de-ar", nome: "Vulcanizadora de câmaras de ar", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/vulcanizadora-de-camaras-de-ar.jpg", imagemAlt: "Vulcanizadora de câmaras de ar" },
  { slug: "furadeira-e-parafusadeira-a-bateria-12-v", nome: "Furadeira e parafusadeira a bateria 12 V", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/furadeira-e-parafusadeira-a-bateria-12-v.jpg", imagemAlt: "Furadeira e parafusadeira a bateria 12 V" },
  { slug: "martelete-rebarbador-pneumatico", nome: "Martelete rebarbador pneumático", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/martelete-rebarbador-pneumatico.jpg", imagemAlt: "Martelete rebarbador pneumático" },
  { slug: "bomba-d-agua-periferica", nome: "Bomba d'água periférica", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/bomba-d-agua-periferica.jpg", imagemAlt: "Bomba d'água periférica" },
  { slug: "retifica-pneumatica", nome: "Retífica pneumática", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/retifica-pneumatica.jpg", imagemAlt: "Retífica pneumática" },
  { slug: "plaina-base-lisa", nome: "Plaina base lisa", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/plaina-base-lisa.jpg", imagemAlt: "Plaina base lisa" },
  { slug: "furadeira-pneumatica-reversivel", nome: "Furadeira pneumática reversível", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/furadeira-pneumatica-reversivel.jpg", imagemAlt: "Furadeira pneumática reversível" },
  { slug: "esquadro-magnetico", nome: "Esquadro magnético", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/esquadro-magnetico.jpg", imagemAlt: "Esquadro magnético" },
  { slug: "placa-vibratoria", nome: "Placa vibratória", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/placa-vibratoria.jpg", imagemAlt: "Placa vibratória" },
  { slug: "parafusadeira-a-bateria-3-6-v", nome: "Parafusadeira a bateria 3,6 V", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/parafusadeira-a-bateria-3-6-v.jpg", imagemAlt: "Parafusadeira a bateria 3,6 V" },
  { slug: "aspirador-de-po-e-agua", nome: "Aspirador de pó e água", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/aspirador-de-po-e-agua.jpg", imagemAlt: "Aspirador de pó e água" },
  { slug: "tesoura-para-grama", nome: "Tesoura para grama", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/tesoura-para-grama.jpg", imagemAlt: "Tesoura para grama" },
  { slug: "motor-de-popa", nome: "Motor de popa", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/motor-de-popa.jpg", imagemAlt: "Motor de popa" },
  { slug: "mascara-de-protecao", nome: "Máscara de proteção", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/mascara-de-protecao.jpg", imagemAlt: "Máscara de proteção" },
  { slug: "oculos-de-protecao", nome: "Óculos de proteção", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/oculos-de-protecao.jpg", imagemAlt: "Óculos de proteção" },
  { slug: "pulverizador-20-litros", nome: "Pulverizador 20 litros", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/pulverizador-20-litros.jpg", imagemAlt: "Pulverizador 20 litros" },
  { slug: "atomizador-pulverizador-costal", nome: "Atomizador pulverizador costal", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/atomizador-pulverizador-costal.jpg", imagemAlt: "Atomizador pulverizador costal" },
  { slug: "jogo-de-brocas", nome: "Jogo de brocas", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/jogo-de-brocas.jpg", imagemAlt: "Jogo de brocas" },
  { slug: "bomba-para-piscina", nome: "Bomba para piscina", categoria: "piscina", dadosConfirmados: false, imagem: "/produtos/bomba-para-piscina.jpg", imagemAlt: "Bomba para piscina" },
  { slug: "furadeira-profissional-850-w", nome: "Furadeira profissional 850 W", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/furadeira-profissional-850-w.jpg", imagemAlt: "Furadeira profissional 850 W" },
  { slug: "serra-circular", nome: "Serra circular", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/serra-circular.jpg", imagemAlt: "Serra circular" },
  { slug: "lixadeira-orbital", nome: "Lixadeira orbital", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/lixadeira-orbital.jpg", imagemAlt: "Lixadeira orbital" },
  { slug: "soprador-de-folhas-eletrico", nome: "Soprador de folhas elétrico", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/soprador-de-folhas-eletrico.jpg", imagemAlt: "Soprador de folhas elétrico" },
  { slug: "cortador-de-grama", nome: "Cortador de grama", categoria: "agro", dadosConfirmados: false, imagem: "/produtos/cortador-de-grama.jpg", imagemAlt: "Cortador de grama" },
  { slug: "moto-esmeril", nome: "Moto esmeril", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/moto-esmeril.jpg", imagemAlt: "Moto esmeril" },
  { slug: "gerador", nome: "Gerador", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/gerador.jpg", imagemAlt: "Gerador" },
  { slug: "compressor-de-ar-direto", nome: "Compressor de ar direto", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/compressor-de-ar-direto.jpg", imagemAlt: "Compressor de ar direto" },
  { slug: "trenas", nome: "Trenas", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/trenas.jpg", imagemAlt: "Trenas" },
  { slug: "paleteira-hidraulica", nome: "Paleteira hidráulica", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/paleteira-hidraulica.jpg", imagemAlt: "Paleteira hidráulica" },
  { slug: "cola-rapida", nome: "Cola rápida", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/cola-rapida.jpg", imagemAlt: "Cola rápida" },
  { slug: "serra-esquadria-12-polegadas", nome: "Serra esquadria 12 polegadas", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/serra-esquadria-12-polegadas.jpg", imagemAlt: "Serra esquadria 12 polegadas" },
  { slug: "maletas-de-ferramentas", nome: "Maletas de ferramentas", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/maletas-de-ferramentas.jpg", imagemAlt: "Maletas de ferramentas" },
  { slug: "medidor-laser-de-distancia", nome: "Medidor laser de distância", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/medidor-laser-de-distancia.jpg", imagemAlt: "Medidor laser de distância" },
  { slug: "alicate-amperimetro", nome: "Alicate amperímetro", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/alicate-amperimetro.jpg", imagemAlt: "Alicate amperímetro" },
  { slug: "lavadoras-de-alta-pressao", nome: "Lavadoras de alta pressão", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/lavadoras-de-alta-pressao.jpg", imagemAlt: "Lavadoras de alta pressão" },
  { slug: "betoneira", nome: "Betoneira", categoria: "construcao", dadosConfirmados: false, imagem: "/produtos/betoneira.jpg", imagemAlt: "Betoneira" },
  { slug: "compressor-de-ar-profissional", nome: "Compressor de ar profissional", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/compressor-de-ar-profissional.jpg", imagemAlt: "Compressor de ar profissional" },
  { slug: "politriz-orbital", nome: "Politriz orbital", categoria: "oficina", dadosConfirmados: false, imagem: "/produtos/politriz-orbital.jpg", imagemAlt: "Politriz orbital" },
]

export const TEXTO_PENDENTE_PRODUTO = `Descrição, marca e ficha técnica: ${PENDENTE}`

/** Página de produto indexável: tem dados confirmados ou ao menos nome e foto reais da loja. */
export function produtoIndexavel(p: Produto) {
  return p.dadosConfirmados || Boolean(p.imagem)
}

export function categoriaPorSlug(slug: string) {
  return CATEGORIAS.find((c) => c.slug === slug)
}

export function produtoPorSlug(slug: string) {
  return PRODUTOS.find((p) => p.slug === slug)
}

export function produtosDaCategoria(slug: string) {
  return PRODUTOS.filter((p) => p.categoria === slug)
}
