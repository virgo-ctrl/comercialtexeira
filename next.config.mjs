/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  // Categorias antigas (v1) que já estavam indexadas: mantêm o link e a autoridade apontando para a família nova.
  async redirects() {
    return [
      { source: '/categoria/oficina', destination: '/categoria/ferramentas-eletricas', permanent: true },
      { source: '/categoria/agro', destination: '/categoria/motores-jardinagem', permanent: true },
      { source: '/categoria/construcao', destination: '/categoria/obra-e-carga', permanent: true },
    ]
  },
}

export default nextConfig
