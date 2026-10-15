import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const alt = `${SITE.nome}, máquinas e ferramentas em Caruaru`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Cartão tipográfico provisório (sem logo oficial até o cliente enviar).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#1b1b1a',
          color: '#ffffff',
        }}
      >
        <div style={{ fontSize: 34, color: '#e8a58c', letterSpacing: 4 }}>CARUARU, PERNAMBUCO</div>
        <div style={{ fontSize: 108, fontWeight: 800, marginTop: 16, lineHeight: 1.05 }}>{SITE.nome}</div>
        <div style={{ fontSize: 44, marginTop: 24, color: '#dedcd6' }}>Máquinas e ferramentas</div>
      </div>
    ),
    size,
  )
}
