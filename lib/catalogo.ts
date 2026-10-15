import { PENDENTE } from './site'

export type CategoriaSlug =
  | 'pecas-motores-maquinas'
  | 'bombas-hidraulica'
  | 'compressores-pneumatica'
  | 'ferramentas-eletricas'
  | 'ferramentas-manuais'
  | 'discos-brocas-acessorios'
  | 'motores-jardinagem'
  | 'solda'
  | 'epi'
  | 'fixacao-cabos-correntes'
  | 'lubrificantes-quimicos'
  | 'limpeza'
  | 'piscina'
  | 'obra-e-carga'

export interface Categoria {
  slug: CategoriaSlug
  nome: string
  /** Frase curta para cartões e meta description. */
  resumo: string
  /** Parágrafo próprio da categoria (topo da página). */
  texto: string
  /** Itens e termos de busca reais (exemplos da lista de estoque da loja, 15/10/2026). */
  buscas: string[]
  /** Categoria em destaque na home. */
  destaque?: boolean
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

// Famílias baseadas na lista de estoque da loja (exportação de 15/10/2026), mais Piscina porque a loja posta esses
// produtos. "Obra e carga" abriga betoneira, placa vibratória, talha e paleteira, que não estão nas famílias do
// estoque. Só nomes de itens: nenhum preço, saldo ou fornecedor do sistema da loja entra aqui.
export const CATEGORIAS: Categoria[] = [
  {
    slug: 'pecas-motores-maquinas',
    nome: 'Peças para motores e máquinas',
    resumo: 'Carburador, filtro de ar, anel de pistão, bobina, correia, rolamento e kit de reparo.',
    texto:
      'Roçadeira, motosserra, motor estacionário ou compressor parou? Diga o modelo da máquina e a peça que você procura. A loja confere se tem em estoque e responde pelo WhatsApp.',
    buscas: ['peças para motor', 'carburador', 'filtro de ar', 'anel de pistão', 'agulha de carburador', 'bobina', 'correia', 'rolamento', 'kit de reparo'],
    destaque: true,
  },
  {
    slug: 'bombas-hidraulica',
    nome: 'Bombas, mangueiras e hidráulica',
    resumo: "Bomba d'água, peças de bomba, anéis de vedação, adaptadores e abraçadeiras.",
    texto:
      "Bomba d'água, anel de vedação, adaptador ou abraçadeira. Para repor uma peça ou trocar a bomba, diga o modelo e a loja responde pelo WhatsApp.",
    buscas: ["bomba d'água", 'peças de bomba', 'anel de vedação', 'adaptador', 'abraçadeira'],
  },
  {
    slug: 'compressores-pneumatica',
    nome: 'Compressores e pneumática',
    resumo: 'Compressores, aerógrafos, peças de compressor e ferramentas pneumáticas.',
    texto:
      'Compressor de ar, aerógrafo e peças de compressor, além de ferramentas que funcionam com ar comprimido. Compressor sem anel? Mande o modelo e pergunte pela peça.',
    buscas: ['compressor', 'aerógrafo', 'peças de compressor', 'anel de compressor'],
  },
  {
    slug: 'ferramentas-eletricas',
    nome: 'Ferramentas elétricas e a bateria',
    resumo: 'Furadeira, esmerilhadeira, martelete, politriz e peças para essas máquinas.',
    texto:
      'Furadeira, esmerilhadeira, martelete e politriz, com fio ou a bateria, e peças para essas máquinas. Pergunte pelo modelo que você usa.',
    buscas: ['furadeira', 'esmerilhadeira', 'martelete', 'politriz', 'ferramenta a bateria'],
  },
  {
    slug: 'ferramentas-manuais',
    nome: 'Ferramentas manuais',
    resumo: 'Alicates de bico, de corte e de crimpar, chaves, martelos e trenas.',
    texto: 'Alicate de bico, de corte ou de crimpar, chave, martelo e trena para oficina e obra.',
    buscas: ['alicate de bico', 'alicate de corte', 'alicate de crimpar', 'chave', 'martelo', 'trena'],
  },
  {
    slug: 'discos-brocas-acessorios',
    nome: 'Discos, brocas e acessórios',
    resumo: 'Adaptadores, bits, alicates rebitadores e pontas.',
    texto: 'Brocas, bits, pontas e adaptadores, além de alicates rebitadores. Diga a máquina e o material e a loja confere o que tem.',
    buscas: ['broca', 'bits', 'adaptador', 'alicate rebitador', 'pontas'],
  },
  {
    slug: 'motores-jardinagem',
    nome: 'Motores, roçadeiras e jardinagem',
    resumo: 'Roçadeira, motosserra, fio de nylon e gerador.',
    texto: 'Roçadeira, motosserra, fio de nylon e gerador, além de aparador, cortador de grama e pulverizador para sítio, chácara e jardim.',
    buscas: ['roçadeira', 'motosserra', 'fio de nylon', 'gerador', 'aparador de grama'],
  },
  {
    slug: 'solda',
    nome: 'Solda',
    resumo: 'Inversores, eletrodos e máscaras de solda.',
    texto: 'Inversor de solda, eletrodos e máscara de solda. Para soldar, veja também luvas e botas em Segurança e EPI.',
    buscas: ['inversor de solda', 'eletrodo', 'máscara de solda'],
  },
  {
    slug: 'epi',
    nome: 'Segurança e EPI',
    resumo: 'Luvas, botas, óculos de proteção e abafador de ruído.',
    texto: 'Luvas, botas, óculos de proteção e abafador de ruído para trabalhar com segurança.',
    buscas: ['luvas', 'botas', 'óculos de proteção', 'abafador de ruído'],
  },
  {
    slug: 'fixacao-cabos-correntes',
    nome: 'Fixação, cabos e correntes',
    resumo: 'Abraçadeiras, cabo de aço e correntes.',
    texto: 'Abraçadeiras, cabo de aço e correntes. Diga a medida e o uso e a loja confere o que tem em estoque.',
    buscas: ['abraçadeira', 'cabo de aço', 'corrente'],
  },
  {
    slug: 'lubrificantes-quimicos',
    nome: 'Lubrificantes e químicos',
    resumo: 'Óleo, graxa e adesivos.',
    texto: 'Óleo, graxa e adesivos para a oficina e a manutenção de máquinas.',
    buscas: ['óleo', 'graxa', 'adesivo'],
  },
  {
    slug: 'limpeza',
    nome: 'Limpeza e lavadoras',
    resumo: 'Lavadoras de alta pressão e aspiradores.',
    texto: 'Lavadoras de alta pressão e aspiradores. Para lavar o carro, use também detergente automotivo.',
    buscas: ['lavadora de alta pressão', 'aspirador', 'detergente automotivo'],
  },
  {
    slug: 'piscina',
    nome: 'Piscina',
    resumo: 'Filtro e bomba para piscina.',
    texto: 'Filtro e bomba para piscina. Pergunte pelo modelo e pela disponibilidade no WhatsApp.',
    buscas: ['filtro de piscina', 'bomba para piscina'],
  },
  {
    slug: 'obra-e-carga',
    nome: 'Obra e carga',
    resumo: 'Betoneira, placa vibratória, talha manual, paleteira e empilhadeira manual.',
    texto: 'Betoneira, placa vibratória, talha manual, paleteira hidráulica e empilhadeira manual para obra e movimentação de carga.',
    buscas: ['betoneira', 'placa vibratória', 'talha manual', 'paleteira', 'empilhadeira manual'],
  },
]

// Produtos que aparecem no Instagram da loja (@comercialteixeiracaruaru). As fotos vêm das publicações da própria
// loja, recortadas sem o rodapé de telefones. Sem marca, preço ou ficha: entram quando o cliente confirmar.
export const PRODUTOS: Produto[] = [
  { slug: "moenda-de-cana-a-gasolina", nome: "Moenda de cana a gasolina", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/moenda-de-cana-a-gasolina.jpg", imagemAlt: "Moenda de cana a gasolina" },
  { slug: "filtro-de-piscina", nome: "Filtro de piscina", categoria: "piscina", dadosConfirmados: false, imagem: "/produtos/filtro-de-piscina.jpg", imagemAlt: "Filtro de piscina" },
  { slug: "compressor-de-ar-50-litros", nome: "Compressor de ar 50 L", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/compressor-de-ar-50-litros.jpg", imagemAlt: "Compressor de ar 50 L" },
  { slug: "tesoura-de-chapa", nome: "Tesoura de chapa", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/tesoura-de-chapa.jpg", imagemAlt: "Tesoura de chapa" },
  { slug: "furadeiras-e-parafusadeiras", nome: "Furadeiras e parafusadeiras", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/furadeiras-e-parafusadeiras.jpg", imagemAlt: "Furadeiras e parafusadeiras" },
  { slug: "motosserra-eletrica", nome: "Motosserra elétrica", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/motosserra-eletrica.jpg", imagemAlt: "Motosserra elétrica" },
  { slug: "snow-foam-para-lavadora", nome: "Snow foam para lavadora", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/snow-foam-para-lavadora.jpg", imagemAlt: "Snow foam para lavadora" },
  { slug: "bomba-dagua", nome: "Bomba d'água", categoria: "bombas-hidraulica", dadosConfirmados: false, imagem: "/produtos/bomba-dagua.jpg", imagemAlt: "Bomba d'água" },
  { slug: "compressor-para-poco-artesiano", nome: "Compressor para poço artesiano", categoria: "bombas-hidraulica", dadosConfirmados: false, imagem: "/produtos/compressor-para-poco-artesiano.jpg", imagemAlt: "Compressor para poço artesiano" },
  { slug: "controlador-de-pressao", nome: "Controlador de pressão para bomba d'água", categoria: "bombas-hidraulica", dadosConfirmados: false, imagem: "/produtos/controlador-de-pressao.jpg", imagemAlt: "Controlador de pressão para bomba d'água" },
  { slug: "podador-de-galhos", nome: "Podador de galhos elétrico", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/podador-de-galhos.jpg", imagemAlt: "Podador de galhos elétrico" },
  { slug: "aparador-de-grama", nome: "Aparador de grama", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/aparador-de-grama.jpg", imagemAlt: "Aparador de grama" },
  { slug: "inversor-de-solda", nome: "Inversor de solda", categoria: "solda", dadosConfirmados: false, imagem: "/produtos/inversor-de-solda.jpg", imagemAlt: "Inversor de solda" },
  { slug: "extratora-de-limpeza", nome: "Extratora de limpeza", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/extratora-de-limpeza.jpg", imagemAlt: "Extratora de limpeza" },
  { slug: "desempenadeira-eletrica", nome: "Desempenadeira elétrica", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/desempenadeira-eletrica.jpg", imagemAlt: "Desempenadeira elétrica" },
  { slug: "lixadeira-de-parede", nome: "Lixadeira de parede", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/lixadeira-de-parede.jpg", imagemAlt: "Lixadeira de parede" },
  { slug: "maquina-de-pintura-airless", nome: "Máquina de pintura airless", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/maquina-de-pintura-airless.jpg", imagemAlt: "Máquina de pintura airless" },
  { slug: "talha-manual", nome: "Talha manual", categoria: "obra-e-carga", dadosConfirmados: false, imagem: "/produtos/talha-manual.jpg", imagemAlt: "Talha manual" },
  { slug: "politriz-angular-750-w", nome: "Politriz angular 750 W", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/politriz-angular-750-w.jpg", imagemAlt: "Politriz angular 750 W" },
  { slug: "botas-de-seguranca", nome: "Botas de segurança", categoria: "epi", dadosConfirmados: false, imagem: "/produtos/botas-de-seguranca.jpg", imagemAlt: "Botas de segurança" },
  { slug: "mini-serra-eletrica-24-v", nome: "Mini serra elétrica 24 V", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/mini-serra-eletrica-24-v.jpg", imagemAlt: "Mini serra elétrica 24 V" },
  { slug: "faca-para-triturador-e-forrageira", nome: "Faca para triturador e forrageira", categoria: "pecas-motores-maquinas", dadosConfirmados: false, imagem: "/produtos/faca-para-triturador-e-forrageira.jpg", imagemAlt: "Faca para triturador e forrageira" },
  { slug: "tela-metalica-hexagonal", nome: "Tela metálica hexagonal", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/tela-metalica-hexagonal.jpg", imagemAlt: "Tela metálica hexagonal" },
  { slug: "maquina-para-assentar-piso-a-bateria", nome: "Máquina para assentar piso a bateria", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/maquina-para-assentar-piso-a-bateria.jpg", imagemAlt: "Máquina para assentar piso a bateria" },
  { slug: "roda-de-medicao", nome: "Roda de medição", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/roda-de-medicao.jpg", imagemAlt: "Roda de medição" },
  { slug: "alicate-desencapador-de-fios", nome: "Alicate desencapador de fios", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/alicate-desencapador-de-fios.jpg", imagemAlt: "Alicate desencapador de fios" },
  { slug: "motosserra-a-gasolina", nome: "Motosserra a gasolina", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/motosserra-a-gasolina.jpg", imagemAlt: "Motosserra a gasolina" },
  { slug: "placa-solar-340-w", nome: "Placa solar 340 W", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/placa-solar-340-w.jpg", imagemAlt: "Placa solar 340 W" },
  { slug: "empilhadeira-manual", nome: "Empilhadeira manual", categoria: "obra-e-carga", dadosConfirmados: false, imagem: "/produtos/empilhadeira-manual.jpg", imagemAlt: "Empilhadeira manual" },
  { slug: "esquadro-articulado", nome: "Esquadro articulado", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/esquadro-articulado.jpg", imagemAlt: "Esquadro articulado" },
  { slug: "serra-circular-a-bateria", nome: "Serra circular a bateria", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/serra-circular-a-bateria.jpg", imagemAlt: "Serra circular a bateria" },
  { slug: "carregadores-inteligentes-de-bateria", nome: "Carregadores inteligentes de bateria", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/carregadores-inteligentes-de-bateria.jpg", imagemAlt: "Carregadores inteligentes de bateria" },
  { slug: "aerografo-e-compressor-para-aerografia", nome: "Aerógrafo e compressor para aerografia", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/aerografo-e-compressor-para-aerografia.jpg", imagemAlt: "Aerógrafo e compressor para aerografia" },
  { slug: "removedor-de-ferrugem", nome: "Removedor de ferrugem", categoria: "lubrificantes-quimicos", dadosConfirmados: false, imagem: "/produtos/removedor-de-ferrugem.jpg", imagemAlt: "Removedor de ferrugem" },
  { slug: "compressor-odontologico", nome: "Compressor odontológico", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/compressor-odontologico.jpg", imagemAlt: "Compressor odontológico" },
  { slug: "maquina-de-solda-tig-ac-dc", nome: "Máquina de solda TIG AC/DC", categoria: "solda", dadosConfirmados: false, imagem: "/produtos/maquina-de-solda-tig-ac-dc.jpg", imagemAlt: "Máquina de solda TIG AC/DC" },
  { slug: "bomba-para-poco-artesiano-solar", nome: "Bomba para poço artesiano solar", categoria: "bombas-hidraulica", dadosConfirmados: false, imagem: "/produtos/bomba-para-poco-artesiano-solar.jpg", imagemAlt: "Bomba para poço artesiano solar" },
  { slug: "motosserra-a-bateria", nome: "Motosserra a bateria", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/motosserra-a-bateria.jpg", imagemAlt: "Motosserra a bateria" },
  { slug: "pistola-de-pintura-eletrica", nome: "Pistola de pintura elétrica", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/pistola-de-pintura-eletrica.jpg", imagemAlt: "Pistola de pintura elétrica" },
  { slug: "soprador-termico", nome: "Soprador térmico", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/soprador-termico.jpg", imagemAlt: "Soprador térmico" },
  { slug: "furadeira-de-impacto", nome: "Furadeira de impacto", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/furadeira-de-impacto.jpg", imagemAlt: "Furadeira de impacto" },
  { slug: "pinador-pneumatico", nome: "Pinador pneumático", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/pinador-pneumatico.jpg", imagemAlt: "Pinador pneumático" },
  { slug: "vulcanizadora-de-camaras-de-ar", nome: "Vulcanizadora de câmaras de ar", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/vulcanizadora-de-camaras-de-ar.jpg", imagemAlt: "Vulcanizadora de câmaras de ar" },
  { slug: "furadeira-e-parafusadeira-a-bateria-12-v", nome: "Furadeira e parafusadeira a bateria 12 V", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/furadeira-e-parafusadeira-a-bateria-12-v.jpg", imagemAlt: "Furadeira e parafusadeira a bateria 12 V" },
  { slug: "martelete-rebarbador-pneumatico", nome: "Martelete rebarbador pneumático", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/martelete-rebarbador-pneumatico.jpg", imagemAlt: "Martelete rebarbador pneumático" },
  { slug: "bomba-d-agua-periferica", nome: "Bomba d'água periférica", categoria: "bombas-hidraulica", dadosConfirmados: false, imagem: "/produtos/bomba-d-agua-periferica.jpg", imagemAlt: "Bomba d'água periférica" },
  { slug: "retifica-pneumatica", nome: "Retífica pneumática", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/retifica-pneumatica.jpg", imagemAlt: "Retífica pneumática" },
  { slug: "plaina-base-lisa", nome: "Plaina base lisa", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/plaina-base-lisa.jpg", imagemAlt: "Plaina base lisa" },
  { slug: "furadeira-pneumatica-reversivel", nome: "Furadeira pneumática reversível", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/furadeira-pneumatica-reversivel.jpg", imagemAlt: "Furadeira pneumática reversível" },
  { slug: "esquadro-magnetico", nome: "Esquadro magnético", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/esquadro-magnetico.jpg", imagemAlt: "Esquadro magnético" },
  { slug: "placa-vibratoria", nome: "Placa vibratória", categoria: "obra-e-carga", dadosConfirmados: false, imagem: "/produtos/placa-vibratoria.jpg", imagemAlt: "Placa vibratória" },
  { slug: "parafusadeira-a-bateria-3-6-v", nome: "Parafusadeira a bateria 3,6 V", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/parafusadeira-a-bateria-3-6-v.jpg", imagemAlt: "Parafusadeira a bateria 3,6 V" },
  { slug: "aspirador-de-po-e-agua", nome: "Aspirador de pó e água", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/aspirador-de-po-e-agua.jpg", imagemAlt: "Aspirador de pó e água" },
  { slug: "tesoura-para-grama", nome: "Tesoura para grama", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/tesoura-para-grama.jpg", imagemAlt: "Tesoura para grama" },
  { slug: "motor-de-popa", nome: "Motor de popa", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/motor-de-popa.jpg", imagemAlt: "Motor de popa" },
  { slug: "mascara-de-protecao", nome: "Máscara de proteção", categoria: "epi", dadosConfirmados: false, imagem: "/produtos/mascara-de-protecao.jpg", imagemAlt: "Máscara de proteção" },
  { slug: "oculos-de-protecao", nome: "Óculos de proteção", categoria: "epi", dadosConfirmados: false, imagem: "/produtos/oculos-de-protecao.jpg", imagemAlt: "Óculos de proteção" },
  { slug: "pulverizador-20-litros", nome: "Pulverizador 20 litros", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/pulverizador-20-litros.jpg", imagemAlt: "Pulverizador 20 litros" },
  { slug: "atomizador-pulverizador-costal", nome: "Atomizador pulverizador costal", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/atomizador-pulverizador-costal.jpg", imagemAlt: "Atomizador pulverizador costal" },
  { slug: "jogo-de-brocas", nome: "Jogo de brocas", categoria: "discos-brocas-acessorios", dadosConfirmados: false, imagem: "/produtos/jogo-de-brocas.jpg", imagemAlt: "Jogo de brocas" },
  { slug: "bomba-para-piscina", nome: "Bomba para piscina", categoria: "piscina", dadosConfirmados: false, imagem: "/produtos/bomba-para-piscina.jpg", imagemAlt: "Bomba para piscina" },
  { slug: "furadeira-profissional-850-w", nome: "Furadeira profissional 850 W", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/furadeira-profissional-850-w.jpg", imagemAlt: "Furadeira profissional 850 W" },
  { slug: "serra-circular", nome: "Serra circular", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/serra-circular.jpg", imagemAlt: "Serra circular" },
  { slug: "lixadeira-orbital", nome: "Lixadeira orbital", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/lixadeira-orbital.jpg", imagemAlt: "Lixadeira orbital" },
  { slug: "soprador-de-folhas-eletrico", nome: "Soprador de folhas elétrico", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/soprador-de-folhas-eletrico.jpg", imagemAlt: "Soprador de folhas elétrico" },
  { slug: "cortador-de-grama", nome: "Cortador de grama", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/cortador-de-grama.jpg", imagemAlt: "Cortador de grama" },
  { slug: "moto-esmeril", nome: "Moto esmeril", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/moto-esmeril.jpg", imagemAlt: "Moto esmeril" },
  { slug: "gerador", nome: "Gerador", categoria: "motores-jardinagem", dadosConfirmados: false, imagem: "/produtos/gerador.jpg", imagemAlt: "Gerador" },
  { slug: "compressor-de-ar-direto", nome: "Compressor de ar direto", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/compressor-de-ar-direto.jpg", imagemAlt: "Compressor de ar direto" },
  { slug: "trenas", nome: "Trenas", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/trenas.jpg", imagemAlt: "Trenas" },
  { slug: "paleteira-hidraulica", nome: "Paleteira hidráulica", categoria: "obra-e-carga", dadosConfirmados: false, imagem: "/produtos/paleteira-hidraulica.jpg", imagemAlt: "Paleteira hidráulica" },
  { slug: "cola-rapida", nome: "Cola rápida", categoria: "lubrificantes-quimicos", dadosConfirmados: false, imagem: "/produtos/cola-rapida.jpg", imagemAlt: "Cola rápida" },
  { slug: "serra-esquadria-12-polegadas", nome: "Serra esquadria 12 polegadas", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/serra-esquadria-12-polegadas.jpg", imagemAlt: "Serra esquadria 12 polegadas" },
  { slug: "maletas-de-ferramentas", nome: "Maletas de ferramentas", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/maletas-de-ferramentas.jpg", imagemAlt: "Maletas de ferramentas" },
  { slug: "medidor-laser-de-distancia", nome: "Medidor laser de distância", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/medidor-laser-de-distancia.jpg", imagemAlt: "Medidor laser de distância" },
  { slug: "alicate-amperimetro", nome: "Alicate amperímetro", categoria: "ferramentas-manuais", dadosConfirmados: false, imagem: "/produtos/alicate-amperimetro.jpg", imagemAlt: "Alicate amperímetro" },
  { slug: "lavadoras-de-alta-pressao", nome: "Lavadoras de alta pressão", categoria: "limpeza", dadosConfirmados: false, imagem: "/produtos/lavadoras-de-alta-pressao.jpg", imagemAlt: "Lavadoras de alta pressão" },
  { slug: "betoneira", nome: "Betoneira", categoria: "obra-e-carga", dadosConfirmados: false, imagem: "/produtos/betoneira.jpg", imagemAlt: "Betoneira" },
  { slug: "compressor-de-ar-profissional", nome: "Compressor de ar profissional", categoria: "compressores-pneumatica", dadosConfirmados: false, imagem: "/produtos/compressor-de-ar-profissional.jpg", imagemAlt: "Compressor de ar profissional" },
  { slug: "politriz-orbital", nome: "Politriz orbital", categoria: "ferramentas-eletricas", dadosConfirmados: false, imagem: "/produtos/politriz-orbital.jpg", imagemAlt: "Politriz orbital" },
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
