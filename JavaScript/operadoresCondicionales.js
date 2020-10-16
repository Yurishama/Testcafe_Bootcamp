//Operadores Condicionales

let edad = 29
let masDe18
//Esto es un if
if (edad < 18){
    console.log("No drink")
    masDe18 = false
} else {
    console.log("Salud")
    masDe18 = true
}

console.log(masDe18)
// Operador Ternario --- if pero chiquito
masDe18 = (edad < 18) ? false: true

console.log(masDe18)

