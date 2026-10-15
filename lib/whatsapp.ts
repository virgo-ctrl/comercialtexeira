import { SITE } from './site'

export function mensagemGeral() {
  return 'Olá, vim pelo site da Comercial Teixeira e quero falar com a loja.'
}

export function mensagemProduto(nomeProduto: string) {
  return `Olá, vim pelo site e quero saber sobre: ${nomeProduto}. Pode me passar valor e disponibilidade?`
}

export function mensagemCategoria(nomeCategoria: string) {
  return `Olá, vim pelo site e quero ver opções de ${nomeCategoria.toLowerCase()}.`
}

export function mensagemVendedor(chamar: string) {
  return `Olá, vim pelo site da Comercial Teixeira e quero falar com ${chamar}.`
}

/** Link do WhatsApp da loja ou, com `numero`, de um vendedor específico. */
export function linkWhatsApp(mensagem: string, numero: string = SITE.whatsapp.numero) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}
