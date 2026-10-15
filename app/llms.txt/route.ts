import { CATEGORIAS } from '@/lib/catalogo'
import { ENDERECO_TEXTO, SITE, urlAbsoluta } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const corpo = `# ${SITE.nome}

> Peças, ferramentas e máquinas em Caruaru, Pernambuco. Atendimento pelo WhatsApp.

Endereço: ${ENDERECO_TEXTO}
WhatsApp: ${SITE.whatsapp.exibicao}
Telefone: ${SITE.telefone.exibicao}
Cidades atendidas: ${SITE.regiao.join(', ')}
Marcas: ${SITE.marcas.join(', ')}

## Páginas

- [Início](${urlAbsoluta('/')}): apresentação da loja, categorias, marcas e guias de serviço
- [Produtos](${urlAbsoluta('/produtos')}): catálogo com busca e filtro por categoria
- [Fale com um vendedor](${urlAbsoluta('/vendedores')}): WhatsApp de cada vendedor
- [Contato](${urlAbsoluta('/contato')}): WhatsApp, endereço e formulário

## Categorias

${CATEGORIAS.map((c) => `- [${c.nome}](${urlAbsoluta(`/categoria/${c.slug}`)}): ${c.texto}`).join('\n')}

## Observações

Valores e disponibilidade são informados pelo WhatsApp. O site não publica preços.
`
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
