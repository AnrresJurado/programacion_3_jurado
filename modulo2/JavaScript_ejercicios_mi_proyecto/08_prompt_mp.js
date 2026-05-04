const prompt = require("prompt-sync") ();

const inspector = prompt("Ingrese el nombre del inspector de turno: ");
console.log(`Sesión iniciada: Inspector ${inspector}`);

const peso = prompt("Ingrese el peso registrado en la báscula (kg): ");
const pesoConversion = parseInt(peso, 10);

if (isNaN(pesoConversion)) {
    console.log("Error: El peso ingresado no es válido. Repita el pesaje.")
} else {
    console.log(`Carga registrada: ${pesoConversion} kg. Autorización generada.`)
}