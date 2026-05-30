// --- Contador simple de terminales ---
console.log("=== Habilitando Andenes de Carga ===");
for (let i = 0; i < 5; i++) {
    console.log(`Andén N° ${i} operativo.`);
}

// --- Recorriendo destinos con For Tradicional (Control por índice) ---
const rutasDestino = ["Quito", "Guayaquil", "Cuenca"];
console.log("\n--- Rutas del día (for tradicional) ---");
for (let i = 0; i < rutasDestino.length; i++) {
    console.log(`Parada ${i + 1}: ${rutasDestino[i]}`);
}

// --- Recorriendo destinos con For...Of (Código más limpio) ---
console.log("\n--- Rutas del día (for...of) ---");
for (const destino of rutasDestino) {
    console.log(`🚚 Destino asignado: ${destino}`);
}

const flotaCamiones = [
    { placa: "PBA-102", chofer: "Carlos",  diasDesdeRevision: 2  },
    { placa: "GBA-508", chofer: "María",   diasDesdeRevision: 15 },
    { placa: "CBA-901", chofer: "Luis",    diasDesdeRevision: 0  },
    { placa: "ABA-334", chofer: "Sofía",   diasDesdeRevision: 35 },
    { placa: "TBA-772", chofer: "Roberto", diasDesdeRevision: 42 },
];
  
const LIMITE_DIAS_CRITICO = 30;
  
console.log("\n=== REPORTE OPERATIVO DE FLOTA ===");
console.log(`${"#".padEnd(4)} ${"Placa".padEnd(8)} ${"Chofer".padEnd(10)} Días   Estado`);
console.log("─".repeat(48));
  
for (let i = 0; i < flotaCamiones.length; i++) {
    const camion = flotaCamiones[i];
    const numero = String(i + 1).padStart(2, "0");
  
    let estado;
    if (camion.diasDesdeRevision === 0) {
        estado = "🟢 Nuevo / Recién Revisado";
    } else if (camion.diasDesdeRevision >= 40) {
        estado = "🔴 FUERA DE SERVICIO (PELIGRO)";
    } else if (camion.diasDesdeRevision >= LIMITE_DIAS_CRITICO) {
        estado = "🟡 REVISIÓN CRÍTICA REQUERIDA";
    } else {
        estado = "🟢 Operativo Normal";
    }
  
    console.log(
        `${numero}.  ${camion.placa.padEnd(8)} ${camion.chofer.padEnd(10)} ` +
        `${String(camion.diasDesdeRevision).padStart(3)}d   ${estado}`
    );
}

const vidaUtilInicialKm = 100000; // Kilómetros de vida útil inicial de las llantas
const tasaDesgasteMes    = 0.05;     // 5% de desgaste adicional mensual por caminos difíciles
const mesesEvaluados     = 5;
const usoMensualEstandar = 15000;    // Kilómetros que recorre el camión al mes

let kilometrosRestantes = vidaUtilInicialKm;

console.log("\n=== PROYECCIÓN DE VIDA ÚTIL DE NEUMÁTICOS ===");
console.log(`Vida útil: ${vidaUtilInicialKm} km | Desgaste vial: ${tasaDesgasteMes * 100}% | Proyeccion: ${mesesEvaluados} meses`);
console.log("─".repeat(65));
console.log("Mes   Recorrido/Mes  Desgaste Fricción  Vida Restante");
console.log("─".repeat(65));

for (let mes = 1; mes <= mesesEvaluados; mes++) {
    const perdidaPorFriccion = kilometrosRestantes * tasaDesgasteMes;
    kilometrosRestantes     -= (usoMensualEstandar + perdidaPorFriccion);

    const alertaCambio = kilometrosRestantes <= 20000 ? " ← ⚠️ REEMPLAZO OBLIGATORIO" : "";

    console.log(
        ` ${String(mes).padStart(2)}     ` +
        `${usoMensualEstandar.toString().padStart(7)} km   ` +
        `${perdidaPorFriccion.toFixed(0).padStart(7)} km        ` +
        `${Math.max(0, kilometrosRestantes).toFixed(0).padStart(7)} km ${alertaCambio}`
    );
}