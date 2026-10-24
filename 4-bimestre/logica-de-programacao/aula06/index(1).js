const prompt = require("prompt-sync")()

let turnos = Number(prompt("Quantos turnos? "))

let turnosAcimaDaMeta = 0

for (let pecas = 1; pecas <= turnos; pecas++ ) {
let pecasturnos = Number(prompt(`Peças do turno ${pecas}: `))


if (pecasturnos > 15 ) {
    turnosAcimaDaMeta = turnosAcimaDaMeta + 1
 }
}
console.log(turnosAcimaDaMeta)
module.exports = turnosAcimaDaMeta
