// Geometria dos dois arcos da logo (verde #06A24E por fora, verde-limão #A8D23C por dentro).
// Redesenho vetorial provisório a partir do JPG do Instagram. Quando o cliente ou o Codex enviarem
// o SVG oficial, troque só components/Marca.tsx.

export const COR_ARCO_EXTERNO = '#06a24e'
export const COR_ARCO_INTERNO = '#a8d23c'

/** Meia-lua: arco externo de raio R e arco de volta de raio rIn, abertos para a direita. */
function meiaLua(cx: number, cy: number, R: number, rIn: number, grausTopo: number, grausBase: number) {
  const rad = (g: number) => (g * Math.PI) / 180
  const topo = { x: cx + R * Math.cos(rad(-grausTopo)), y: cy + R * Math.sin(rad(-grausTopo)) }
  const base = { x: cx + R * Math.cos(rad(grausBase)), y: cy + R * Math.sin(rad(grausBase)) }
  const f = (n: number) => n.toFixed(2)
  return `M${f(topo.x)} ${f(topo.y)} A${R} ${R} 0 1 0 ${f(base.x)} ${f(base.y)} A${rIn} ${rIn} 0 1 1 ${f(topo.x)} ${f(topo.y)}Z`
}

export const ARCO_EXTERNO = meiaLua(54, 52, 46, 40, 38, 46)
export const ARCO_INTERNO = meiaLua(56, 50, 33, 28.5, 34, 40)
