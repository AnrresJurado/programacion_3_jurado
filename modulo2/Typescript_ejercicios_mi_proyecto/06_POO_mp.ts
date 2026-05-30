// primera-clase.ts

class Camion {
  // Atributos (Propiedades de la unidad)
  placa: string;
  capacidadToneladas: number;
  kilometraje: number;

  // Constructor — Inicializa el objeto al usar 'new'
  constructor(placa: string, capacidad: number, kmInicial: number) {
    this.placa = placa;
    this.capacidadToneladas = capacidad;
    this.kilometraje = kmInicial;
  }

  // Métodos (Acciones de la unidad)
  obtenerFicha(): string {
    return `Unidad Placa: ${this.placa} | Capacidad: ${this.capacidadToneladas}T | Odómetro: ${this.kilometraje}km.`;
  }

  registrarViaje(kmRecorridos: number): void {
    this.kilometraje += kmRecorridos;
    console.log(`🚚 Viaje registrado para ${this.placa}. +${kmRecorridos}km añadidos.`);
  }
}

// Crear instancias (objetos reales en memoria)
const camionVolvo  = new Camion("PBA-2026", 18, 120000);
const camionScania = new Camion("GBA-4500", 24, 85000);

console.log(camionVolvo.obtenerFicha());
console.log(camionScania.obtenerFicha());

// Modificación del estado interno mediante su método
camionVolvo.registrarViaje(450);
console.log(camionVolvo.obtenerFicha());

