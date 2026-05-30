let contadorMinutos = 10;

console.log("=== Tiempo restante para cierre de compuerta ===");
while (contadorMinutos >= 0) {
    console.log(`⏱️ El camión sale en ${contadorMinutos} minutos.`);
    contadorMinutos--;
}

const hojaDeRuta = [
    { ordenId: "FAC-001", servicio: "Express", destino: "Zona Norte" },
    { ordenId: "FAC-002", servicio: "Estándar", destino: "Zona Centro" },
    { ordenId: "FAC-003", servicio: "VIP",      destino: "Frontera" },
    { ordenId: "FAC-004", servicio: "Express", destino: "Zona Sur" },
];

let indiceGuia = 0;
console.log("\n=== Despachando órdenes de la hoja de ruta ===");

while (indiceGuia < hojaDeRuta.length) {
    const guia = hojaDeRuta[indiceGuia];

    if (guia.servicio === "VIP") {
        console.log(`👑 [PRIORIDAD MÁXIMA] ${guia.ordenId}: Envío hacia ${guia.destino}`);
    } else if (guia.servicio === "Express") {
        console.log(`⚡ [ENVÍO RÁPIDO]     ${guia.ordenId}: Envío hacia ${guia.destino}`);
    } else {
        console.log(`🚛 [CUMPLIMIENTO]     ${guia.ordenId}: Envío hacia ${guia.destino}`);
    }

    indiceGuia++;
}

console.log(`Total de paradas procesadas en el sistema: ${hojaDeRuta.length}`);


const CAPACIDAD_MAXIMA_KG = 1000;
const paletsEnEspera = [120, 85, 200, 310, 95, 250]; // Pesos en kg de cada palet
let pesoCargadoActual = 0;
let paletsProcesados = 0;

console.log("\n=== Iniciando estiba en el contenedor ===");

while (pesoCargadoActual < CAPACIDAD_MAXIMA_KG && paletsProcesados < paletsEnEspera.length) {
    const pesoPalet = paletsEnEspera[paletsProcesados];
    pesoCargadoActual += pesoPalet;
    paletsProcesados++;

    console.log(`Palet #${paletsProcesados}: +${pesoPalet}kg → Peso total en camión: ${pesoCargadoActual}kg`);

    if (pesoCargadoActual >= CAPACIDAD_MAXIMA_KG) {
        console.log(`🚨 ¡Capacidad máxima alcanzada! Camión lleno con ${paletsProcesados} palets.`);
    }
}

if (pesoCargadoActual < CAPACIDAD_MAXIMA_KG) {
    const espacioDisponible = CAPACIDAD_MAXIMA_KG - pesoCargadoActual;
    console.log(`El camión va a salir con espacio libre. Puede cargar ${espacioDisponible}kg más.`);
}