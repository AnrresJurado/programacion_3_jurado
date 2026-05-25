// solucion-con-tipos.ts

function calcularPesoTotal(cargaA: number, cargaB: number): number {
  return cargaA + cargaB;
}

console.log(calcularPesoTotal(5, 3)); // 8 ✅
// calcularPesoTotal("5", 3);        // ❌ Error: 'string' no es asignable a 'number'
// calcularPesoTotal(5);             // ❌ Error: falta el argumento 'cargaB'

// funciones-basicas.ts

function calcularFlete(distancia: number, precioKm: number): number {
  return distancia * precioKm;
}

function asignarRuta(unidadId: string): string {
  return `Unidad ${unidadId} despachada con éxito.`;
}

function verificarCapacidad(pesoActual: number, limite: number): boolean {
  return pesoActual <= limite;
}

function registrarLogAlerta(mensaje: string): void {
  console.log(`[ALERTA GENERAL] ${mensaje}`);
}

console.log(calcularFlete(40, 7));            // 280
console.log(asignarRuta("VOLVO-01"));         // Unidad VOLVO-01 despachada con éxito.
console.log(verificarCapacidad(12, 15));      // true
registrarLogAlerta("Falla mecánica en vía."); // [ALERTA GENERAL] Falla mecánica en vía.

// funciones-con-if.ts

function clasificarCarga(toneladas: number): string {
  if (toneladas < 0 || toneladas > 50) {
    return "Carga fuera de rango operativo";
  }

  if (toneladas >= 30) {
    return "Carga Pesada (Tráiler)";
  } else if (toneladas >= 15) {
    return "Carga Mediana (Camión)";
  } else if (toneladas >= 3) {
    return "Carga Ligera (Furgón)";
  } else {
    return "Paquetería (Van)";
  }
}

const cargamentos: number[] = [45, 22, 8, 1.5, 60, -2];
for (const peso of cargamentos) {
  console.log(`Peso ${peso}T: ${clasificarCarga(peso)}`);
}

function validarEstructuraPlaca(placa: string): string {
  if (placa.length !== 7) {
    return "❌ Longitud incorrecta (Deben ser exactamente 7 caracteres)";
  }
  if (!/[A-Z]{3}/.test(placa.slice(0, 3))) {
    return "❌ Los 3 primeros caracteres deben ser letras mayúsculas";
  }
  if (!/[0-9]{4}/.test(placa.slice(3))) {
    return "❌ Los 4 últimos caracteres deben ser números";
  }
  return "✅ Formato de placa logística válido";
}

const placasAValidar: string[] = ["ABC", "ABC12345", "abC1234", "PBA2026"];
for (const p of placasAValidar) {
  console.log(`"${p}" → ${validarEstructuraPlaca(p)}`);
}

// parametros-por-defecto.ts

function calcularTarifaEspecial(
  costoBase: number,
  descuentoRuta: number = 10,
  incluirPeajes: boolean = true
): number {
  let costoFinal = costoBase * (1 - descuentoRuta / 100);

  if (incluirPeajes) {
    costoFinal += 25.50; 
  }

  return costoFinal;
}

const tarifaBase = 500;
console.log(calcularTarifaEspecial(tarifaBase));              // 475.5 (10% desc + peajes)
console.log(calcularTarifaEspecial(tarifaBase, 20));          // 425.5 (20% desc + peajes)
console.log(calcularTarifaEspecial(tarifaBase, 20, false));   // 400   (20% desc, sin peajes)

function emitirSeñalesGps(idVehiculo: string, repeticiones: number = 3): void {
  for (let i = 1; i <= repeticiones; i++) {
    console.log(`[Ping ${i}/${repeticiones}] Enviando coordenadas de ${idVehiculo}...`);
  }
}

emitirSeñalesGps("TRUCK-A");
emitirSeñalesGps("TRUCK-B", 5);