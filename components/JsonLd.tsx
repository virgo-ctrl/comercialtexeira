export default function JsonLd({ dados }: { dados: unknown }) {
  if (!dados) return null
  return (
    <script
      type="application/ld+json"
      // Conteúdo gerado por nós a partir de dados estáticos; "<" escapado por segurança.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, '\\u003c') }}
    />
  )
}
