// --- Creación de Arreglos ---
const flotaCamiones = ["VOLVO-01", "SCANIA-02", "MERCEDES-03"];
const capacidadesKg = [12000, 8500, 15000, 5000];

// --- Acceso con índices ---
console.log(`Primer camión en andén: ${flotaCamiones[0]}`); // "VOLVO-01"
console.log(`Último camión asignado (con .at): ${flotaCamiones.at(-1)}`); // "MERCEDES-03"

// --- Modificación ---
flotaCamiones[1] = "HINO-04"; // Reemplazamos la unidad de la posición 1
console.log("Flota actualizada:", flotaCamiones);

const colaDeCarga = ["Camión_A", "Camión_B", "Camión_C"];

// push: Añade camiones al final de la cola de espera
colaDeCarga.push("Camión_D");
console.log("Camión llegó al patio de espera:", colaDeCarga);

// pop: El último camión de la fila se retira por cancelación
const cancelado = colaDeCarga.pop();
console.log(`❌ Camión retirado: ${cancelado}. Cola restante:`, colaDeCarga);

// unshift: Ingresa una unidad de emergencia (prioridad) al inicio de la fila
colaDeCarga.unshift("🚨 AMBULANCIA_LOGÍSTICA");
console.log("Prioridad añadida al inicio:", colaDeCarga);

// shift: El primer camión de la fila entra a la bodega a cargar
const ingresaABodega = colaDeCarga.shift();
console.log(`📦 Ingresando a andén de carga: ${ingresaABodega}`);

const escalaRuta = ["Quito", "Latacunga", "Riobamba", "Guayaquil"];

// splice(inicio, cuantos_eliminar, elementos_a_insertar)
// Inserta "Ambato" en la posición 2 sin borrar ninguna ciudad
escalaRuta.splice(2, 0, "Ambato");
console.log("🗺️ Ruta recalculada con parada intermedia:", escalaRuta);

// Elimina las escalas de Latacunga y Ambato (posiciones 1 y 2) por mal clima
const escalasCanceladas = escalaRuta.splice(1, 2);
console.log("⚠️ Paradas suspendidas de emergencia:", escalasCanceladas);
console.log("🗺️ Nueva ruta directa:", escalaRuta);

const codigosPaquetes = ["PK-10", "PK-20", "PK-30", "PK-20", "PK-40"];

// indexOf: Encuentra la primera posición del paquete
console.log("Ubicación del primer PK-20:", codigosPaquetes.indexOf("PK-20")); // 1

// includes: Verifica rápidamente si el paquete fue cargado
const tienePaqueteCritico = codigosPaquetes.includes("PK-30");
console.log(`¿El camión lleva la guía PK-30?: ${tienePaqueteCritico ? "SÍ ✅" : "NO ❌"}`);

const envios = [
  { id: "ENV-01", pesoKg: 120, destino: "Quito",     activo: true  },
  { id: "ENV-02", pesoKg: 15,  destino: "Guayaquil", activo: true  },
  { id: "ENV-03", pesoKg: 450, destino: "Cuenca",    activo: false },
  { id: "ENV-04", pesoKg: 85,  destino: "Quito",     activo: true  }
];

// --- MAP: Extraer información o reestructurar objetos ---
// 1. Extraer solo los identificadores de los envíos
const codigosUnicos = envios.map(e => e.id);
console.log("\nLista de Guías:", codigosUnicos);

// 2. Transformar la estructura: Agregar bandera de "Carga Pesada"
const manifiestoEstructurado = envios.map(e => ({
  guia: e.id,
  esCargaPesada: e.pesoKg > 100
}));
console.log("Análisis de tonelaje:", manifiestoEstructurado);

// --- FILTER: Aislar elementos específicos bajo una condición ---
// Filtrar solo los envíos que van a Quito y que están en estado activo
const entregasQuitoActivas = envios.filter(e => e.destino === "Quito" && e.activo);
console.log("Entregas prioritarias Quito:", entregasQuitoActivas);

