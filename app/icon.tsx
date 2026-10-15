import { ImageResponse } from 'next/og'
import { ARCO_EXTERNO, ARCO_INTERNO, COR_ARCO_EXTERNO, COR_ARCO_INTERNO } from '@/lib/marca'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

// Favicon: os dois arcos da logo sobre fundo branco.
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#ffffff', borderRadius: 14 }}>
        <svg width="64" height="64" viewBox="-2 -2 104 104" xmlns="http://www.w3.org/2000/svg">
          <path d={ARCO_EXTERNO} fill={COR_ARCO_EXTERNO} />
          <path d={ARCO_INTERNO} fill={COR_ARCO_INTERNO} />
        </svg>
      </div>
    ),
    size,
  )
}
