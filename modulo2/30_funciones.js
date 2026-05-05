//funcion declarada
function saludo (){
    console.log("Hola, mundo!");
}

saludo(); // "Hola, mundo!"

//funcion expresada
const saludar_Hola = function(){
    console.log("Hola con funcion expresada");
}

saludar_Hola(); // "Hola con funcion expresada"

//funcion flecha
const saludar_Flecha = () => {
    console.log("Hola con funcion flecha");
}
saludar_Flecha(); // "Hola con funcion flecha"

//funcion anonima
setTimeout(function() {
    console.log("Ejecutando función anónima después de 1 segundos...");
}, 1000);

const despedida = function(nombre){
    return `Adiós, ${nombre}!`;
}

//Funcion con parametros
function saludarConParametros(nombre){
    console.log("Hola"+nombre)
}
saludarConParametros("Pedro")

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log(saludar("Ana"));   // "Hola, Ana!"
console.log(saludar("Luis"));  // "Hola, Luis!"

//Retornando valor
function sumar(a,b){
    return a+b;
}
resultado=sumar(45,5);
console.log(resultado);


// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  console.log(saludar("Ana"));   // "Hola, Ana!"
  console.log(saludar("Luis"));  // "Hola, Luis!"