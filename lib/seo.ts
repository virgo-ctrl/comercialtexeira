import type { Metadata } from 'next'
import { SITE, urlAbsoluta } from './site'

interface Opcoes {
  titulo: string
  descricao: string
  caminho: string
  indexar?: boolean
}

export function metaPagina({ titulo, descricao, caminho, indexar = true }: Opcoes): Metadata {
  const url = urlAbsoluta(caminho)
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: url },
    robots: indexar ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: SITE.nome,
      title: titulo,
      description: descricao,
      url,
    },
    twitter: { card: 'summary_large_image', title: titulo, description: descricao },
  }
}
