// --- Valores TRUTHY (Casos que pueden sorprender) ---
// "false"  -> TRUTHY — Es un string no vacío (ej. ID de ruta llamado "false")
// "0"      -> TRUTHY — Es un string (ej. Código de zona "0")
// []       -> TRUTHY — Un contenedor o array de entregas vacío
// {}       -> TRUTHY — Un objeto de camión vacío sin propiedades
// -1       -> TRUTHY — Temperatura de un camión refrigerado (-1°C)       // TRUTHY — Temperatura de un camión refrigerado (-1°C)

// Verificación explícita con Boolean()
console.log(Boolean(0));          // false — Sin paquetes
console.log(Boolean(""));         // false — Sin placa registrada
console.log(Boolean("false"));    // true  — El texto "false" cuenta como dato válido
console.log(Boolean([]));         // true  — La lista de paradas (aunque esté vacía) existe

const tieneDocumentos = true;
const tieneCombustible = false;

console.log(tieneDocumentos && tieneCombustible); // false (El camión no puede salir)

// --- Ejemplos de Cortocircuito ---
console.log(15 && 30);        // 30   ← Ambos truthy (km inicial y final), devuelve el último
console.log(0 && 50);         // 0    ← 0 es falsy (sin combustible), se detiene y devuelve 0
console.log("" && "Ruta A");  // ""   ← El string vacío es falsy, se detiene

// --- Uso Práctico 1: Ejecución condicional (Disparar alertas) ---
const camion = { modelo: "Volvo", requiereMantenimiento: true };

camion.requiereMantenimiento && console.log("⚠️ Alerta: Enviar camión al taller inmediatamente");
// Equivale a: if (camion.requiereMantenimiento) { console.log(...) }

// --- Uso Práctico 2: Acceso seguro a datos del cliente/envío ---
// Evita que el sistema rompa si el envío no tiene registrada una dirección
const envio = { id: 4055 }; 
const ciudadEntrega = envio.direccion && envio.direccion.ciudad; 
// Como envio.direccion es undefined (falsy), ciudadEntrega se vuelve undefined sin lanzar un error de código

const rutaPrincipalAbierta = false;
const rutaAlternativaAbierta = true;

console.log(rutaPrincipalAbierta || rutaAlternativaAbierta); // true (El viaje puede continuar)

// --- Ejemplos de Cortocircuito ---
console.log(10 || 20);            // 10          ← 10 es truthy, se detiene inmediatamente
console.log(0 || 45);             // 45          ← 0 es falsy, avanza y devuelve 45
console.log("" || "Asignación");  // "Asignación"← "" es falsy, devuelve el string válido

// --- Uso Práctico: Asignación de valores por defecto (Logística) ---
function registrarViaje(chofer) {
  // Si chofer viene vacío ("") o null, se asigna "Chofer de Guardia" por defecto
  const choferAsignado = chofer || "Chofer de Guardia";
  console.log(`Viaje preparado con: ${choferAsignado}`);
}

registrarViaje("Carlos Mendoza"); // Viaje preparado con: Carlos Mendoza
registrarViaje("");                // Viaje preparado con: Chofer de Guardia (string vacío es falsy)
registrarViaje(null);              // Viaje preparado con: Chofer de Guardia

// --- Negación simple (!) ---
console.log(!true);         // false
console.log(!0);            // true  ← 0 es falsy (no hay carga), su negación es true (¿está vacío? true)
console.log(!"Ruta Norte"); // false ← El string tiene texto (es truthy), su negación es false

// --- Doble Negación (!!) - Comprobación rápida de existencia de datos ---
const manifiestoCarga = "Cajas de insumos médicos";
const manifiestoVacio = "";

console.log(!!manifiestoCarga); // true  ← Forma idiomática de confirmar que el manifiesto SI tiene contenido
console.log(!!manifiestoVacio); // false ← Confirma que el manifiesto NO tiene contenido (está vacío)
console.log(!![]);              // true  ← Un array de paradas vacío sigue siendo una ruta válida para el sistema