const prompt = require("prompt-sync")()

let quantidadeDeDias = Number(prompt("Quantidade de dias: "))

let metaDiaria = Number(prompt("Meta diária: "))

let metaSemanal = Number(prompt("Meta semanal: "))
let totalVendido = 0
let mediaVendas = 0
let diasAcimaDaMeta = 0
let melhorDia = 0
let situacaoSemana = ""
for (let dias = 1; dias <= quantidadeDeDias; dias++) {
    let vendaDia = Number(prompt(`Venda do dia ${dias}: `))
    totalVendido = totalVendido + vendaDia
   mediaVendas = totalVendido / quantidadeDeDias
 console.log(totalVendido)
   if (vendaDia >= metaDiaria)
    diasAcimaDaMeta++
    
   if ( vendaDia > melhorDia)
    melhorDia = vendaDia
}


situacaoSemana = totalVendido >= metaSemanal ? "Meta semanal atingida" : "Meta semanal não atingida"
console.log(situacaoSemana)
const resumo = `
Situação semanal: ${situacaoSemana}
Quantidade de Dias: ${quantidadeDeDias}
Média diária: ${metaDiaria}
Dias acima da Meta: ${diasAcimaDaMeta}
Melhor dia de Vendas: ${melhorDia}
Média de Vendas: ${mediaVendas}
Total Vendido: ${totalVendido}
`

module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}
