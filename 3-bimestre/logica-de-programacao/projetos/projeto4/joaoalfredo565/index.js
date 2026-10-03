const cliente = "André Cardoso"
const opcaoMenu = 1
const quantidade = 5
const formaPagamento = "cartao"
const statusPedido = "aprovado"
let prato = "Sushi"
let precoUnitario = 32

switch (opcaoMenu){
    case 1: 
    prato = "Sushi"
    precoUnitario = 32
         break
    case 2:
       prato = "Temaki"
    precoUnitario =24
           break
    case 3: 
    prato = "Yakisoba"
    precoUnitario = 28
           break
    case 4: 
    prato = "Chá Gelado"
    precoUnitario = 9
           break
           default:
            precoUnitario = 0    
}

let subtotal = precoUnitario * quantidade


let freteStatus = subtotal>=60 ?"Frete grátis": "Frete pago"
let frete = subtotal>= 60 ? 0 : 15

let descontoPercentual = 10
let pagamentoMensagem = "Pagamento via cartão"
switch (pagamentoMensagem){
       case "pix":
     pagamentoMensagem =  "Pagamento via PIX"
     descontoPercentual = 10
                  break
         case "cartao":
              pagamentoMensagem =  "Pagamento via cartão"
              descontoPercentual = 10
                 break
            case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        descontoPercentual = 0
}       

   
                 
let desconto = (subtotal * descontoPercentual)/100
let total = (subtotal - desconto) + frete
 
let statusMensagem = "aprovado"
 switch(statusMensagem){
       case "pendente":
       statusMensagem = "Aguardando pagamento"
               break
       case "aprovado":
       statusMensagem = "Pedido em preparo"
             break
             case "enviado":
             statusMensagem = "Pedido a caminho"
                  break
                  case "cancelado":
                  statusMensagem = "pedido cancelado"
                      break
                      default:
               statusMensagem = "status desconhecido"
 }

 const resumo = `{
 Nome do cliente: ${cliente}
 Item:  ${prato}
 quantidade: ${quantidade}
 Subtotal: ${subtotal}
 Situação do frete: ${freteStatus}
 Forma de pagamento: ${pagamentoMensagem}
 Desconto: R$ ${desconto}
 Total: R$ ${total}
Situação do Pedido: ${statusMensagem}
}`
console.log(resumo)
module.exports = {
cliente,
opcaoMenu,
quantidade,
formaPagamento, 
statusPedido,
prato,
precoUnitario,
subtotal,
freteStatus,
frete,
pagamentoMensagem,
descontoPercentual,
desconto,
total,
statusMensagem,
resumo 
}


 


















