import { ImageResponse } from 'next/og'
import {
  ARCO_EXTERNO,
  ARCO_INTERNO,
  COR_ARCO_EXTERNO,
  COR_ARCO_INTERNO,
  HORIZONTAL_SIMBOLO_TRANSFORM,
  HORIZONTAL_TEXTO_TRANSFORM,
  HORIZONTAL_VIEWBOX,
  SIMBOLO_VIEWBOX,
  WORDMARK_COMERCIAL,
  WORDMARK_TEIXEIRA,
} from '@/lib/marca'
import { SITE } from '@/lib/site'

export const alt = `${SITE.nome}, peças, ferramentas e máquinas em Caruaru`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Cartão com a logo oficial (versão para fundo escuro) e os arcos em fundo verde-floresta.
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', background: '#0b2a1a', color: '#ffffff', position: 'relative' }}>
        <svg
          width="640"
          height="640"
          viewBox={SIMBOLO_VIEWBOX}
          style={{ position: 'absolute', right: -60, top: -5, opacity: 0.9 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={ARCO_EXTERNO} fill={COR_ARCO_EXTERNO} fillRule="evenodd" />
          <path d={ARCO_INTERNO} fill={COR_ARCO_INTERNO} fillRule="evenodd" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 80px', maxWidth: 760 }}>
          <svg width="520" height="169" viewBox={HORIZONTAL_VIEWBOX} xmlns="http://www.w3.org/2000/svg">
            <g transform={HORIZONTAL_SIMBOLO_TRANSFORM}>
              <path d={ARCO_EXTERNO} fill={COR_ARCO_EXTERNO} fillRule="evenodd" />
              <path d={ARCO_INTERNO} fill={COR_ARCO_INTERNO} fillRule="evenodd" />
            </g>
            <g transform={HORIZONTAL_TEXTO_TRANSFORM}>
              <path d={WORDMARK_COMERCIAL} fill="#a8d23c" />
              <path d={WORDMARK_TEIXEIRA} fill="#ffffff" />
            </g>
          </svg>
          <div style={{ fontSize: 66, fontWeight: 800, marginTop: 36, lineHeight: 1.05 }}>Peça, ferramenta e máquina no mesmo balcão</div>
          <div style={{ fontSize: 30, marginTop: 20, color: '#cfe0d3' }}>Em Caruaru. Peça valor e disponibilidade pelo WhatsApp</div>
        </div>
      </div>
    ),
    size,
  )
}
