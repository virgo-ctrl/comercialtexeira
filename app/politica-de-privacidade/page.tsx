import Pendente from '@/components/Pendente'
import { metaPagina } from '@/lib/seo'
import { SITE } from '@/lib/site'

export const metadata = metaPagina({
  titulo: 'Política de privacidade',
  descricao: 'Como a Comercial Teixeira trata os dados enviados pelo site.',
  caminho: '/politica-de-privacidade',
})

export default function Politica() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <h1 className="text-5xl font-bold uppercase">Política de privacidade</h1>
      <p className="mt-3 rounded border border-pending-line bg-pending-bg p-3 text-sm text-pending-ink">
        Rascunho técnico. O texto jurídico final precisa ser revisado e confirmado pelo cliente antes de ir a público.
      </p>
      <div className="mt-6 space-y-5 text-ink-soft">
        <p>
          Esta página explica quais dados o site da {SITE.nome} coleta, para que servem e como pedir a exclusão deles.
          Responsável: <Pendente>razão social e CNPJ: CONFIRMAR COM O CLIENTE</Pendente>.
        </p>
        <h2 className="text-3xl font-bold uppercase text-ink">Dados que coletamos</h2>
        <p>
          No formulário de contato: nome, WhatsApp, categoria de interesse e a mensagem que você escrever. Ao clicar no
          botão de WhatsApp, registramos o clique, a página em que você estava e o produto de interesse.
        </p>
        <h2 className="text-3xl font-bold uppercase text-ink">Para que usamos</h2>
        <p>
          Responder ao seu contato e entender quais produtos despertam interesse. Também usamos o Pixel da Meta e a API
          de Conversões para medir os anúncios da loja. Para isso, nome e telefone são enviados à Meta em formato
          criptografado (hash).
        </p>
        <h2 className="text-3xl font-bold uppercase text-ink">Seus direitos</h2>
        <p>
          Você pode pedir acesso, correção ou exclusão dos seus dados pelo WhatsApp {SITE.whatsapp.exibicao}.
        </p>
      </div>
    </div>
  )
}
