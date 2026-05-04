console.log(Math.round(9.5)) // Rdeondeo Estandar
console.log(Math.floor(10.5)) // Redondeo hacia abajo
console.log(Math.ceil(7.1)) // Reondeo hacia arriba
console.log(Math.abs(-69)) //Valor absoluto
console.log(Math.max(101,102,103)) // El Mayor
console.log(Math.min(10, 9 , 8)) // El menor
console.log(Math.sqrt(25)) // Raiz Cuadrada
console.log(Math.pow(3, 10)) // Potencia
console.log(Math.trunc(5.8)) // Parte entera
console.log(Math.random()); // Numero aletorio


function raizCuadrada (numero) {
    const resultado = Math.sqrt(numero);
    return `La raiz cudara de ${numero} es ${resultado}`
}

console.log(raizCuadrada(36));