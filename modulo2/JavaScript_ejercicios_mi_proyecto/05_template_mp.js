const nombreEmpleado = "Manuelito";
const apellidoEmpleado = "Vaca";
const edadEmpleado = 50;

// Variable Simple
console.log(`Hola, ${nombreEmpleado} ${apellidoEmpleado}`);

// Expresion dentro del ${}
console.log(`Nombre del empleado: ${nombreEmpleado.toUpperCase()} ${apellidoEmpleado.toUpperCase()}`);
console.log(`El año que viene, el emplado tendra ${edadEmpleado + 1} años`);
console.log(`El empleado es mayor de edad? ${edadEmpleado >= 18 ? "Si":"No"}`);

// String multilinea
const identificacionEmpleado = `
  Empleado: ${nombreEmpleado} ${apellidoEmpleado}
  Edad: ${edadEmpleado}
  Tiene acceso: ${edadEmpleado >= 18 ? "Permitido":"Denegado"}
  `;

  console.log(identificacionEmpleado);