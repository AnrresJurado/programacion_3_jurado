document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById("titulo-tms");
    console.log("Título del Panel:", titulo);

    const camiones = document.getElementsByClassName("camion-estado");
    console.log("Lista de Camiones (HTMLCollection):", camiones);

    const itemsRuta = document.getElementsByTagName("li");
    console.log("Elementos li detectados:", itemsRuta);

    const primeraRuta = document.querySelector(".ruta");
    console.log("Siguiente ruta urgente:", primeraRuta);

    const todasLasRutas = document.querySelectorAll(".ruta");
    console.log("Todas las rutas (NodeList):", todasLasRutas);

    Array.from(todasLasRutas).forEach(ruta => {
        console.log("Destino planificado:", ruta.textContent);
    });
});