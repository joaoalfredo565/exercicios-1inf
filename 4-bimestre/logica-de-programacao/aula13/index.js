const prompt = require("prompt-sync")()

function calcularFrete(subtotal) {
    if (subtotal >= 80 ) {
   return subtotal = 0
} 
    return 10
}

const subtotal = Number(prompt("Subtotal do pedido: "))

const frete = calcularFrete(subtotal)

module.exports = frete
console.log(frete)