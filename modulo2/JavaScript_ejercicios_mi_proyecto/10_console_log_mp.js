// console.log 
console.log("Despacho de unidad iniciado")
console.log("ID de Unidad:", 105)
console.log("Ruta:", "Quito", "Guayaquil", "Cuenca")

// console.error
console.error("ERROR CRÍTICO: Fallo en la conexión del GPS - Unidad TRK-99");

// console.warn 
console.warn("ADVERTENCIA: El nivel de combustible es inferior al 15% en el Bus-04");

//console.table
console.table([{nombre:"Camion 101", ruta:"Norte", estado:"En camino"}, {nombre:"Camion 102", ruta:"Sur", estado:"Mantenimiento"}]);

//console.log con formato 
const peso = 52;
const unidad = "105";
console.log(`El vehículo ${unidad} ha llegado a su destino con un peso de ${peso} toneladas.`)