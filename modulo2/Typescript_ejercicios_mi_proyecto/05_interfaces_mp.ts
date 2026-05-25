// type-alias.ts

type Chofer = {
  nombre: string;
  edad:   number;
  licencia: string;
};

function mostrarChofer(c: Chofer): void {
  console.log(`${c.nombre} (${c.edad} años) — Licencia: ${c.licencia}`);
}

function validarChofer(c: Chofer): boolean {
  return c.nombre.length > 0 && c.licencia.length >= 7;
}

const choferAna: Chofer = {
  nombre: "Ana García",
  edad:   28,
  licencia: "Tipo-E-Ecuador"
};

mostrarChofer(choferAna);
console.log(`¿Válido? ${validarChofer(choferAna)}`);

// tipos-alias.ts

type Placa        = string;
type Kilometraje  = number;
type Disponible   = boolean;

type TipoCamion   = "trailer" | "camion" | "furgon";
type EstadoViaje  = "despachado" | "en_ruta" | "entregado";
type RegistroGps  = number | string | null;

type HistorialRutas = string[];
type ListaPesos     = number[];

const miPlaca: Placa           = "PBA-2026";
const tipoVehiculo: TipoCamion = "trailer";
const estadoActual: EstadoViaje = "en_ruta";

console.log(`Vehículo: ${miPlaca} — Tipo: ${tipoVehiculo} — Estado: ${estadoActual}`);

function requierePermisoEspecial(tipo: TipoCamion): boolean {
  return tipo === "trailer";
}

console.log(requierePermisoEspecial("trailer")); // true
console.log(requierePermisoEspecial("furgon"));  // false

// interface-basica.ts

interface Vehiculo {
  id:        number;
  placa:     string;
  capacidad: number;
  kilometraje: number;
  marca:     string;
}

function mostrarVehiculo(v: Vehiculo): void {
  console.log(`[ID: ${v.id}] ${v.marca} (${v.placa}) — Capacidad: ${v.capacidad}T`);
}

function requiereMantenimiento(v: Vehiculo): boolean {
  return v.kilometraje > 100000;
}

const camionVolvo: Vehiculo = {
  id:        1,
  placa:     "PBA-2026",
  capacidad: 18,
  kilometraje: 125000,
  marca:     "Volvo"
};

mostrarVehiculo(camionVolvo);
console.log(`¿Requiere ABC?: ${requiereMantenimiento(camionVolvo)}`);

// propiedades-especiales.ts

interface Ruta {
  readonly codigo: string;     // No modificable tras su creación
  origen:          string;
  destino:         string;
  peajesCosto:     number;
  gpsAlterno?:     string;     // Opcional
  custodiaPolicial?: boolean;  // Opcional
}

const rutaQuitoManta: Ruta = {
  codigo:      "RT-001",
  origen:      "Quito",
  destino:     "Manta",
  peajesCosto: 14.50
};

const rutaFrontera: Ruta = {
  codigo:      "RT-002",
  origen:      "Tulcán",
  destino:     "Ipiales",
  peajesCosto: 5.00,
  gpsAlterno:  "SAT-LINK-2",
  custodiaPolicial: true
};

// rutaQuitoManta.codigo = "RT-999"; // ❌ Error: codigo es readonly

console.log(`Ruta ${rutaQuitoManta.codigo} — GPS: ${rutaQuitoManta.gpsAlterno ?? "Por defecto"}`);
console.log(`Ruta ${rutaFrontera.codigo} — GPS: ${rutaFrontera.gpsAlterno ?? "Por defecto"}`);

function evaluarRiesgo(r: Ruta): void {
  if (r.custodiaPolicial !== undefined) {
    console.log(`Ruta ${r.codigo}: Custodia policial activa (${r.custodiaPolicial})`);
  } else {
    console.log(`Ruta ${r.codigo}: Seguridad estándar (Sin custodia especial)`);
  }
}

evaluarRiesgo(rutaQuitoManta);
evaluarRiesgo(rutaFrontera);

// extender-interfaces.ts

interface Envio {
  guia:   string;
  pesoKg: number;
}

// EnvioFrio hereda de Envio y añade control térmico
interface EnvioFrio extends Envio {
  temperaturaObjetivo: number;
  alertaDescongelamiento: boolean;
}

// EnvioValorado hereda de Envio y añade seguridad financiera
interface EnvioValorado extends Envio {
  montoAsegurado: number;
  requiereToken:  boolean;
}

const medicina: EnvioFrio = {
  guia: "ENV-F01",
  pesoKg: 45,
  temperaturaObjetivo: 4,
  alertaDescongelamiento: false
};

const electronicos: EnvioValorado = {
  guia: "ENV-V09",
  pesoKg: 120,
  montoAsegurado: 15000,
  requiereToken: true
};

function registrarPesoBase(e: Envio): void {
  console.log(`Carga Registrada -> Guía: ${e.guia} (${e.pesoKg} kg)`);
}

// Compatible con ambas porque extenden la interfaz base 'Envio'
registrarPesoBase(medicina);
registrarPesoBase(electronicos);

function despacharFrio(ef: EnvioFrio): void {
  console.log(`Despacho Frío -> Termostato seteado en: ${ef.temperaturaObjetivo}°C`);
}

despacharFrio(medicina);
// despacharFrio(electronicos); // ❌ Error: EnvioValorado no cumple con la estructura de EnvioFrio