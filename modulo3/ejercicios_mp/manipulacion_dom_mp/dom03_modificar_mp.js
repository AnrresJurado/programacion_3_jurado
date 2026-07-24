document.addEventListener("DOMContentLoaded", function() {
    const estadoEnvio = document.getElementById("estado-envio");
    estadoEnvio.textContent = "ALERTA: Desvío de ruta detectado en Camión 104";
    
    console.log("Nuevo estado:", estadoEnvio);

    const linkGps = document.getElementById("link-gps");
    linkGps.textContent = "Ver coordenadas GPS de emergencia";
    linkGps.href = "https://maps.google.com"; 
    linkGps.classList.add("alerta-critica");
    
    console.log("Enlace actualizado:", linkGps);
});