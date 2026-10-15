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

export function mensagemGuia(titulo: string, itens: string[]) {
  return `Olá, vim pelo site e quero os itens do guia "${titulo}": ${itens.join(', ')}. Pode me passar valor e disponibilidade?`
}

export function mensagemPeca() {
  return 'Olá, vim pelo site e preciso de uma peça. Máquina e modelo: '
}

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${SITE.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`
}
