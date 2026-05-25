// encapsulamiento.ts

class Conductor {
  // Atributos privados con guion bajo (_) por convención para getters/setters
  private _nombre:   string;
  private _viaticos: number;
  private _licencia: string;

  constructor(nombre: string, viaticos: number, licencia: string) {
    this._nombre   = nombre;
    this._viaticos = viaticos;
    this._licencia = licencia;
  }

  // Getters — Permiten LEER los datos de forma limpia externa
  get nombre():   string { return this._nombre; }
  get viaticos(): number { return this._viaticos; }
  get licencia(): string { return this._licencia; }

  // Setters — Permiten ESCRIBIR y MODIFICAR aplicando reglas de negocio estrictas
  set nombre(valor: string) {
    if (valor.trim().length < 3) {
      throw new Error("El nombre del conductor debe tener al menos 3 caracteres.");
    }
    this._nombre = valor.trim();
  }

  set viaticos(valor: number) {
    if (valor < 0 || valor > 500) {
      throw new Error("Monto de viáticos fuera de rango operativo (0 - $500).");
    }
    this._viaticos = valor;
  }

  set licencia(valor: string) {
    if (valor.length < 7) {
      throw new Error("Código de licencia estatal inválido.");
    }
    this._licencia = valor.toUpperCase();
  }

  obtenerManifiesto(): string {
    return `Conductor: ${this._nombre} | Viáticos asignados: $${this._viaticos} | Licencia: ${this._licencia}`;
  }
}

console.log("=== SISTEMA DE REGISTRO DE CHOFERES ===\n");
const chofer = new Conductor("Ana García", 150, "pba-2026");
console.log(chofer.obtenerManifiesto());

// Acceso directo simulado mediante setters (se asignan como si fueran variables ordinarias)
chofer.viaticos = 220;
chofer.licencia = "type-e-ecuador";
console.log(`Consulta directa de viáticos actualizados: $${chofer.viaticos}`);

// Control de excepciones al romper las reglas de validación en los setters
try {
  chofer.viaticos = -50; 
} catch (error) {
  console.log(`❌ Error de asignación de viáticos: ${(error as Error).message}`);
}

try {
  chofer.nombre = "Lu"; 
} catch (error) {
  console.log(`❌ Error de asignación de identidad: ${(error as Error).message}`);
}