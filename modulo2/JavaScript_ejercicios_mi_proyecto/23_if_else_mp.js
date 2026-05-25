const prompt = require("prompt-sync")();

// ==========================================
// 🕒 EJEMPLO 1: Control de Turnos de Choferes
// ==========================================
const horaActual = 14; // Formato 24h

if (horaActual < 18) {
  console.log("🚛 Turno Diurno activo. Monitoreando rutas locales.");
} else {
  console.log("🌙 Turno Nocturno activo. Monitoreando transporte interprovincial.");
}


// ==========================================
// 💳 EJEMPLO 2: Aprobación de Viáticos para la Ruta
// ==========================================
// Sustituimos ingresos/deudas por presupuesto asignado y costo estimado de peajes/diesel.
const presupuestoAsignado = 800;
const gastoPeajesEstimado = 200;
const PRESUPUESTO_MINIMO_VIAJE = 600;
const RATIO_PEAJES_MAXIMO = 0.4; // Los peajes no deben superar el 40% del presupuesto total

const ratioPeajes = gastoPeajesEstimado / presupuestoAsignado;

if (presupuestoAsignado >= PRESUPUESTO_MINIMO_VIAJE && ratioPeajes <= RATIO_PEAJES_MAXIMO) {
  console.log("✅ Viáticos del viaje APROBADOS.");
  console.log(`Ratio Peajes/Presupuesto: ${(ratioPeajes * 100).toFixed(1)}%`);
} else {
  console.log("❌ Viáticos RECHAZADOS. Revisar costos de ruta.");
  console.log(`Presupuesto mínimo requerido: $${PRESUPUESTO_MINIMO_VIAJE}`);
  console.log(`Ratio peajes actual: ${(ratioPeajes * 100).toFixed(1)}% (máximo permitido: 40%)`);
}


// ==========================================
// 🔐 EJEMPLO 3: Autenticación de Operador de Despacho
// ==========================================
const pinIngresado = "Despacho2026";
const pinCorrecto   = "Despacho2026";
let intentosFallidosLogistica = 0;
const MAX_INTENTOS_SISTEMA    = 3;

if (pinIngresado === pinCorrecto) {
  console.log("🔓 Acceso concedido al panel de control de flotas.");
} else {
  intentosFallidosLogistica++;
  const restantes = MAX_INTENTOS_SISTEMA - intentosFallidosLogistica;
  console.log(`🚨 PIN incorrecto. Intentos de seguridad restantes: ${restantes}`);
}


// ==========================================
// 🔢 EJEMPLO 4: Validación de ID de Guía de Remisión (parseInt + isNaN)
// ==========================================
const guiaTexto = prompt("Escribe el número de guía de remisión: ");
const numeroGuia = parseInt(guiaTexto, 10);

if (isNaN(numeroGuia)) {
  console.log("❌ Error: El identificador de guía debe contener solo números.");
} else {
  console.log(`📦 Buscando datos para la guía de remisión N°: ${numeroGuia}`);
}


// ==========================================
// 📦 EJEMPLO 5: Validación de Volumen de Entregas (Bono)
// ==========================================
const totalEntregasTexto = prompt("Cantidad de entregas completadas en el viaje: ");
const entregas = parseInt(totalEntregasTexto, 10);

if (entregas >= 10) {
  console.log("🏆 Ruta de alta eficiencia. Aplica bono por productividad al chofer.");
} else {
  console.log("🚛 Ruta estándar. Sin bonificaciones adicionales.");
}


// ==========================================
// 🛠️ EJEMPLO 6: Corrección de Bug - Código de Seguridad del Contenedor
// ==========================================
// Eso es una ASIGNACIÓN (sobreescribe la variable) y siempre da true.
// Aquí lo corregimos usando igualdad estricta `===`.

const codigoContenedor = prompt("Ingrese el código de seguridad del contenedor: ");

// ¡CORREGIDO!: Usamos === para comparar y evitar que cualquier valor acceda.
if (codigoContenedor === "1234") { 
  console.log("🔓 Candado satelital abierto. Descarga permitida.");
} else {
  console.log("🔒 ALERTA: Código incorrecto. Contenedor bloqueado.");
}


// ==========================================
// 🚨 EJEMPLO 7: Restricción de Horario de Salida
// ==========================================
const horaSalidaTexto = prompt("Ingrese la hora de salida programada (0-23): ");
const horaSalida = parseInt(horaSalidaTexto, 10);

if (horaSalida < 12) {
  console.log("🌅 Salida matutina: Ruta libre de restricciones de carga pesada.");
} else {
  console.log("🌆 Salida tarde/noche: Verificar restricciones de tráfico urbano.");
}