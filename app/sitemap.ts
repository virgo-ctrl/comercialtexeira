import type { MetadataRoute } from 'next'
import { CATEGORIAS, PRODUTOS, produtoIndexavel } from '@/lib/catalogo'
import { urlAbsoluta } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date()
  return [
    { url: urlAbsoluta('/'), lastModified: agora, changeFrequency: 'weekly', priority: 1 },
    { url: urlAbsoluta('/produtos'), lastModified: agora, changeFrequency: 'weekly', priority: 0.9 },
    ...CATEGORIAS.map((c) => ({
      url: urlAbsoluta(`/categoria/${c.slug}`),
      lastModified: agora,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Produtos com foto e nome reais da loja entram; sem foto nem dados confirmados ficam noindex.
    ...PRODUTOS.filter(produtoIndexavel).map((p) => ({
      url: urlAbsoluta(`/produto/${p.slug}`),
      lastModified: agora,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    { url: urlAbsoluta('/vendedores'), lastModified: agora, changeFrequency: 'yearly', priority: 0.6 },
    { url: urlAbsoluta('/contato'), lastModified: agora, changeFrequency: 'yearly', priority: 0.6 },
    { url: urlAbsoluta('/politica-de-privacidade'), lastModified: agora, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
