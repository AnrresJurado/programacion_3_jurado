// --- Función Declarada ---
function inicializarTerminal() {
    console.log("🚛 Sistema de Terminal Terrestre Inicializado.");
}
inicializarTerminal();

// --- Función Expresada ---
const registrarSalida = function() {
    console.log("📤 Salida de unidad registrada en la base de datos.");
};
registrarSalida();

const calcularDistanciaMetros = (kilometros) => kilometros * 1000;
console.log(`Metros recorridos: ${calcularDistanciaMetros(5)}m`);

setTimeout(function() {
    console.log("📡 GPS: Sincronizando coordenadas con el satélite secundario...");
}, 1000);

// --- Función con Parámetros y Retorno ---
function calcularCostoCombustible(galones, precioPorGalon) {
    return galones * precioPorGalon;
}
const costoDiesel = calcularCostoCombustible(45, 2.40);
console.log(`Costo total de diésel: $${costoDiesel.toFixed(2)}`);

// --- Parámetros por Defecto ---
function generarManifiesto(chofer = "Conductor de Guardia", camionTipo = "Camioneta Carga Ligera") {
    return `Viaje asignado a: ${chofer} en unidad tipo: ${camionTipo}`;
}
console.log(generarManifiesto()); // Usa ambos por defecto
console.log(generarManifiesto("Carlos Mendoza", "Tráiler Pesado"));

// Función Flecha con Retorno Explícito 
const calcularPeajeEspecial = (base = 10, factor = 1) => {
    return (base * factor) / 2; 
};
console.log(`Tarifa Peaje Especial: $${calcularPeajeEspecial(3, 3)}`);

// --- Parámetros REST (...): Agrupar datos entrantes ---
function registrarRutaConParadas(destinoFinal, ...paradasIntermedias) {
    console.log(`\n📍 Destino Principal: ${destinoFinal}`);
    for (const parada of paradasIntermedias) {
        console.log(`  🛑 Parada de control autorizada: ${parada}`);
    }
}
registrarRutaConParadas("Guayaquil", "Latacunga", "Ambato", "Riobamba");

// --- Operador SPREAD (...): Desempaquetar colecciones ---
const pesosPaquetes = [3, 1, 4, 1, 5, 9, 2, 6];

// Math.max no acepta arrays directamente, necesitamos "esparcirlo" con spread
console.log(`📦 Peso del paquete más pesado: ${Math.max(...pesosPaquetes)} kg`);
console.log(`📦 Peso del paquete más ligero: ${Math.min(...pesosPaquetes)} kg`);

// Combinar y copiar rutas de transporte de forma segura
const rutaNorte = ["Ibarra", "Tulcán"];
const rutaSur   = ["Loja", "Zamora"];
const rutaCompletaEcuador = ["Quito", ...rutaNorte, ...rutaSur];
console.log("🗺️ Mapa de Cobertura:", rutaCompletaEcuador);

// Clonar objetos para actualizar datos de un camión sin modificar el original
const camionBase = { placa: "PBA-2026", capacidadToneladas: 12 };
const camionAsignado = { ...camionBase, chofer: "Ana Martínez", enRuta: true };
console.log("Ficha de Despacho:", camionAsignado);

// Retorno implícito en funciones flecha (sin llaves `{}` ni palabra `return`)
const esExcesoVelocidad = (velocidad) => velocidad > 90; 
console.log(`¿Unidad a 95km/h infringe la ley?: ${esExcesoVelocidad(95) ? "SÍ 🚨" : "NO ✅"}`);

// --- Función de Alto Orden ---
// Recibe los datos del vehículo y una función "callback" para auditar el estado
function auditoriaVehicular(placa, valorMedido, algoritmoDeVerificacion) {
    const resultadoAuditoria = algoritmoDeVerificacion(valorMedido);
    console.log(`Vehículo [${placa}]: ${resultadoAuditoria ? "⚠️ REQUIERE ATENCIÓN" : "🟢 ESTADO NORMAL"}`);
}

const verificarFrenos = (desgaste) => desgaste > 0.75; // Alerta si supera el 75%
const verificarPresionLlantas = (psi) => psi < 30 || psi > 45;

auditoriaVehicular("GBA-404", 0.82, verificarFrenos);           // Requiere atención (frenos gastados)
auditoriaVehicular("PBA-102", 35, verificarPresionLlantas);     // Estado normal (35 PSI es correcto)

auditoriaVehicular("TBA-777", 105, (temperatura) => temperatura > 100);

