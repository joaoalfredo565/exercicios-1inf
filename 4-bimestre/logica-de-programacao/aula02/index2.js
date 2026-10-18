const prompt = require('prompt-sync')()

let meta = 0 


do {
    meta= Number(prompt("Meta de lotes (maior que 0:"))
    console.log(meta)
} while (meta <= 0)

let lotes = 0

do {
    lotes = Number(prompt("Lotes:"))
    console.log(lotes)
    lotes = lotes + 1 
} while (lotes < meta ) 

    module.exports = lotes