// --- SISTEMA DE CONTROL DE RENDIMIENTO Y FACTURACIÓN ---

// 1. Simulación de División por Cero (Error de sensores)
const kilometrosRecorridos = 150;
const combustibleConsumido = 0; // Sensor fallido o tanque vacío

const rendimiento = kilometrosRecorridos / combustibleConsumido;
console.log("Rendimiento calculado:", rendimiento); // Infinity
console.log("Estado del sensor:", rendimiento === Infinity ? "ALERTA: Sensor de combustible sin datos." : "Lectura normal.");

// 2. Operaciones con NaN (Datos Corruptos en Pesaje)
const pesoCarga = Number("Carga_Invalida"); // El operario ingresó texto en lugar de números
const pesoTotal = pesoCarga + 500; // Intento de sumar el peso del contenedor

console.log("Resultado del pesaje:", pesoTotal); // NaN
if (isNaN(pesoTotal)) {
    console.error("ERROR: No se puede despachar. Los datos de pesaje están corruptos.");
}

// 3. Precisión Decimal (Cálculo de Peajes y Tarifas)
// Supongamos que un viaje tiene dos peajes de $0.10 y $0.20
const peajeA = 0.1;
const peajeB = 0.2;
const totalEsperado = 0.3;
const sumaReal = peajeA + peajeB;

console.log("¿Suma exacta? (0.1 + 0.2 === 0.3):", sumaReal === totalEsperado); // false
console.log("Suma real interna de JS:", sumaReal); // 0.30000000000000004

// Solución técnica para validación de cobros usando EPSILON
const cobroValidado = Math.abs(sumaReal - totalEsperado) < Number.EPSILON;
console.log("¿Cobro validado correctamente?:", cobroValidado); // true

// 4. Redondeo para el Manifiesto de Carga (toFixed)
const tarifaPorKm = 1.355;
const distancia = 120.45;
const subtotal = tarifaPorKm * distancia; // 163.20975...

// Formatear para factura del cliente (2 decimales)
const facturaFinal = subtotal.toFixed(2);

console.log("--- TICKET DE TRANSPORTE ---");
console.log(`Subtotal calculado: $${subtotal}`);
console.log(`Total a pagar (redondeado): $${facturaFinal}`);
console.log("Tipo de dato de la factura:", typeof facturaFinal); // string

// Nota: Si necesitas seguir operando, recuerda convertirlo:
const totalNumerico = parseFloat(facturaFinal);
console.log("Total listo para nuevos cálculos:", totalNumerico);