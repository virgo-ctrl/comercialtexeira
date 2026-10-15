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

Tudo que o cliente ainda não confirmou aparece como **[CONFIRMAR COM O CLIENTE]** (componente `components/Pendente.tsx`): horário, formas de pagamento, retirada e entrega, razão social e CNPJ, marca, descrição e foto de cada produto. Não há preço, depoimento nem marca inventados.

- Dados fixos da loja: `lib/site.ts`.
- Categorias e produtos: `lib/catalogo.ts`. Para publicar um produto, preencha `marca`, `descricao`, `imagem` e `imagemAlt` e troque `dadosConfirmados` para `true`. A página passa a ser indexada, entra no sitemap e ganha JSON-LD de `Product`.
- Design: tokens temporários em `app/tokens.css`, a trocar pelos tokens do design system (Antigravity). Nenhum componente usa cor fixa.

## Pixel e API de Conversões

Pixel `1132095836241889`, carregado com o navegador ocioso para não pesar no LCP.

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

### n8n

Workflow `[COMERCIAL TEIXEIRA] Site: leads e cliques no WhatsApp (planilha)` na instância da Virgo (`Webhook` → `Preparar` → `Gravar na planilha`). O n8n da Virgo bloqueia `$env` nos nós, por isso o token da Meta fica no servidor do site e não no n8n.

## Pendências conhecidas

- Token da Meta com permissão sobre o pixel (o recebido em 15/10 só tem `read_ads_dataset_quality`).
- Logo, cores e fotos oficiais; design system do Antigravity.
- Texto jurídico final da política de privacidade.
- Domínio `comercialteixeira.com.br` apontado para a Vercel.
