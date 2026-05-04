// Numeros 
const capacidadPasajeros = 40;
const tarifaEnvio = 12.5;
const kilometraje = 1_500_000;
const retrasoPorUnidad = -5;

// Strings
var identificacionVehiculo = "Unidad 01-A";
const ciudadOrigen = "Quito";
const ciudadDestino = "Guamote";
const template = (`La ciudad de origen es ${ciudadOrigen} y el destino es la ciudad de ${ciudadDestino}`);

// Boleanos
const mantenimientoVehiculo = true;
const estaEnDespacho = false;

// Null y Undefined
const cargaAsignada = null;
let gps;

// Symbol
const contratoId = Symbol("id");

// BigInt 
const numeroMotor = 8888888888888888888n;

// typeof 
console.log(typeof 42);           // "number"
console.log(typeof "hola");       // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← bug histórico de JS, null no es un objeto
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"