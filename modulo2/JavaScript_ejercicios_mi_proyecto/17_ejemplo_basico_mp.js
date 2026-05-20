const prompt = require("prompt-sync")();

console.log("===Distancia del Viaje===")

const distanciaTetxo = prompt("Ingrese el total de kilometros recorridos: ")
const combustibleTexto = prompt("Ingrese los galones de combustible consumido: ")

const distancia = parseFloat(distanciaTetxo) || 0;
const combustible = parseFloat(combustibleTexto) ||0;

const precio_galon = 3.99;

const rendimiento = combustible !== 0 ? distancia / combustible : 0;
const costoTotal = combustible * precio_galon;
const costoPorKilometro = combustible !== 0 ? costoTotal / distancia: 0;

console.log(`
Resumen Operacional del Viaje:
  Distancia registrada:  ${distancia} km
  Combustible utilizado: ${combustible} galones
  
Resultados de Eficiencia:
  Rendimiento:           ${rendimiento.toFixed(2)} km/galón
  Costo total de combustible: $${costoTotal.toFixed(2)}
  Costo operativo por km:     $${costoPorKilometro.toFixed(2)}
`);
