import { CATEGORIAS } from '@/lib/catalogo'
import { ENDERECO_TEXTO, SITE, urlAbsoluta } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const corpo = `# ${SITE.nome}

> Loja de máquinas e ferramentas em Caruaru, Pernambuco. Atendimento pelo WhatsApp.

Endereço: ${ENDERECO_TEXTO}
WhatsApp: ${SITE.whatsapp.exibicao}
Telefone: ${SITE.telefone.exibicao}
Cidades atendidas: ${SITE.regiao.join(', ')}

## Páginas

- [Início](${urlAbsoluta('/')}): apresentação da loja e categorias
- [Produtos](${urlAbsoluta('/produtos')}): catálogo com busca e filtro por categoria
- [Contato](${urlAbsoluta('/contato')}): WhatsApp, endereço e formulário

## Categorias

${CATEGORIAS.map((c) => `- [${c.nome}](${urlAbsoluta(`/categoria/${c.slug}`)}): ${c.resumo}`).join('\n')}

## Observações

Valores e disponibilidade são informados pelo WhatsApp. O site não publica preços.
`
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
