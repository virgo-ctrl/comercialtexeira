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

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${SITE.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`
}
