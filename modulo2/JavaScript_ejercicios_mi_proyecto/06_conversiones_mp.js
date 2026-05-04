// Conversión explicta 
const idUnidad = "105";
const idUnidadNumber = Number(idUnidad);
const pesoToneladas = parseInt("15.8", 10); 
const precioCombustible = parseFloat("2.35");
const placa = String(405);
const asientosDisponibles = Boolean(0);

console.log(idUnidadNumber); //105
console.log(pesoToneladas);  //15
console.log(precioCombustible) //2.35
console.log(placa);  //"405"
console.log(asientosDisponibles) //false

// Conversión Implicita 
console.log("10" + 2);
console.log("100" - 3);
console.log("10" * "5");
console.log(true + 2);
console.log(false + 2)

// Number()
console.log(Number("ATM"));
console.log(Number(""));
console.log(Number(null));
console.log(Number(undefined));

// isNaN 
console.log(isNaN(Number("Camiones HINO")));
console.log(isNaN(69));