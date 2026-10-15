import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

// Ícone provisório: inicial da marca. Troca quando houver logo oficial.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#b4380f',
          color: '#ffffff',
          fontSize: 44,
          fontWeight: 800,
          borderRadius: 12,
        }}
      >
        T
      </div>
    ),
    size,
  )
}
