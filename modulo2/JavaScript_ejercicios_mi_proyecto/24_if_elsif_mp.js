const prompt = require("prompt-sync")();

// =========================================================================
// 🌡️ EJEMPLO 1: Monitoreo de Cadena de Frío (Temperatura del Contenedor)
// =========================================================================
const temperaturaContenedor = 4; // grados Celsius

if (temperaturaContenedor >= 15) {
  console.log("🚨 ALERTA CRÍTICA: Temperatura demasiado alta. Riesgo de pérdida de carga.");
} else if (temperaturaContenedor >= 8) {
  console.log("⚠️ Advertencia: Temperatura sobre el límite recomendado. Revisar sensores.");
} else if (temperaturaContenedor >= 2) {
  console.log("❄️ Temperatura Óptima: Refrigeración adecuada para perecederos.");
} else if (temperaturaContenedor >= -5) {
  console.log("🥶 Congelación Ligera: Ideal para carnes y productos congelados.");
} else {
  console.log("🚨 ALERTA: Temperatura extremo bajo cero. Posible fallo de calibración.");
}


// =========================================================================
// 📦 EJEMPLO 2: Clasificación de Carga y Tarifa de Envío por Peso
// =========================================================================
const pesoToneladas = 4.5;
const TARIFA_MINI    = 50.00;
const TARIFA_LIVIANO  = 120.00;
const TARIFA_PESADO   = 250.00;
const TARIFA_MAXIMA   = 500.00;

let costoFlete;
let tipoCamion;

if (pesoToneladas <= 1) {
  costoFlete = TARIFA_MINI;
  tipoCamion = "Camioneta de reparto";
} else if (pesoToneladas <= 5) {
  costoFlete = TARIFA_LIVIANO;
  tipoCamion = "Camión Rígido Mediano";
} else if (pesoToneladas <= 20) {
  costoFlete = TARIFA_PESADO;
  tipoCamion = "Tractocamión de 2 ejes";
} else {
  costoFlete = TARIFA_MAXIMA;
  tipoCamion = "Tráiler articulado pesado (Requiere permisos especiales)";
}

console.log(`\n--- Reporte de Despacho ---`);
console.log(`Peso Declarado: ${pesoToneladas} Toneladas`);
console.log(`Vehículo Asignado: ${tipoCamion}`);
console.log(`Costo estimado de flete: $${costoFlete.toFixed(2)}`);


// =========================================================================
// 🚨 EJEMPLO 3: Matriz de Prioridad de Despacho (Sustituye Notas Escolares)
// =========================================================================
const nivelUrgenciaHoras = 12; // Cuántas horas quedan para la entrega

let prioridadRuta;
let requiereMonitoreoGps;

if (nivelUrgenciaHoras <= 4) {
  prioridadRuta        = "CRÍTICA — Despacho inmediato sin paradas";
  requiereMonitoreoGps = true;
} else if (nivelUrgenciaHoras <= 12) {
  prioridadRuta        = "ALTA — Prioridad en andén de carga";
  requiereMonitoreoGps = true;
} else if (nivelUrgenciaHoras <= 24) {
  prioridadRuta        = "MEDIA — Programar en el bloque de la tarde";
  requiereMonitoreoGps = false;
} else {
  prioridadRuta        = "BAJA — Envío consolidado estándar";
  requiereMonitoreoGps = false;
}

console.log(`\nUrgencia: Quedan ${nivelUrgenciaHoras} horas.`);
console.log(`Prioridad asignada: ${prioridadRuta}`);
console.log(`¿Monitoreo GPS Activo?: ${requiereMonitoreoGps ? "SÍ ✅" : "NO ❌"}`);


// =========================================================================
// 🛢️ EJEMPLO 4: Input Dinámico - Consumo de Diésel (¡CORREGIDO!)
// =========================================================================
const galonesConsumidos = Number(prompt("\nIngrese el consumo de combustible (Galones): "));

if (galonesConsumidos <= 20) {
  console.log("📊 Consumo bajo: Conducción eficiente del transportista.");
} else if (galonesConsumidos <= 50) { // <-- CORREGIDO: Usamos la variable del flujo actual
  console.log("📊 Consumo medio: Dentro del rango estimado para la ruta.");
} else {
  console.log("🚨 Consumo alto: Posible fuga, ralentí excesivo o sobrecarga.");
}


// =========================================================================
// 💵 EJEMPLO 5: Input Dinámico - Presupuesto de Peajes (parseFloat Simplificado)
// =========================================================================
const peajesTexto = prompt("Ingrese el presupuesto estimado para peajes: ");
const presupuestoPeajes = parseFloat(peajesTexto); // Nota: parseFloat solo lleva 1 argumento, no se le pone (, 10)

if (presupuestoPeajes < 50) {
  console.log("💰 Presupuesto básico: Válido solo para rutas locales.");
} else if (presupuestoPeajes <= 150) { // <-- SIMPLIFICADO: Eliminamos la redundancia
  console.log("💰 Presupuesto intermedio: Válido para rutas nacionales cortas.");
} else {
  console.log("💰 Presupuesto avanzado: Válido para rutas transfronterizas.");
}


// =========================================================================
// 🗓️ EJEMPLO 6: Input Dinámico - Restricción Vehicular (¡CORREGIDO BUG DEL `=`!)
// =========================================================================
const diaDigitado = prompt("Ingrese el número de día de la semana (1-7): ");
const diaSemana = parseInt(diaDigitado, 10);

if (diaSemana >= 1 && diaSemana <= 5) {
  console.log("🚛 Día Laboral: Camiones medianos tienen restricción en hora pico.");
} else if (diaSemana === 6) { // <-- CORREGIDO: Cambiado de `=` a `===`
  console.log("🚚 Sábado: Libre circulación para toda la flota en zonas urbanas.");
} else if (diaSemana === 7) { // <-- CORREGIDO: Cambiado de `=` a `===`
  console.log("🔒 Domingo: Restricción total de carga pesada por turismo.");
} else {
  console.log("❌ Código de día inválido.");
}