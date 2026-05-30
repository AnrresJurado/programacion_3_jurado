const prompt = require("prompt-sync")();
const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
  const descuento = totalCompra * PORCENTAJE_DESCUENTO;
  totalFinal = totalCompra - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00

const stockDisponible = 3;
const UMBRAL_STOCK_BAJO = 5;

if (stockDisponible <= UMBRAL_STOCK_BAJO) {
  console.log(`⚠️ Stock bajo: quedan ${stockDisponible} unidades. Reabastecer pronto.`);
}

const edadUsuario = 17;
const EDAD_MINIMA = 18;



if (edadUsuario < EDAD_MINIMA) {
  console.log("Acceso denegado: debes ser mayor de edad para registrarte.");
}

console.log("Registro finalizado.");
// Acceso denegado: debes ser mayor de edad para registrarte.
// Registro finalizado.


const monto_de_compra = prompt("Monto de compra ");
console.log(`Tu monto de compra es, ${monto_de_compra}!`);

if (monto_de_compra > 100) {
    console.log("Aplica descuento");
}

const velocidad_vehiculo = prompt("Velocidad del vehiculo ");
console.log(`La velocidad del vehiculo ${velocidad_vehiculo}!`);

if (velocidad_vehiculo > 90) {
    console.log("Exceso de velocidad");
}

const totalAsistencias = prompt("Ingrese el total de asistencias: ");

if (totalAsistencias < 70) {
  console.log("Pierde la materia por faltas");
} else {
  console.log("Asistencias suficientes");
}