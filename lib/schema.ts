import { CONFIRMADO_ENTREGA, CONFIRMADO_FOTO_PECA, SITE, urlAbsoluta } from './site'
import type { Categoria, Produto } from './catalogo'

// Só entra no JSON-LD o que foi confirmado. Horário, geo, imagem, preço e marca ficam de fora até virem do cliente.

export function schemaLoja() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': `${SITE.url}/#loja`,
    name: SITE.nome,
    url: SITE.url,
    description: SITE.descricao,
    telephone: SITE.telefone.tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.endereco.rua,
      addressLocality: SITE.endereco.cidade,
      addressRegion: SITE.endereco.uf,
      addressCountry: SITE.endereco.pais,
    },
    areaServed: SITE.regiao.map((nome) => ({ '@type': 'City', name: nome })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: `+${SITE.whatsapp.numero}`,
        availableLanguage: 'pt-BR',
        url: `https://wa.me/${SITE.whatsapp.numero}`,
      },
    ],
    sameAs: [SITE.instagram],
  }
}

export function schemaSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#site`,
    url: SITE.url,
    name: SITE.nome,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE.url}/#loja` },
  }
}

export function schemaMigalhas(itens: { nome: string; caminho: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nome,
      item: urlAbsoluta(it.caminho),
    })),
  }
}

export function schemaFaq(perguntas: { pergunta: string; resposta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: perguntas.map((p) => ({
      '@type': 'Question',
      name: p.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: p.resposta },
    })),
  }
}

/** Retorna null enquanto o produto não tem dados confirmados pelo cliente. */
export function schemaProduto(p: Produto, cat: Categoria) {
  if (!p.dadosConfirmados || !p.descricao) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.nome,
    description: p.descricao,
    category: cat.nome,
    url: urlAbsoluta(`/produto/${p.slug}`),
    ...(p.marca ? { brand: { '@type': 'Brand', name: p.marca } } : {}),
    ...(p.imagem ? { image: urlAbsoluta(p.imagem) } : {}),
    seller: { '@id': `${SITE.url}/#loja` },
  }
}

export function schemaColecao(cat: Categoria, produtos: Produto[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${cat.nome} em Caruaru`,
    description: cat.texto,
    url: urlAbsoluta(`/categoria/${cat.slug}`),
    isPartOf: { '@id': `${SITE.url}/#site` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: produtos.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: urlAbsoluta(`/produto/${p.slug}`),
        name: p.nome,
      })),
    },
  }
}

const lista = (itens: readonly string[]) => `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`

// A mesma lista alimenta a seção de dúvidas da home e o JSON-LD FAQPage, então o que está atrás de uma flag
// CONFIRMADO_* nunca aparece num sem o outro. Em produção só entram as respostas confirmadas.
export const FAQ_CONFIRMADO = [
  {
    pergunta: 'Onde fica a Comercial Teixeira?',
    resposta: `A loja fica na ${SITE.endereco.rua}, ${SITE.endereco.cidade}, ${SITE.endereco.uf}.`,
  },
  {
    pergunta: 'Como peço valor e disponibilidade de um produto?',
    resposta: `Pelo WhatsApp ${SITE.whatsapp.exibicao}. O botão de cada produto abre a conversa com a mensagem já escrita.`,
  },
  {
    pergunta: 'Vocês têm peça para roçadeira, motosserra e compressor?',
    resposta: 'Pergunte pelo modelo da máquina no WhatsApp e a loja confere se a peça está em estoque.',
  },
  ...(CONFIRMADO_FOTO_PECA
    ? [
        {
          pergunta: 'Posso mandar a foto da peça?',
          resposta: 'Pode. Mande a foto e o modelo da máquina pelo WhatsApp que a loja confere.',
        },
      ]
    : []),
  {
    pergunta: 'Quais marcas vocês vendem?',
    resposta: `A loja trabalha com ${lista(SITE.marcas)}. Pergunte pela marca que você procura.`,
  },
  {
    pergunta: 'O site mostra o preço dos produtos?',
    resposta: 'Não. Valor e disponibilidade a loja informa pelo WhatsApp.',
  },
  {
    pergunta: 'Quais cidades a loja atende?',
    resposta: `O atendimento cobre ${lista(SITE.regiao)}.`,
  },
  ...(CONFIRMADO_ENTREGA
    ? [
        {
          pergunta: 'A loja entrega?',
          resposta: 'Pergunte pelo WhatsApp se a entrega chega ao seu endereço.',
        },
      ]
    : []),
]
