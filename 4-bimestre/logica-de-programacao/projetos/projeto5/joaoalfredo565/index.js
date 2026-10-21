const prompt = require("prompt-sync")()

let nomeTurno = prompt("Nome do turno: ")

let  meta = Number(prompt("Meta de produção: "))

let producaoInicial = Number(prompt("Produção inicial: "))

let pecasPorCaixa = Number(prompt("Quantidade de itens por caixa: "))
let situacaoMeta = "Meta atingida"
let producaoFinal = producaoInicial
while (producaoFinal < meta) {
 producaoFinal = producaoFinal + 1
 situacaoMeta = (producaoFinal >= meta) ? "Meta atingida" : "Meta não atingida" 
}

  

let caixasNecessarias = 0
let restantes = producaoFinal

   do { 
    caixasNecessarias++
    restantes = restantes - pecasPorCaixa
} while (restantes > 0)
 

 const resumo = `
  Nome do turno: ${nomeTurno}
 Produção Final: ${producaoFinal}
 Quantidade de caixas necessárias: ${caixasNecessarias}
  Situação Da meta: ${situacaoMeta}
  ` 

  module.exports ={
nomeTurno,
  meta,
 producaoInicial,
 pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
  situacaoMeta, 
   resumo,
   }






















