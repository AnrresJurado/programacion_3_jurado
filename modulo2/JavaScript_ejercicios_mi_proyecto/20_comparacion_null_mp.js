const proveedorExterno = null; // No aplica (es un camión propio)
const choferAsignado = undefined; // Falta asignarlo en el futuro

console.log(proveedorExterno === null);        // true  — Confirmado: es camión propio
console.log(choferAsignado === undefined);    // true  — Confirmado: viaje sin chofer
console.log(proveedorExterno === choferAsignado); // false — Son conceptos logísticos diferentes

// Da true, lo cual puede camuflar si un camión es propio (null) o si falta asignarle chofer (undefined)
console.log(proveedorExterno == choferAsignado);    // true  ← ¡Evitar! Mezcla ambos estados

// Una ruta con 0 kilómetros no es lo mismo que una ruta que no existe (null)
const kilometrosRuta = null; 
console.log(kilometrosRuta == 0);            // false ← Correcto: null no se convierte a 0 con ==

const viajeActivo = null;
console.log(viajeActivo == false);        // false ← Correcto: null no es false

const pesoCarga = null; // No se ha registrado el peso aún

console.log(pesoCarga > 0);    // false — Lógico: null no es mayor a 0
console.log(pesoCarga == 0);   // false — Lógico: null no es igual a 0

// El sistema podría aprobar un viaje pensando que el peso es válido.
console.log(pesoCarga >= 0);   // true  ← ¡Inconsistencia! JS convierte null a 0 aquí