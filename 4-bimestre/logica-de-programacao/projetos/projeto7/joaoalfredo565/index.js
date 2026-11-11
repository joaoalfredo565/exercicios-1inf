const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Digite o limite para estoque baixo: "))
const quantidade = Number(prompt("Quantos produtos deseja cadastrar? "))

const catalogo = []

for (let i = 0; i < quantidade; i++) {
  console.log("Produto " + (i + 1))

  const nome = prompt("Nome: ")
  const preco = Number(prompt("Preço: "))
  const estoque = Number(prompt("Quantidade em estoque: "))

  catalogo.push({
    nome: nome,
    preco: preco,
    estoque: estoque
  })
}

let maiorPreco = 0
let produtoMaisCaro = 0

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].preco > maiorPreco) {
    maiorPreco = catalogo[i].preco
    produtoMaisCaro = catalogo[i].nome
  }
}

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
  estoqueTotal += catalogo[i].estoque
}

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].estoque <= limiteEstoqueBaixo) {
    produtosComEstoqueBaixo++
  }
}

const nomeReajuste = prompt("Qual produto deseja reajustar? ")
const valorReajuste = Number(prompt("Quanto deseja adicionar ao preço? "))

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].nome === nomeReajuste) {
    catalogo[i].preco = catalogo[i].preco + valorReajuste
  }
}

const resumo = `
Estoque total: ${estoqueTotal}
Produto mais caro: ${produtoMaisCaro}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}
`

console.log(resumo)

module.exports = {
  catalogo,
  limiteEstoqueBaixo,
  produtoMaisCaro,
  estoqueTotal,
  produtosComEstoqueBaixo,
  resumo
}
