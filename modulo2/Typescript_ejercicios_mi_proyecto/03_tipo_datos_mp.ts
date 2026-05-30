// tipos-string.ts
const choferAsignado: string  = "Ana García";
const alertaRuta:     string  = `🚨 Atención: Unidad asignada a ${choferAsignado}`;
const bitacoraVacia:  string  = "";
const tipoCombustible: string = 'Diésel Premium';

console.log("--- Monitoreo de Strings ---");
console.log(alertaRuta);
console.log(`Longitud de bitácora vacía: ${bitacoraVacia.length}`); // 0

// Métodos de manipulación de texto (Idénticos a JS pero protegidos por tipo)
console.log(choferAsignado.toUpperCase());      // "ANA GARCÍA"
console.log(choferAsignado.toLowerCase());      // "ana garcía"
console.log(choferAsignado.includes("García")); // true
console.log(choferAsignado.split(" "));         // ["Ana", "García"]

// tipos-number.ts
const capacidadCamionKg: number = 42000;
const galonesConsumidos: number = 3.14;
const saldoCajaChicaDéficit: number = -100;
const kilometrajeTotal:  number = 1_000_000;  // El '_' facilita la lectura visual en el código de la flota
const consumoPromedio:   number = 10 / 3;

console.log("\n--- Telemetría Numérica ---");
console.log(`Odómetro: ${kilometrajeTotal} km`);
console.log(`Consumo Promedio: ${consumoPromedio.toFixed(2)} gal/km`); // "3.33"

// Operaciones matemáticas de ruta
console.log(`Suma de carga:     ${10 + 3}`);   // 13
console.log(`Resta de saldo:    ${10 - 3}`);   // 7
console.log(`Multiplicador Km:  ${10 * 3}`);   // 30
console.log(`División de peso:  ${10 / 3}`);   // 3.333...
console.log(`Resto en andenes:  ${10 % 3}`);   // 1  (Residuo)
console.log(`Factor de fricción: ${2 ** 10}`); // 1024

// tipos-boolean.ts
const revisionMecanicaOk: boolean = true;
const tienePermisoAduana: boolean = false;

console.log("\n--- Validaciones Lógicas ---");
console.log(`¿Camión apto para salir?: ${revisionMecanicaOk && !tienePermisoAduana}`); // false (Falta aduana)
console.log(`¿Requiere atención alternativa?: ${revisionMecanicaOk || tienePermisoAduana}`); // true

// Origen mediante comparaciones operativas
const velocidadRegistrada = 95;
const esExcesoVelocidad: boolean = velocidadRegistrada >= 90;
console.log(`¿Infracción por velocidad?: ${esExcesoVelocidad ? "SÍ 🚨" : "NO ✅"}`);

// tipo-any.ts (Trampa de desarrollo)
let payloadInseguro: any = "Paquete A1";
payloadInseguro = 102;      // ✅ TypeScript no se queja, pero perdiste el rastro del dato
payloadInseguro = true;

// tipo-unknown.ts (La alternativa profesional para telemetría externa)
function procesarSensorSatelital(lecturaAnonima: unknown): string {
  // TypeScript te obliga a pasar un filtro de seguridad antes de usar el dato

  if (typeof lecturaAnonima === "string") {
    return `Código de Ruta detectado: ${lecturaAnonima.toUpperCase()}`;
  }

  if (typeof lecturaAnonima === "number") {
    return `Coordenada numérica procesada: ${lecturaAnonima.toFixed(4)}`;
  }

  if (typeof lecturaAnonima === "boolean") {
    return lecturaAnonima ? "🛰️ GPS Activo" : "🛰️ GPS Inactivo";
  }

  return "⚠️ Alerta: Señal corrupta o tipo de dato desconocido";
}

console.log("\n--- Procesamiento de Datos Desconocidos (unknown) ---");
console.log(procesarSensorSatelital("Ruta-Quito")); // Procesa string
console.log(procesarSensorSatelital(-0.123456));   // Procesa number
console.log(procesarSensorSatelital(false));       // Procesa boolean

// tipo-void.ts

// Esta función solo escribe en consola, no tiene la palabra clave 'return'
function registrarLogTerminal(idCamion: string): void {
  console.log(`[LOG CENTRAL]: Unidad ${idCamion} cruzó el peaje.`);
}

// ¡CORREGIDO!: Cambiado el nombre de 'resultado' a 'doblePeso' para evitar el choque de identificadores
function duplicarCargaMaxima(toneladasBase: number): number {
  return toneladasBase * 2;
}

console.log("\n--- Control de Retornos (void vs number) ---");
registrarLogTerminal("PBA-2026"); // Imprime el log y retorna implícitamente 'undefined'

const doblePeso: number = duplicarCargaMaxima(12);
console.log(`Carga duplicada calculada: ${doblePeso}T`); // 24