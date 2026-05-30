const prompt = require("prompt-sync")();

// ==========================================
// 💸 EJEMPLO 1: Recargo por Distancia Larga
// ==========================================
// Sustituye el ejemplo del descuento de compra. En transporte, si una ruta
// supera un kilometraje mínimo, se aplica un recargo logístico de peajes/combustible.

const distanciaRutaKm = 150;
const LIMITE_RUTA_LARGA = 100;
const PORCENTAJE_RECARGO = 0.10; 

let costoTotalViaje = 500; 

if (distanciaRutaKm >= LIMITE_RUTA_LARGA) {
  const recargo = costoTotalViaje * PORCENTAJE_RECARGO;
  costoTotalViaje = costoTotalViaje + recargo;
  console.log(`🚚 Alerta Ruta Larga: Recargo por kilometraje aplicado: $${recargo.toFixed(2)}`);
}

console.log(`Total a pagar por el flete: $${costoTotalViaje.toFixed(2)}`);
// Resultado: Recargo aplicado: $50.00 -> Total: $550.00


// ==========================================
// 📦 EJEMPLO 2: Control de Capacidad en Bodega (Stock)
// ==========================================
// Cambiamos "unidades de stock" por "camiones disponibles en patio".

const camionesDisponibles = 3;
const UMBRAL_FLOTA_BAJA = 5;

if (camionesDisponibles <= UMBRAL_FLOTA_BAJA) {
  console.log(`⚠️ Flota Crítica: Solo quedan ${camionesDisponibles} camiones en patio. Subcontratar transportistas.`);
}


// ==========================================
// 🪪 EJEMPLO 3: Validación de Licencia Profesional
// ==========================================
// En lugar de validar la mayoría de edad para un registro, validamos los años de 
// experiencia del chofer para asignarle un camión de carga pesada (Tractocamión).

const experienciaChoferAnios = 2;
const MINIMO_EXPERIENCIA_PESADA = 5;

if (experienciaChoferAnios < MINIMO_EXPERIENCIA_PESADA) {
  console.log("❌ Despacho denegado: El chofer no cuenta con la experiencia mínima para carga pesada.");
}

console.log("Proceso de validación de conductor finalizado.");


// ==========================================
// 🛢️ EJEMPLO 4: Input Dinámico - Nivel de Combustible
// ==========================================
// Adaptamos tu prompt de compra para registrar los galones de combustible del camión.

const galonesCombustible = Number(prompt("Ingrese los galones de combustible actuales: "));
console.log(`El tanque registra: ${galonesCombustible} galones.`);

if (galonesCombustible < 20) {
    console.log("⛽ Alerta: El camión debe desviarse a la estación de servicio más cercana.");
}


// ==========================================
// 🚔 EJEMPLO 5: Input Dinámico - Control de Velocidad (GPS)
// ==========================================
// Mantenemos tu excelente ejemplo de velocidad del vehículo, encaja perfecto.
// Solo añadimos Number() para asegurar que la comparación matemática sea exacta.

const velocidadVehiculo = Number(prompt("Velocidad detectada por GPS (km/h): "));
console.log(`Velocidad actual del camión: ${velocidadVehiculo} km/h.`);

if (velocidadVehiculo > 90) {
    console.log("🚨 ¡INFRACCIÓN DETECTADA!: Exceso de velocidad. Notificando a la central.");
}


// ==========================================
// 🕒 EJEMPLO 6: Condicional Compuesto (If / Else) - Puntualidad del Chofer
// ==========================================
// Cambiamos la "asistencia a la materia" por el "porcentaje de entregas a tiempo" 
// del transportista para calcular su bono mensual.

const porcentajePuntualidad = Number(prompt("Ingrese el porcentaje de entregas a tiempo del chofer: "));

if (porcentajePuntualidad < 70) {
  console.log("📉 Rendimiento bajo: Chofer entra a plan de mejora y pierde el bono.");
} else {
  console.log("🏆 Rendimiento excelente: Chofer mantiene su estado activo y califica para bono.");
}