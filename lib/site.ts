// Dados confirmados do cliente (briefing de 15/10/2026). O que não está aqui não foi confirmado.

export const PENDENTE = '[CONFIRMAR COM O CLIENTE]'

// Marcadores de pendência só aparecem com SHOW_PENDING=1 ou no Preview da Vercel. Em produção ficam
// desligados e qualquer dado não confirmado simplesmente não é renderizado.
export const MOSTRAR_PENDENTES = process.env.SHOW_PENDING === '1' || process.env.VERCEL_ENV === 'preview'

// Afirmações da estratégia de copy (estrategia-copy-baseada-no-estoque-2026-10-15) que dependem do cliente.
// Uma flag por afirmação: quando o cliente confirmar, troque `MOSTRAR_PENDENTES` por `true` só na flag certa.
// Nenhum texto dessas afirmações pode ficar fixo no JSX sem passar por uma destas flags.
export const CONFIRMADO_ITENS_ESTOQUE = MOSTRAR_PENDENTES // "mais de 7 mil itens em estoque" (7.474 com saldo, alguns negativos)
export const CONFIRMADO_ASSISTENCIA = MOSTRAR_PENDENTES // assistência técnica de máquinas
export const CONFIRMADO_NOTA_GOOGLE = MOSTRAR_PENDENTES // 4,5 com 395 avaliações (visto em 15/10, reconferir)
export const CONFIRMADO_MELHOR_LOJA = MOSTRAR_PENDENTES // "a melhor loja de máquinas e ferramentas do Brasil"
export const CONFIRMADO_ENTREGA = MOSTRAR_PENDENTES // entrega
export const CONFIRMADO_FOTO_PECA = MOSTRAR_PENDENTES // cliente pode mandar foto da peça
export const CONFIRMADO_CNPJ = MOSTRAR_PENDENTES // razão social e CNPJ no rodapé

// Razão social e CNPJ constam no sistema da loja; só são exibidos com CONFIRMADO_CNPJ.
const EMPRESA = {
  razaoSocial: 'Barros e Bezerra Com. e Assist. Téc. de Máq. Ltda',
  cnpj: '59.554.620/0001-15',
}

export const SITE = {
  nome: 'Comercial Teixeira',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://comercialteixeira.com.br').replace(/\/$/, ''),
  descricao:
    'Peças, ferramentas e máquinas em Caruaru, Pernambuco. Atendimento pelo WhatsApp para oficina, obra, campo, piscina e limpeza.',
  pixelId: '1165204005839913',
  whatsapp: {
    numero: '5581998159589',
    exibicao: '(81) 99815-9589',
  },
  telefone: { tel: '+558137210179', exibicao: '(81) 3721-0179' },
  instagram: 'https://www.instagram.com/comercialteixeiracaruaru/',
  endereco: {
    rua: 'Rua General Osório, 29',
    cidade: 'Caruaru',
    uf: 'PE',
    pais: 'BR',
  },
  // Marcas que aparecem nas descrições do estoque (exportação de 15/10/2026), na ordem da estratégia de copy.
  // Só os nomes; preço e saldo do estoque não vão para o repositório.
  marcas: [
    'Vonder', 'Bosch', 'Schulz', 'Tramontina', 'Makita', 'DeWalt', 'Worker', 'Husqvarna',
    'Toyama', 'Branco', 'Kala', 'Black+Decker', 'Gedore', 'Irwin', 'Ebara', 'Wimpel',
  ],
  // Região definida pelo comercial da Virgo em 14/10: raio de 40 km de Caruaru.
  regiao: [
    'Caruaru',
    'Garanhuns',
    'Belo Jardim',
    'Surubim',
    'Taquaritinga do Norte',
    'Palmares',
    'Catende',
  ],
  // Horário e CEP não foram informados.
  horario: PENDENTE,
  cnpj: CONFIRMADO_CNPJ ? EMPRESA.cnpj : PENDENTE,
  razaoSocial: CONFIRMADO_CNPJ ? EMPRESA.razaoSocial : PENDENTE,
} as const

export const ENDERECO_TEXTO = `${SITE.endereco.rua}, ${SITE.endereco.cidade}-${SITE.endereco.uf}`

export function urlAbsoluta(caminho: string) {
  return `${SITE.url}${caminho.startsWith('/') ? caminho : `/${caminho}`}`
}
