const estadoGuia = "en_transito";

switch (estadoGuia) {
  case "en_andor":
    console.log("📋 Mercancía en andén. Cargando el contenedor en el camión.");
    break;
  case "despachado":
    console.log("✅ Manifiesto firmado. El vehículo ha salido de la matriz.");
    break;
  case "en_transito":
    console.log("🚚 Unidad en ruta. Monitoreo GPS activado en tiempo real.");
    break;
  case "entregado":
    console.log("📦 Destinatario firmó la guía de remisión. Entrega completada.");
    break;
  case "devuelto":
    console.log("❌ Entrega fallida. Mercancía regresando al centro de distribución.");
    break;
  default:
    console.log(`⚠️ Estado inválido: "${estadoGuia}". Revisar logs del sistema.`);
}


const diaMonitoreo = 3; // 1=Lunes ... 7=Domingo

switch (diaMonitoreo) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("🚛 Ruta Regular — Despacho continuo de flotas de 06:00 a 22:00.");
    break;
  case 6:
    console.log("🔧 Sábado — Solo rutas de última milla locales y mantenimiento en patio.");
    break;
  case 7:
    console.log("🔒 Domingo — Flota paralizada por restricciones de tránsito. Oficina cerrada.");
    break;
  default:
    console.log("❌ Error: Día del sistema no válido (Rango aceptado: 1-7).");
}
