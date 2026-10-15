import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MetaPixel from '@/components/MetaPixel'
import WhatsAppFab from '@/components/WhatsAppFab'
import { SITE } from '@/lib/site'
import './globals.css'

// Fontes do design system (Barlow Condensed nos títulos, Inter no corpo).
const display = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-display-fam', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body-fam', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.nome} | Máquinas e ferramentas em Caruaru-PE`, template: `%s | ${SITE.nome}` },
  description: SITE.descricao,
  applicationName: SITE.nome,
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#0b2a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2">
          Ir para o conteúdo
        </a>
        <MetaPixel />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFab />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${SITE.pixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
