// let nacionalidade = prompt("Qual é a sua nacionalidade?").toLowerCase()
// if(nacionalidade === "brasileira"){
//     console.log( "Qual é a sua nacionalidade?", nacionalidade )
        
// }else if(nacionalidade === "argentina"){
//     console.log("Qual é a sua nacionalidade?",nacionalidade)

// }else if(nacionalidade === "uruguaia" ){
//     console.log("Qual é a sua nacionalidade?",nacionalidade)

// }else if(nacionalidade === "chilena"){
//     console.log("Qual é a sua nacionalidade?",nacionalidade)

// }else if(nacionalidade === "colombiana"){
//     console.log("Qual é a sua nacionalidade?",nacionalidade)

// }else{
//     console.log("nacionalidade nao encontrada!")
// }

let nacionalidade = prompt("Escreva aqui sua nacionalidade!").toLowerCase( )

if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade
=== "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana") {
    console.log("Qual é a sua nacionalidade?",nacionalidade)
} else {
    console.log("Nacionalidade não encontrada.")
}