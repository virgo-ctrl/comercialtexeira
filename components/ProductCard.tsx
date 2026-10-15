import Image from 'next/image'
import Link from 'next/link'
import { categoriaPorSlug, type Produto } from '@/lib/catalogo'
import { mensagemProduto } from '@/lib/whatsapp'
import { FotoEmBreve } from './Pendente'
import WhatsAppLink from './WhatsAppLink'
import WhatsAppIcon from './WhatsAppIcon'

export default function ProductCard({ produto }: { produto: Produto }) {
  const cat = categoriaPorSlug(produto.categoria)
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)]">
      {produto.imagem ? (
        <Image
          src={produto.imagem}
          alt={produto.imagemAlt || produto.nome}
          width={640}
          height={480}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <FotoEmBreve categoria={produto.categoria} />
      )}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 font-display text-sm font-bold uppercase tracking-wider text-brand-strong">
          {cat?.nome}
        </p>
        <h3 className="text-2xl font-bold uppercase">
          <Link href={`/produto/${produto.slug}`} className="hover:text-brand-strong">
            {produto.nome}
          </Link>
        </h3>
        <p className="text-sm text-ink-soft">Valor e disponibilidade: consulte pelo WhatsApp.</p>
        <WhatsAppLink
          mensagem={mensagemProduto(produto.nome)}
          produto={produto.nome}
          interesse={cat?.nome}
          className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-white hover:bg-whatsapp-strong"
        >
          <WhatsAppIcon tamanho={20} />
          Pedir no WhatsApp
        </WhatsAppLink>
      </div>
    </article>
  )
}
