// Contatos dos vendedores, passados pelo Lucas Furtado e confirmados pelo Eduardo em 15/10/2026.
// Só nome, descrição curta e número. Cargo, horário e região de cada um não foram informados e não entram aqui.

export interface Vendedor {
  slug: string
  /** Nome exibido no card. */
  nome: string
  /** Texto curto abaixo do nome, só com o que foi informado. */
  papel: string
  /** Letra do avatar (no lugar de foto). */
  inicial: string
  /** Texto do botão e da mensagem pré-preenchida. */
  chamar: string
  whatsapp: string
  exibicao: string
}

export const VENDEDORES: Vendedor[] = [
  {
    slug: 'setor-de-vendas',
    nome: 'Setor de Vendas',
    papel: 'Atendimento por WhatsApp',
    inicial: 'R',
    chamar: 'o setor de vendas',
    whatsapp: '5581992632885',
    exibicao: '(81) 99263-2885',
  },
  {
    slug: 'vendedores',
    nome: 'Vendedores',
    papel: 'Atendimento no balcão da loja',
    inicial: 'B',
    chamar: 'os vendedores',
    whatsapp: '5581998159589',
    exibicao: '(81) 99815-9589',
  },
]
