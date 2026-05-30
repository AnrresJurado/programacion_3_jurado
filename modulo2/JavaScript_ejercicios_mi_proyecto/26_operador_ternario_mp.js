// ==========================================
// 🚛 EJEMPLO 1: Disponibilidad de Unidades
// ==========================================
const camionesEnPatio = 8;

// Si hay camiones en patio, la flota está disponible; si no, está agotada.
const estadoFlota = camionesEnPatio > 0 ? "Flota Disponible ✅" : "Flota Agotada ❌";
console.log(`Estado del Patio: ${estadoFlota}`);   
// Resultado: Estado del Patio: Flota Disponible ✅


// ==========================================
// 📦 EJEMPLO 2: Uso en Template Literals (Seguro de Ruta)
// ==========================================
const precioPorKilometro = 2.50;
const distanciaRutaKm   = 30;
const costoFleteTotal   = precioPorKilometro * distanciaRutaKm;

console.log(`\n--- Resumen de Orden ---`);
console.log(`Ruta: ${distanciaRutaKm} km x $${precioPorKilometro}/km`);
console.log(`Costo Flete: $${costoFleteTotal.toFixed(2)}`);
console.log(`Seguro de Carga Gratis: ${costoFleteTotal >= 50 ? "Incluido 🛡️" : "No incluido ⚠️ (Requiere fletes de mínimo $50)"}`);


// ==========================================
// 💳 EJEMPLO 3: Estado Financiero del Viaje (Caja Chica)
// ==========================================
const saldoCajaChicaViaje = -150; // El chofer gastó de más en un repuesto en ruta

const estadoFinanciero = saldoCajaChicaViaje >= 0 ? "Fondo en Regla" : "Fondo en Déficit (Pendiente Reembolso)";
const colorAlertaViaje  = saldoCajaChicaViaje >= 0 ? "verde" : "rojo";

console.log(`\n🚨 Monitoreo de Gastos:`);
console.log(`[${colorAlertaViaje.toUpperCase()}] Estado de Viáticos: ${estadoFinanciero}`);
// Resultado: [ROJO] Estado de Viáticos: Fondo en Déficit (Pendiente Reembolso)


// ==========================================
// 🛑 EJEMPLO 4: La Mala Práctica de Anidar Ternarios
// ==========================================
const pesoToneladas = 12;

const categoriaVehiculoMala = pesoToneladas >= 18 ? "Tráiler Pesado" : pesoToneladas >= 5 ? "Camión Mediano" : "Furgoneta Ligera";


// ==========================================
//  EJEMPLO 5: La Buena Práctica (Uso de if/else if)
// ==========================================
let categoriaVehiculoClara;

if (pesoToneladas >= 18) {
  categoriaVehiculoClara = "Tráiler Pesado (Eje Múltiple)";
} else if (pesoToneladas >= 5) {
  categoriaVehiculoClara = "Camión Mediano (Rígido)";
} else {
  categoriaVehiculoClara = "Furgoneta Ligera (Reparto Urbano)";
}

console.log(`\nTipo de vehículo asignado por tonelaje: ${categoriaVehiculoClara}`);