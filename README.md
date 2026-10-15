# Comercial Teixeira (site)

Site da Comercial Teixeira, loja de máquinas e ferramentas em Caruaru-PE. Next.js 16 (App Router), Tailwind 4, TypeScript. O nome do repositório mantém "texeira"; o nome correto na marca e nas páginas é **Teixeira**.

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Início, categorias, produtos, loja, FAQ |
| `/produtos` | Catálogo com busca e filtro por categoria |
| `/categoria/[slug]` | oficina, agro, piscina, limpeza, construcao |
| `/produto/[slug]` | Página do produto (noindex até o cliente confirmar os dados) |
| `/contato` | WhatsApp, endereço e formulário (evento Lead) |
| `/obrigado`, `/politica-de-privacidade` | Apoio |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | SEO e LLMs |
| `app/not-found.tsx` | 404 com a identidade da Teixeira |

URLs limpas, sem `.html`. JSON-LD: `Store`, `WebSite`, `FAQPage` (home), `BreadcrumbList`, `CollectionPage` (categorias) e `Product` (só quando `dadosConfirmados: true` em `lib/catalogo.ts`).

## Dados e placeholders

Tudo que o cliente ainda não confirmou (horário, formas de pagamento, retirada e entrega, razão social e CNPJ, marca, descrição e foto de cada produto) **não aparece em produção**. As linhas sem dado somem e o produto sem foto mostra um placeholder de marca ("Foto em breve", com o ícone da categoria). Não há preço, depoimento nem marca inventados.

Para a equipe ver o que ainda falta, defina `SHOW_PENDING=1`. Ela é lida no build (as páginas são estáticas), então configure na Vercel só no ambiente **Preview** e rode em dev com `.env.local`. Em Production deixe vazia. Com a flag ligada, o componente `components/Pendente.tsx` volta a mostrar os marcadores **[CONFIRMAR COM O CLIENTE]**.

- Dados fixos da loja: `lib/site.ts`.
- Categorias e produtos: `lib/catalogo.ts`. Para publicar um produto, preencha `marca`, `descricao`, `imagem` e `imagemAlt` e troque `dadosConfirmados` para `true`. A página passa a ser indexada, entra no sitemap e ganha JSON-LD de `Product`.

## Identidade visual (v2)

A paleta vem da logo real da loja: verde `#06A24E` e verde-limão `#A8D23C`, em dois arcos. `#06A24E` sobre branco tem contraste de 3,34:1 e reprova AA, então ele só aparece em gráficos (arcos, faixas). Botões com texto branco usam `#067a3b` (5,45:1) e textos e hover usam `#05683a` (6,89:1).

- Tokens: `app/tokens.css`. Nenhum componente usa cor fixa (exceções: `opengraph-image.tsx`, `icon.tsx` e `themeColor`, que usam `lib/marca.ts` ou hex direto porque o `next/og` não lê variável CSS).
- Marca: `components/Marca.tsx` (logo e arcos) e `lib/marca.ts` (geometria). É um redesenho vetorial provisório a partir do JPG do Instagram. Quando houver o SVG oficial, troque só esses dois arquivos.
- Ícones das categorias: `components/IconeCategoria.tsx`.

## Pixel e API de Conversões

Pixel `1165204005839913`, carregado com o navegador ocioso para não pesar no LCP.

| Evento | Quando | Caminho |
|---|---|---|
| `PageView` | cada rota | Pixel (navegador) |
| `ViewContent` | página de produto e de categoria | Pixel (navegador) |
| `Contact` | clique no WhatsApp (botão fixo, cards, páginas) | Pixel + `/api/evento` |
| `Lead` | formulário enviado com sucesso | Pixel + `/api/lead` |

Cada evento tem um `event_id` gerado no navegador (`lib/tracking.ts`). O mesmo id vai no Pixel e para o servidor, e a Meta deduplica o que chegar pelos dois lados.

O servidor (`lib/capi.ts`) monta o evento com `fbp`, `fbc`, IP, user agent, e telefone e nome com hash SHA-256, e faz duas coisas em paralelo:

1. Envia para o webhook do n8n da Virgo (`N8N_WEBHOOK_URL`), que grava uma linha na planilha **Comercial Teixeira - Leads do site**.
2. Envia à API de Conversões da Meta com o token de `META_CAPI_TOKEN`. Sem a variável, esse passo é ignorado e o Pixel segue funcionando.

### Variáveis de ambiente (Vercel)

Veja `.env.example`.

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical, sitemap, JSON-LD (padrão `https://comercialteixeira.com.br`) |
| `N8N_WEBHOOK_URL` | webhook do n8n da Virgo |
| `META_CAPI_TOKEN` | token da API de Conversões. **Nunca commitar.** Precisa de permissão de gerenciamento sobre o pixel |
| `META_TEST_EVENT_CODE` | opcional, para validar na aba "Testar eventos" |
| `SHOW_PENDING` | `1` mostra os marcadores de pendência (só Preview e dev). Vazia em Production |

### n8n

Workflow `[COMERCIAL TEIXEIRA] Site: leads e cliques no WhatsApp (planilha)` na instância da Virgo (`Webhook` → `Preparar` → `Gravar na planilha`). O n8n da Virgo bloqueia `$env` nos nós, por isso o token da Meta fica no servidor do site e não no n8n.

## Pendências conhecidas

- Token da Meta com permissão sobre o pixel (o recebido em 15/10 só tem `read_ads_dataset_quality`).
- Pixel `1165204005839913` (trocado em 15/10, o anterior era `1132095836241889`): **não foi possível verificar pela API da Meta por falta de permissão**. Conferir no Gerenciador de Eventos se ele recebe `PageView`, `Contact` e `Lead` e se o domínio está associado.
- Logo vetorial oficial, fotos dos produtos e o design system v2 do Antigravity (o arquivo atual da pasta ainda descreve a paleta terracota antiga).
- Texto jurídico final da política de privacidade.
- Domínio `comercialteixeira.com.br` apontado para a Vercel.
