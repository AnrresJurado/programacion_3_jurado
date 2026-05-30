const prompt = require("prompt-sync")();

// ==========================================
// 🛠️ Funciones Puras de Tarifas Logísticas
// ==========================================
// Reemplazan las operaciones matemáticas simples por reglas de negocio reales.

const aplicarRecargoCombustible = (costoBase, porcentaje) => costoBase * (1 + porcentaje);
const aplicarDescuentoVolumen   = (costoBase, descuento) => costoBase - descuento;
const calcularViaticosChofer   = (diasViaje, tarifaDiaria) => diasViaje * tarifaDiaria;
const prorratearCostoPorPalet  = (costoTotal, totalPalets) => {
  if (totalPalets === 0) return "Error: No se puede prorratear para 0 palets.";
  return costoTotal / totalPalets;
};

// ==========================================
// 🔀 Función Controladora (Despachador de Operaciones)
// ==========================================
// Agrupa las funciones anteriores mapeándolas con un código clave (ID de cálculo)
function calcularCostoLogistico(parametroA, parametroB, codigoOperacion) {
  const operacionesMapeadas = { 
    "RECARGO": aplicarRecargoCombustible, 
    "DESCUENTO": aplicarDescuentoVolumen, 
    "VIATICOS": calcularViaticosChofer, 
    "PRORRATEO": prorratearCostoPorPalet 
  };

  const funcionEjecutable = operacionesMapeadas[codigoOperacion.toUpperCase()];
  
  if (!funcionEjecutable) {
    return `Operación financiera "${codigoOperacion}" no reconocida en el sistema de transporte.`;
  }
  
  return funcionEjecutable(parametroA, parametroB);
}

// ==========================================
// 🔢 Validador de Entradas del Operador
// ==========================================
// Mapea tu excelente función "leerNumero" para asegurar datos limpios en la consola.
function leerDatoNumerico(mensaje) {
  while (true) {
    const entrada = prompt(mensaje);
    const numero  = parseFloat(entrada);
    if (!isNaN(numero) && numero >= 0) return numero; // Validamos que tampoco sea negativo
    console.log("❌ Error: Entrada no válida (debe ser un número mayor o igual a cero).");
  }
}

// ==========================================
// 🚀 Programa Principal de Cotización
// ==========================================
console.log("\n=== 🚚 CALCULADORA DE COSTOS LOGÍSTICOS - UTE TRUCK ===");
console.log("Operaciones disponibles: [ RECARGO | DESCUENTO | VIATICOS | PRORRATEO ]\n");

// 1. Leer los parámetros requeridos
const parametroA      = leerDatoNumerico("Ingrese el valor base / primer parámetro (ej. Costo, Días o Total): ");
const parametroB      = leerDatoNumerico("Ingrese el modificador / segundo parámetro (ej. Factor %, Descuento o Palets): ");
const codigoOperacion = prompt("Ingrese el identificador de la operación: ");

// 2. Procesar la información mediante el controlador central
const costoFinalCalculado = calcularCostoLogistico(parametroA, parametroB, codigoOperacion);

// 3. Mostrar el resultado financiero en el manifiesto de carga
console.log("\n──────────────────────────────────────────────────");
console.log(`📋 Resumen de Auditoría:`);
console.log(`   Parámetros: [${parametroA}] y [${parametroB}]`);
console.log(`   Acción Ejecutada: ${codigoOperacion.toUpperCase()}`);
console.log(`   Resultado Financiero: ${typeof costoFinalCalculado === 'number' ? '$' + costoFinalCalculado.toFixed(2) : costoFinalCalculado}`);
console.log("──────────────────────────────────────────────────\n");

