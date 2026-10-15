import JsonLd from '@/components/JsonLd'
import LeadForm from '@/components/LeadForm'
import Pendente from '@/components/Pendente'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import WhatsAppLink from '@/components/WhatsAppLink'
import { schemaMigalhas } from '@/lib/schema'
import { metaPagina } from '@/lib/seo'
import { ENDERECO_TEXTO, SITE } from '@/lib/site'
import { mensagemGeral } from '@/lib/whatsapp'

export const metadata = metaPagina({
  titulo: 'Contato e endereço em Caruaru',
  descricao: `Fale com a Comercial Teixeira pelo WhatsApp ${SITE.whatsapp.exibicao} ou visite a loja na ${ENDERECO_TEXTO}.`,
  caminho: '/contato',
})

export default function Contato() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <JsonLd
        dados={schemaMigalhas([
          { nome: 'Início', caminho: '/' },
          { nome: 'Contato', caminho: '/contato' },
        ])}
      />
      <h1 className="text-5xl font-bold uppercase">Contato</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-ink-soft">O caminho mais rápido é o WhatsApp. Se preferir, deixe seus dados no formulário e a loja responde.</p>
          <WhatsAppLink
            mensagem={mensagemGeral()}
            className="mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3 text-lg font-bold text-white hover:bg-whatsapp-strong"
          >
            <WhatsAppIcon tamanho={22} />
            Chamar no WhatsApp
          </WhatsAppLink>
          <address className="mt-8 space-y-1 not-italic">
            <p className="font-semibold">{ENDERECO_TEXTO}</p>
            <p>WhatsApp: {SITE.whatsapp.exibicao}</p>
            <p>Telefone: <a className="underline" href={`tel:${SITE.telefone.tel}`}>{SITE.telefone.exibicao}</a></p>
            <p>Horário de atendimento: <Pendente /></p>
          </address>
        </div>
        <LeadForm />
      </div>
    </div>
  )
}
