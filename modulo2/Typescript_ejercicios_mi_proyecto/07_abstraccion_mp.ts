// abstraccion.ts

class ControlCombustible {
  // Atributos privados: Ningún elemento externo puede alterarlos directamente
  private galonesDisponibles: number;
  private registroCargas: string[] = [];

  constructor(placaUnidad: string, capacidadInicial: number) {
    this.galonesDisponibles = capacidadInicial;
    this.registroCargas.push(`Tanque inicializado con ${capacidadInicial} galones.`);
    console.log(`Sistema de combustible para unidad [${placaUnidad}] activado.`);
  }

  // Interfaz pública: Lo que el despachador de la terminal puede usar
  abastecer(cantidad: number): void {
    this.galonesDisponibles += cantidad;
    this.registrarAccion(`Abastecimiento en estación: +${cantidad} gal.`);
    console.log(`  ⛽ Cargados ${cantidad} galones. En tanque: ${this.galonesDisponibles} gal.`);
  }

  consumirRuta(cantidad: number): void {
    if (cantidad > this.galonesDisponibles) {
      console.log("  🚨 Alerta: El viaje requiere más combustible del disponible en el tanque.");
      return;
    }
    this.galonesDisponibles -= cantidad;
    this.registrarAccion(`Consumo en ruta: -${cantidad} gal.`);
    console.log(`  🚛 Kilometraje avanzado. Restan: ${this.galonesDisponibles} gal.`);
  }

  obtenerNivelTanque(): number {
    return this.galonesDisponibles;
  }

  imprimirBitacora(): void {
    console.log("\n📋 Historial de Consumo Combustible:");
    this.registroCargas.forEach(log => console.log(`  ${log}`));
  }

  // Método privado: Lógica oculta del sistema que el usuario no necesita ver ni invocar
  private registrarAccion(mensaje: string): void {
    this.registroCargas.push(mensaje);
  }
}

console.log("=== DESPACHO DE COMBUSTIBLE UTE TRUCK ===\n");
const controlVolvo = new ControlCombustible("PBA-2026", 120);

controlVolvo.consumirRuta(40);
controlVolvo.abastecer(60);
controlVolvo.consumirRuta(200); // Intento fallido por falta de capacidad

console.log(`\nCombustible actual en tanque: ${controlVolvo.obtenerNivelTanque()} gal.`);
controlVolvo.imprimirBitacora();

// Seguridad del encapsulamiento:
// controlVolvo.galonesDisponibles = 5000; // ❌ Error: 'galonesDisponibles' es privado y está protegido.