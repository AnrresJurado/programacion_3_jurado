// --- Crear un objeto (Estructura de una Unidad) ---
const camion = {
  placa: "PBA-2026",
  capacidadToneladas: 18,
  enRuta: true
};

// Acceso a propiedades — Notación de punto (Preferida por legibilidad)
console.log(`Placa de la unidad: ${camion.placa}`);               // "PBA-2026"
console.log(`Capacidad de carga: ${camion.capacidadToneladas}T`); // 18

// Acceso con corchetes — Útil para lectura dinámica mediante variables
console.log(camion["placa"]);                                     // "PBA-2026"
const propiedadConsultada = "capacidadToneladas";
console.log(`Consulta dinámica: ${camion[propiedadConsultada]}`); // 18

// Acceso a propiedad que no existe -> Devuelve undefined de forma segura
console.log(`Seguro internacional: ${camion.seguroExtra}`);       // undefined

// --- Inserción, Eliminación y Actualización de Campos ---

// Añadir una propiedad después de su inicialización
camion.marca = "Volvo HINO";
console.log(`Marca registrada: ${camion.marca}`);                  // "Volvo HINO"

// Eliminar propiedades del objeto
delete camion.enRuta;
console.log(`¿Estado en ruta?: ${camion.enRuta}`);                 // undefined

// Actualizar valores de las propiedades
camion.placa = "PXX-9999"; 
console.log("Ficha del vehículo modificada:", camion);

const cotizadorLogistico = {
  // 1. Forma clásica de declarar un método
  calcularFleteFijo: function(distancia, precioKm) {
    return distancia * precioKm;
  },

  // 2. Shorthand de método (ES6) — ¡Forma preferida y limpia!
  calcularSeguroCarga(valorMercancia) {
    return valorMercancia * 0.02; // 2% de cobertura
  },

  // 3. Arrow function en método (No vincula 'this', útil solo para operaciones puras)
  estimarTiempoHoras: (distancia, velocidadPromedio) => distancia / velocidadPromedio
};

console.log(`Costo flete: $${cotizadorLogistico.calcularFleteFijo(100, 2.50)}`); // $250
console.log(`Póliza seguro: $${cotizadorLogistico.calcularSeguroCarga(5000)}`);   // $100
console.log(`Tiempo estimado de viaje: ${cotizadorLogistico.estimarTiempoHoras(240, 60)} horas`); // 4 horas

const monitoreoUnidad = {
  codigoGps: "GPS-VOLVO-01",
  kilometrajeActual: 150000,

  // ✅ CORRECTO: Shorthand de método. 'this' apunta correctamente a 'monitoreoUnidad'
  generarReporteEstado() {
    return `Módulo [${this.codigoGps}]: Odómetro marca ${this.kilometrajeActual} km.`;
  },

  // ✅ CORRECTO: Modificación de propiedades internas mediante mutación controlada
  registrarViajeEjecutado(kmRecorridos) {
    this.kilometrajeActual += kmRecorridos; // Aumenta el odómetro interno
    return `🚚 Viaje finalizado. Nuevo kilometraje: ${this.kilometrajeActual} km.`;
  },

  // ❌ INCORRECTO: Arrow function. 'this' hereda el ámbito global, no el del objeto
  reporteAlternoArrow: () => {
    return `Dispositivo satelital: ${this.codigoGps}`; // 'this.codigoGps' será undefined
  }
};

console.log(monitoreoUnidad.generarReporteEstado());  // "Módulo [GPS-VOLVO-01]: Odómetro marca 150000 km."
console.log(monitoreoUnidad.registrarViajeEjecutado(450)); // Actualiza e imprime 150450 km
console.log(monitoreoUnidad.reporteAlternoArrow());   // "Dispositivo satelital: undefined"