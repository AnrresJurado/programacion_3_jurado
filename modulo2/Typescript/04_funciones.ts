// problema-sin-tipos.ts

// JavaScript — acepta cualquier cosa sin avisar
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3));       // 8  ✅
console.log(sumar("5", 3));     // "53"  😕 concatenó en lugar de sumar
console.log(sumar(5));          // NaN  😕 b es undefined

// solucion-con-tipos.ts

// TypeScript — avisa antes de ejecutar
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(5, 3));     // 8  ✅
// sumar("5", 3)  → ❌ Error: 'string' no es 'number'
// sumar(5)       → ❌ Error: falta el argumento 'b'

// funciones-basicas.ts

// Recibe dos números, devuelve número
function multiplicar(a: number, b: number): number {
  return a * b;
}

// Recibe un string, devuelve string
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

// Recibe un número, devuelve boolean
function esPar(n: number): boolean {
  return n % 2 === 0;
}

// No devuelve nada — tipo void
function mostrar(mensaje: string): void {
  console.log(`[INFO] ${mensaje}`);
}

console.log(multiplicar(4, 7));    // 28
console.log(saludar("Ana"));       // Hola, Ana!
console.log(esPar(10));            // true
console.log(esPar(7));             // false
mostrar("Todo listo");             // [INFO] Todo listo

// funciones-con-if.ts

// Función que usa if/else para decidir qué devolver
function clasificarNota(nota: number): string {
  if (nota < 0 || nota > 10) {
    return "Nota fuera de rango";
  }

  if (nota >= 9) {
    return "Sobresaliente";
  } else if (nota >= 7) {
    return "Notable";
  } else if (nota >= 5) {
    return "Aprobado";
  } else {
    return "Suspenso";
  }
}

const notas: number[] = [10, 8.5, 6, 4.2, 11, -1];
for (const nota of notas) {
  console.log(`Nota ${nota}: ${clasificarNota(nota)}`);
}
// Nota 10:   Sobresaliente
// Nota 8.5:  Notable
// Nota 6:    Aprobado
// Nota 4.2:  Suspenso
// Nota 11:   Nota fuera de rango
// Nota -1:   Nota fuera de rango

// Función que valida datos con if y devuelve un mensaje
function validarPassword(password: string): string {
  if (password.length < 8) {
    return "❌ Muy corta (mínimo 8 caracteres)";
  }
  if (!/[A-Z]/.test(password)) {
    return "❌ Debe tener al menos una mayúscula";
  }
  if (!/[0-9]/.test(password)) {
    return "❌ Debe tener al menos un número";
  }
  return "✅ Contraseña válida";
}

const passwords: string[] = ["abc", "abcdefgh", "Abcdefgh", "Abcdefg1"];
for (const p of passwords) {
  console.log(`"${p}" → ${validarPassword(p)}`);
}

// parametros-por-defecto.ts

// Si no se pasa el argumento, usa el valor por defecto
// El tipo ya está garantizado — no necesitas verificar undefined
function calcularDescuento(
  precio: number,
  porcentaje: number = 10,
  aplicarIVA: boolean = true
): number {
  let precioFinal = precio * (1 - porcentaje / 100);

  if (aplicarIVA) {
    precioFinal *= 1.21;
  }

  return precioFinal;
}

const precio = 100;
console.log(calcularDescuento(precio));               // 108.9  (10% desc + IVA)
console.log(calcularDescuento(precio, 20));           // 96.8   (20% desc + IVA)
console.log(calcularDescuento(precio, 20, false));    // 80     (20% desc, sin IVA)

// Función con bucle y valor por defecto
function repetirMensaje(mensaje: string, veces: number = 3): void {
  for (let i = 1; i <= veces; i++) {
    console.log(`[${i}/${veces}] ${mensaje}`);
  }
}

repetirMensaje("Hola");           // lo repite 3 veces
repetirMensaje("Urgente", 5);     // lo repite 5 veces

// rest-con-flujo.ts

// ...nums captura todos los argumentos en un array
function calcularEstadisticas(...nums: number[]): {
  min:   number;
  max:   number;
  suma:  number;
  media: number;
} {
  if (nums.length === 0) {
    return { min: 0, max: 0, suma: 0, media: 0 };
  }

  let min  = nums[0];
  let max  = nums[0];
  let suma = 0;

  for (const n of nums) {
    if (n < min) min = n;
    if (n > max) max = n;
    suma += n;
  }

  return {
    min,
    max,
    suma,
    media: suma / nums.length
  };
}

const stats = calcularEstadisticas(8, 3, 15, 6, 12, 1, 9);
console.log(`Mínimo: ${stats.min}`);
console.log(`Máximo: ${stats.max}`);
console.log(`Suma:   ${stats.suma}`);
console.log(`Media:  ${stats.media.toFixed(2)}`);

// Función que filtra con rest y condición
function soloPositivos(...nums: number[]): number[] {
  const resultado: number[] = [];
  for (const n of nums) {
    if (n > 0) resultado.push(n);
  }
  return resultado;
}

console.log(soloPositivos(3, -1, 5, -2, 0, 8, -4));  // [3, 5, 8]