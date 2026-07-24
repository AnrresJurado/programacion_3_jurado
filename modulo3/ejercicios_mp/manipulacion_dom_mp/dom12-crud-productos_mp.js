const flota = [
    { id: 1, placa: "PBA-5678", chofer: "Carlos Mendoza", capacidad: 12.5 },
    { id: 2, placa: "GBA-1122", chofer: "Luis Alcázar", capacidad: 24.0 },
    { id: 3, placa: "TBB-9988", chofer: "Jorge Ortíz", capacidad: 8.2 }
];

let idEditar = null;
const cuerpoTabla = document.getElementById('cuerpoTabla');
const agregarBtn = document.getElementById('btn_agregar');
const cancelarBtn = document.getElementById('btn_cancelar');

function renderFlota() {
    cuerpoTabla.innerHTML = '';
    flota.forEach(vehiculo => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${vehiculo.id}</td>
            <td>${vehiculo.placa}</td>
            <td>${vehiculo.chofer}</td>
            <td>${vehiculo.capacidad.toFixed(1)} T</td>
            <td>
                <button onclick="editarVehiculo(${vehiculo.id})">Editar</button>
                <button onclick="eliminarVehiculo(${vehiculo.id})">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
    actualizarEstadisticas();
}

function limpiarFormulario() {
    document.getElementById('placa').value = '';
    document.getElementById('chofer').value = '';
    document.getElementById('capacidad').value = '';
}

function agregarVehiculo() {
    const placa = document.getElementById('placa').value.trim();
    const chofer = document.getElementById('chofer').value.trim();
    const capacidad = parseFloat(document.getElementById('capacidad').value);

    if (!placa || !chofer || isNaN(capacidad)) return;

    const nuevo = {
        id: flota.length > 0 ? Math.max(...flota.map(v => v.id)) + 1 : 1,
        placa,
        chofer,
        capacidad
    };

    flota.push(nuevo);
    limpiarFormulario();
    renderFlota();
}

function editarVehiculo(id) {
    const vehiculo = flota.find(v => v.id === id);
    if (!vehiculo) return;

    idEditar = id;
    document.getElementById('placa').value = vehiculo.placa;
    document.getElementById('chofer').value = vehiculo.chofer;
    document.getElementById('capacidad').value = vehiculo.capacidad;

    agregarBtn.textContent = 'Actualizar';
    agregarBtn.removeEventListener('click', agregarVehiculo);
    agregarBtn.addEventListener('click', actualizarVehiculo);
}

function actualizarVehiculo() {
    const vehiculo = flota.find(v => v.id === idEditar);
    if (vehiculo) {
        vehiculo.placa = document.getElementById('placa').value.trim();
        vehiculo.chofer = document.getElementById('chofer').value.trim();
        vehiculo.capacidad = parseFloat(document.getElementById('capacidad').value);
    }
    cancelarEdicion();
    renderFlota();
}

function cancelarEdicion() {
    limpiarFormulario();
    agregarBtn.textContent = 'Agregar Unidad';
    agregarBtn.removeEventListener('click', actualizarVehiculo);
    agregarBtn.addEventListener('click', agregarVehiculo);
    idEditar = null;
}

function eliminarVehiculo(id) {
    const index = flota.findIndex(v => v.id === id);
    if (index !== -1 && confirm('¿Eliminar esta unidad de la flota?')) {
        flota.splice(index, 1);
        renderFlota();
    }
}

function actualizarEstadisticas() {
    const total = flota.length;
    const promedio = total > 0 ? (flota.reduce((sum, v) => sum + v.capacidad, 0) / total).toFixed(1) : 0;
    const max = total > 0 ? Math.max(...flota.map(v => v.capacidad)).toFixed(1) : 0;
    const min = total > 0 ? Math.min(...flota.map(v => v.capacidad)).toFixed(1) : 0;

    document.getElementById('totalCamiones').textContent = total;
    document.getElementById('capacidadPromedio').textContent = `${promedio} T`;
    document.getElementById('camionMayor').textContent = `${max} T`;
    document.getElementById('camionMenor').textContent = `${min} T`;
}

agregarBtn.addEventListener('click', agregarVehiculo);
cancelarBtn.addEventListener('click', cancelarEdicion);
document.addEventListener('DOMContentLoaded', renderFlota);