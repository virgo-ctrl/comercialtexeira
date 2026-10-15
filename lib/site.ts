// Dados confirmados do cliente (briefing de 15/10/2026). O que não está aqui não foi confirmado.

export const PENDENTE = '[CONFIRMAR COM O CLIENTE]'

export const SITE = {
  nome: 'Comercial Teixeira',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://comercialteixeira.com.br').replace(/\/$/, ''),
  descricao:
    'Loja de máquinas e ferramentas em Caruaru, Pernambuco. Atendimento pelo WhatsApp para oficina, agro, piscina, limpeza e construção.',
  pixelId: '1132095836241889',
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
  // Horário, CEP, CNPJ e razão social não foram informados.
  horario: PENDENTE,
  cnpj: PENDENTE,
  razaoSocial: PENDENTE,
} as const

export const ENDERECO_TEXTO = `${SITE.endereco.rua}, ${SITE.endereco.cidade}-${SITE.endereco.uf}`

export function urlAbsoluta(caminho: string) {
  return `${SITE.url}${caminho.startsWith('/') ? caminho : `/${caminho}`}`
}
