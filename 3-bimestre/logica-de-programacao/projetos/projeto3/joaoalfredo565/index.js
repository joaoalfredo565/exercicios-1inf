const nome = "João Alfredo"
const idade = 19
const categoria = "comum"
const possuiInscricao = true
const suspenso = false
const valorInscricao = 0
const valorPago = 0
let idadeStatus = "Idade permitida"
if (idade>=18) {
    console.log("idade permitida")
} else {
    console.log("idade não permitida")
}
let nivelAcesso = "Acesso comum"
 if (nivelAcesso === "professor" || nivelAcesso === "coordenador"){
     console.log("Acesso administrativo liberado")
 } else {
    console.log("Acesso comum")
 } 
 let acessoStatus = "Entrada na palestra liberada"

if (idade>=18 && possuiInscricao && !suspenso) {
    console.log ("Entrada na palestra liberada")
} else {
    console.log("Entrada na palestra negada")
}
let pagamentoStatus = "Pagamento aprovado"
if (valorPago>=valorInscricao) {
    console.log("Pagamento aprovado")
    troco = valorPago - valorInscricao
} else {
    console.log ("Pagamento insuficiente")
    troco = 0
} let statusPalestra = "Presença na palestra confirmada"
if (acessoStatus && pagamentoStatus) {
    console.log("Presença na palestra confirmada")
} else {
    console.log("Presença na palestra não confirmada")
}
const resumo = `
nome: ${nome}
categoria: ${categoria}
nivel de acesso: ${nivelAcesso}
valor da inscrição: R$ ${valorInscricao}
valor pago: R$ ${valorPago}
troco: R$ ${troco}
situação do acesso: ${acessoStatus}
situação do pagamento: ${pagamentoStatus}
situação final: ${statusPalestra}
`
console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiInscricao,
    suspenso,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusPalestra,
    resumo
}