// polimorfismo.ts

// Clase abstracta — Funciona como un molde base y contrato arquitectónico. No se puede usar con 'new'.
abstract class TarifaViaje {
  constructor(protected IDRuta: string, protected distanciaKm: number) {}

  // Método abstracto — Cada tipo de transporte OBLIGATORIAMENTE debe calcular su costo a su manera
  abstract calcularFlete(): number;
  abstract calcularTiempoEstimado(): number;

  // Método concreto — Lógica compartida e idéntica para todas las subclases
  generarManifiestoFinanciero(): string {
    return `[Ruta: ${this.IDRuta}] Empresa: ${this.constructor.name} | ` +
           `Flete: $${this.calcularFlete().toFixed(2)} | Tiempo: ${this.calcularTiempoEstimado().toFixed(1)} hrs`;
  }
}

// Subclase 1: Implementación específica para Carga Troncal (Tráiler)
class TransportePesado extends TarifaViaje {
  constructor(IDRuta: string, distanciaKm: number, private pesoToneladas: number) {
    super(IDRuta, distanciaKm);
  }

  calcularFlete(): number { 
    // Tarifa base por distancia + un recargo por tonelada transportada
    return (this.distanciaKm * 2.50) + (this.pesoToneladas * 15); 
  }
  
  calcularTiempoEstimado(): number { 
    return this.distanciaKm / 60; // Velocidad promedio estimada de 60 km/h
  }
}

// Subclase 2: Implementación específica para Distribución Urbana (Van/Furgón)
class EntregaUltimaMilla extends TarifaViaje {
  constructor(IDRuta: string, distanciaKm: number, private totalParadas: number) {
    super(IDRuta, distanciaKm);
  }

  calcularFlete(): number { 
    // Tarifa menor por km + cobro fijo por cada punto de entrega/parada
    return (this.distanciaKm * 1.20) + (this.totalParadas * 5); 
  }
  
  calcularTiempoEstimado(): number { 
    // Suma tiempo de conducción (80 km/h) + 15 minutos de descarga por parada
    return (this.distanciaKm / 80) + (this.totalParadas * 0.25); 
  }
}

// Subclase 3: Implementación específica para Envíos Express Terrestres (Motocicleta/Courier)
class MensajeriaExpress extends TarifaViaje {
  constructor(IDRuta: string, distanciaKm: number) {
    super(IDRuta, distanciaKm);
  }

  calcularFlete(): number { 
    return this.distanciaKm * 0.80 + 3.50; // Tarifa fija de arranque mas km
  }

  calcularTiempoEstimado(): number { 
    return this.distanciaKm / 50; 
  }
}

console.log("=== DESPACHO POLIMÓRFICO DE OPERACIONES ===\n");

// Polimorfismo en acción: Un array capaz de almacenar múltiples tipos de transporte bajo la misma clase base
const despachoDiario: TarifaViaje[] = [
  new TransportePesado("UIO-GYE-01", 420, 18),
  new EntregaUltimaMilla("DIST-NORTE", 85, 12),
  new MensajeriaExpress("COURIER-URBANO", 15),
  new TransportePesado("UIO-CUE-02", 460, 24)
];

// El bucle interactúa con las instancias de forma transparente mediante el método unificado
for (const despacho of despachoDiario) {
  console.log(`  ${despacho.generarManifiestoFinanciero()}`);
}

// Consolidación analítica: reduce aprovecha el polimorfismo para sumar costos sin importar el tipo de vehículo
const costoOperativoTotal = despachoDiario.reduce((total, d) => total + d.calcularFlete(), 0);
console.log(`\n💰 Presupuesto Total de Despacho Diario: $${costoOperativoTotal.toFixed(2)}`);

// Restricción de seguridad abstracta:
// const viajeGenerico = new TarifaViaje("X-001", 100); // ❌ Error: No se pueden crear instancias de una clase abstracta.