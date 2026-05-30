// herencia.ts

// Clase Base (Padre)
class VehiculoFlota {
  // 'protected' permite que las clases hijas accedan a estas propiedades, pero impide el acceso externo
  constructor(
    protected placa: string,
    protected capacidadToneladas: number
  ) {}

  iniciarRuta(): void {
    console.log(`  🚛 Unidad [${this.placa}] reporta inicio de despacho.`);
  }

  finalizarRuta(): void {
    console.log(`  🏁 Unidad [${this.placa}] llegó a la central de destino.`);
  }

  obtenerDetalles(): string {
    return `Placa: ${this.placa} | Capacidad: ${this.capacidadToneladas}T`;
  }
}

// Clase Hija — Hereda de VehiculoFlota
class CamionRefrigerado extends VehiculoFlota {
  private temperaturaObjetivo: number;

  constructor(placa: string, capacidad: number, temperatura: number) {
    super(placa, capacidad); // Llama obligatoriamente al constructor de VehiculoFlota
    this.temperaturaObjetivo = temperatura;
  }

  // Método propio y único de la clase hija
  monitorearTermostato(): void {
    console.log(`  ❄️ Sensor Térmico [${this.placa}]: Manteniendo carga a ${this.temperaturaObjetivo}°C.`);
  }

  // Polimorfismo / Sobrescritura: Reutiliza y expande el método del padre
  obtenerDetalles(): string {
    return `${super.obtenerDetalles()} — Tipo: [Carga Fría] Termostato: ${this.temperaturaObjetivo}°C`;
  }
}

// Clase Hija — Hereda de VehiculoFlota
class CisternaCombustible extends VehiculoFlota {
  private tipoLiquido: string;

  constructor(placa: string, capacidad: number, tipoLiquido: string) {
    super(placa, capacidad);
    this.tipoLiquido = tipoLiquido;
  }

  verificarPresionValvula(): void {
    console.log(`  ⚠️ Presión de válvulas en regla para transporte de ${this.tipoLiquido}.`);
  }

  obtenerDetalles(): string {
    return `${super.obtenerDetalles()} — Tipo: [Cisterna Peligrosa] Fluido: ${this.tipoLiquido}`;
  }
}

console.log("=== SISTEMA DE CONTROL DE SUB-FLOTAS ===\n");

const trailerFrio = new CamionRefrigerado("PBA-2026", 18, 4);
const camionTanque = new CisternaCombustible("GBA-4500", 25, "Diésel Premium");

// Invocación de métodos heredados de la clase padre
trailerFrio.iniciarRuta();
camionTanque.iniciarRuta();
trailerFrio.finalizarRuta();

// Invocación de métodos exclusivos de cada clase hija
trailerFrio.monitorearTermostato();
camionTanque.verificarPresionValvula();

console.log(`\nFicha Unidad 1:  ${trailerFrio.obtenerDetalles()}`);
console.log(`Ficha Unidad 2:  ${camionTanque.obtenerDetalles()}`);

// Operador instanceof: Verificación de herencia y tipos en tiempo de ejecución
console.log(`\n¿trailerFrio es CamionRefrigerado? : ${trailerFrio instanceof CamionRefrigerado}`); // true
console.log(`¿trailerFrio es VehiculoFlota?     : ${trailerFrio instanceof VehiculoFlota}`);     // true (Por herencia)
console.log(`¿trailerFrio es CisternaCombustible?: ${trailerFrio instanceof CisternaCombustible}`);  // false