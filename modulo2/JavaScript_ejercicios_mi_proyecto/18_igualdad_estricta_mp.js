const idCamionNumero = 105;
const idCamionTexto = "105";

console.log(idCamionNumero === 105);        // true 
console.log(idCamionNumero === idCamionTexto); // false 

console.log(null === undefined);            // false

console.log(idCamionNumero == idCamionTexto); // true  
const pasajeros = 0;
const viajeCancelado = false;
console.log(pasajeros == viajeCancelado);     // true 
console.log(null == undefined);               // true

const rutaAsignada = "RUTA-NORTE";
const rutaAlternativa = 202; // Código numérico de ruta

// Es verdadero porque uno es texto y el otro es número (Diferente tipo)
console.log(rutaAsignada !== 202); // true 

// Es falso porque son exactamente iguales
console.log(rutaAsignada !== "RUTA-NORTE"); // false