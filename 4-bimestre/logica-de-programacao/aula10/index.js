const prompt = require("prompt-sync")()

const produto = {
  nome: prompt("Nome do produto: "),
  preco: Number(prompt("Preço: ")),
  estoque: Number(prompt("Estoque: "))
}

console.log(produto)


const aumento = Number(prompt("Quanto aumentar o preço? "))

produto.preco = produto.preco + aumento
console.log(produto.preco)
module.exports = produto
