function notificarIncidencia() {
    alert('Alerta enviada a todos los transportistas: "Precaución por condiciones climáticas".');
}

function agregarCargaManual() {
    const lista = document.getElementById('lista-cargas-locales');
    const nuevaCarga = document.createElement('li');
    nuevaCarga.textContent = `Carga Local - ID: ${Math.floor(Math.random() * 1000)}`;
    lista.appendChild(nuevaCarga);
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('btn-agregar-listener').addEventListener('click', () => {
        const lista2 = document.getElementById('lista-cargas-internacionales');
        const nuevaCargaInt = document.createElement('li');
        nuevaCargaInt.textContent = `Carga Internacional - Puerto de Origen [OK]`;
        lista2.appendChild(nuevaCargaInt);
    });

    document.getElementById('btn-reemplazar-orden').addEventListener('click', () => {
        const mensaje = document.getElementById("orden-seleccionada");
        mensaje.textContent = "Orden #4509 - Asignada al Camión 102";
        console.log("Orden modificada en pantalla.");
    });

    document.getElementById('input-busqueda').addEventListener('input', (e) => {
        console.log('Buscando contenedor: ', e.target.value);
    });

    const inputChofer = document.getElementById('input-chofer');
    const visorChofer = document.getElementById('parrafo'); 
    
    inputChofer.addEventListener('input', () => {
        document.getElementById('visor-chofer').innerHTML = `Chofer actual: <strong>${inputChofer.value}</strong>`;
    });
});