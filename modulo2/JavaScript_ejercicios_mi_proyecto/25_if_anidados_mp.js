const prompt = require("prompt-sync")();

// =========================================================================
// 🏢 EJEMPLO 1: Control de Seguridad y Acceso a Rutas Críticas
// =========================================================================
const usuarioAutenticado = true;
const rolUsuario         = "chofer"; 
const seccionLogistica   = "bóveda_valores"; // Secciones: "rutas_estándar", "bóveda_valores"

if (usuarioAutenticado) {
  console.log(`🔓 Sistema: Conexión exitosa. Rol: ${rolUsuario}`);

  if (rolUsuario === "admin_logistica") {
    console.log("Acreditación total: Acceso a todas las rutas del país.");

    if (seccionLogistica === "bóveda_valores") {
      console.log("Cargando bitácora de camiones blindados...");
    }
  } else if (rolUsuario === "chofer") {
    console.log("Acreditación limitada: Acceso a asignación de rutas diarias.");

    if (seccionLogistica === "bóveda_valores") {
      console.log("⛔ Acceso Denegado: Los choferes no pueden abrir la sección de blindados.");
    } else {
      console.log(`Cargando mapa para la ruta: ${seccionLogistica}`);
    }
  } else {
    console.log("Rol no reconocido en la empresa. Comunicarse con Soporte.");
  }

} else {
  console.log("❌ Sesión expirada. Redirigiendo al Login de Operadores...");
}


// =========================================================================
// 🚛 EJEMPLO 2: Validación Secuencial de Registro de Unidades (Camiones)
// =========================================================================
const placaCamion       = "PDA-1234";
const tipoCombustible   = "Diesel Premium";
const capacidadCargaKg  = 12000;
const MIN_CAPACIDAD_KG  = 1000;

if (placaCamion.trim().length === 0) {
  console.log("❌ Error: La placa del vehículo es obligatoria.");
} else {
  console.log(`✅ Placa registrada correctamente: ${placaCamion}`);

  if (!tipoCombustible.includes("Diesel") && !tipoCombustible.includes("Ecopais")) {
    console.log("❌ Error: Tipo de combustible no homologado por la empresa.");
  } else {
    console.log(`✅ Combustible válido: ${tipoCombustible}`);

    if (capacidadCargaKg < MIN_CAPACIDAD_KG) {
      console.log(`❌ Registro Rechazado: Capacidad insuficiente para fletes comerciales.`);
      console.log(`   Mínimo: ${MIN_CAPACIDAD_KG} kg. Registrado: ${capacidadCargaKg} kg.`);
    } else {
      console.log("✅ Vehículo aprobado y guardado en la base de datos de la flota.");
    }
  }
}


// =========================================================================
// 🛢️ EJEMPLO 3: Tarificación Estructurada según Naturaleza de la Carga
// =========================================================================
const tipoDeCarga   = "refrigerada"; // "químicos_peligrosos", "refrigerada", "general"
const esClienteCorporativo = true;
const costoBaseFlete       = 200;

let costoFinalViaje = costoBaseFlete;
let desgloseImpuestos = "";

if (tipoDeCarga === "refrigerada") {
  const sobrecostoCadenaFrio = costoBaseFlete * 0.15; // 15% por uso de refrigerador continuo
  costoFinalViaje = costoBaseFlete + sobrecostoCadenaFrio;
  desgloseImpuestos = "Adicional 15% por Cadena de Frío";

  if (esClienteCorporativo) {
    const bonoDescuento = costoFinalViaje * 0.05; // 5% descuento por convenio
    costoFinalViaje -= bonoDescuento;
    desgloseImpuestos += " + 5% Descuento Corporativo";
  }

} else if (tipoDeCarga === "químicos_peligrosos") {
  if (esClienteCorporativo) {
    costoFinalViaje = costoBaseFlete * 1.20; // 20% adicional por seguros especiales
    desgloseImpuestos = "20% cargo de seguridad (Convenio Corp)";
  } else {
    costoFinalViaje = costoBaseFlete * 1.40; // 40% adicional a clientes comunes
    desgloseImpuestos = "40% cargo de seguridad (Cliente Estándar)";
  }

} else if (tipoDeCarga === "general") {
  costoFinalViaje = costoBaseFlete; // Carga seca común y corriente
  desgloseImpuestos = "Tarifa Plana (Sin recargos especiales)";
}

console.log(`\n--- Liquidación de Envío ---`);
console.log(`Tipo de Mercancía:  ${tipoDeCarga}`);
console.log(`Tarifa Base:        $${costoBaseFlete.toFixed(2)}`);
console.log(`Detalle Logístico:  ${desgloseImpuestos}`);
console.log(`Costo Final Flete:  $${costoFinalViaje.toFixed(2)}`);


// =========================================================================
// 📦 EJEMPLO 4: Input Dinámico - Descuento por Volumen (¡BUG CORREGIDO!)
// =========================================================================
// BUG ORIGINAL: Tenías `if (miembro = "S")` que sobreescribía la variable.
// CORRECCIÓN: Cambiado a `===` para realizar la validación correcta.

const totalPaquetesRuta = parseInt(prompt("\nIngrese el total de paquetes cargados: "), 10);
const contratoFrecuente = prompt("¿El remitente posee contrato frecuente? (S/N): ");

if (totalPaquetesRuta > 50) {
    console.log("📉 Aplica descuento por volumen de distribución.");
    
    // ¡CORREGIDO!: Cambiado de `=` a `===`
    if (contratoFrecuente === "S" || contratoFrecuente === "s") { 
      console.log("💎 Beneficio Extra: Tarifa preferencial Platino activada.");
    } else {
        console.log(`📉 Tarifa con descuento estándar de ruta.`);
    }
} else {
      console.log("🚛 Tarifa base estándar aplicada (Carga menor).");
}


// =========================================================================
// 🪪 EJEMPLO 5: Input Dinámico - Validación de Aptitud del Conductor
// =========================================================================
const edadChofer = parseInt(prompt("\nEdad del chofer aspirante: "), 10);
const tieneLicenciaVigente = prompt("¿Tiene la licencia profesional vigente? (s/n): ");

if (edadChofer <= 21) {
  if (tieneLicenciaVigente === "s") {
    console.log("🟢 Chofer apto solo para vehículos ligeros de reparto.");
  } else {
    console.log("❌ Rechazado: Requiere pasar primero por la escuela de conducción profesional.");
  }
} else {
  if (tieneLicenciaVigente === "s") {
    console.log("🟢 Chofer apto para operar camiones pesados y articulados.");
  } else {
    console.log("❌ Retener despacho: Licencia caducada o no presentada.");
  }
}