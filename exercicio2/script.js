let idade = +prompt("Qual é a sua idade?");
console.log("Qual é sua idade?" ,idade )

if(idade >= 18) {
    console.log("Maior de idade.")
}else{
	console.log("Menor de idade.")
}

let terminouEnsinoMedio = prompt("Didite \"sim\" ou \"não\" para se terminou o ensino médio!");
console.log("Terminou o ensino médio?", terminouEnsinoMedio)

if(terminouEnsinoMedio === "sim" ){
    console.log("Ensino Médio Concluído.", true)
}else{
    console.log("Ensino Médio Concluído.", false)
}

let isCursandoFaculdade = prompt("Digite \"sim\" ou \"não\" para se está cursando faculdade!");
console.log("Esta cursando Faculdade?", isCursandoFaculdade)

if(isCursandoFaculdade === "sim" ){
    console.log("Cursandondo Faculdade?", true)
}else{
    console.log("Cursando faculdade?", false)
}