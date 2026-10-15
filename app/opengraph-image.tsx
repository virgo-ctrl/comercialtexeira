import { ImageResponse } from 'next/og'
import { ARCO_EXTERNO, ARCO_INTERNO, COR_ARCO_EXTERNO, COR_ARCO_INTERNO } from '@/lib/marca'
import { SITE } from '@/lib/site'

export const alt = `${SITE.nome}, máquinas e ferramentas em Caruaru`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Cartão com os arcos da logo (redesenho vetorial provisório) em fundo verde-floresta.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#0b2a1a',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <svg
          width="620"
          height="620"
          viewBox="0 0 100 100"
          style={{ position: 'absolute', right: -90, top: 5, opacity: 0.95 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={ARCO_EXTERNO} fill={COR_ARCO_EXTERNO} />
          <path d={ARCO_INTERNO} fill={COR_ARCO_INTERNO} />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 80px', maxWidth: 760 }}>
          <div style={{ fontSize: 32, color: '#a8d23c', letterSpacing: 4 }}>CARUARU, PERNAMBUCO</div>
          <div style={{ fontSize: 104, fontWeight: 800, marginTop: 16, lineHeight: 1.02 }}>{SITE.nome}</div>
          <div style={{ fontSize: 44, marginTop: 24, color: '#cfe0d3' }}>Máquinas e ferramentas</div>
        </div>
      </div>
    ),
    size,
  )
}
