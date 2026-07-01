const rutasLogistica = [];
const SLA_MINIMO = 7.0;

function agregarRuta() {
   const codigo = document.getElementById('inRuta').value.trim();
   const puntaje = parseFloat(document.getElementById('inPuntaje').value);
   const divError = document.getElementById('error');
   
   divError.style.display = 'none';

   if (codigo === '' || isNaN(puntaje) || puntaje < 0 || puntaje > 10) {
       divError.textContent = 'Ingresa un código de ruta válido y un puntaje entre 0 y 10.';
       divError.style.display = 'block';
       return;
   }

   rutasLogistica.push({ codigo, puntaje });
   document.getElementById('inRuta').value = '';
   document.getElementById('inPuntaje').value = '';
   
   renderizarTabla();
   document.getElementById('estadisticas').style.display = 'none';
}

function renderizarTabla() {
   const tbody = document.getElementById('tablaBody');
   tbody.innerHTML = '';

   rutasLogistica.forEach(item => {
       const fila = document.createElement('tr');
       const aprobado = item.puntaje >= SLA_MINIMO;
       fila.innerHTML = `
           <td>${item.codigo}</td>
           <td>${item.puntaje.toFixed(1)}</td>
           <td style="color: ${aprobado ? 'green' : 'red'}">${aprobado ? 'A Tiempo' : 'Retrasado'}</td>
       `;
       tbody.appendChild(fila);
   });
}

function calcularEstadisticas() {
   if (rutasLogistica.length === 0) return;

   const total = rutasLogistica.length;
   const suma = rutasLogistica.reduce((acc, r) => acc + r.puntaje, 0);
   const promedio = suma / total;

   const mayor = Math.max(...rutasLogistica.map(r => r.puntaje));
   const menor = Math.min(...rutasLogistica.map(r => r.puntaje));
   const aprobados = rutasLogistica.filter(r => r.puntaje >= SLA_MINIMO).length;

   document.getElementById('sPromedio').textContent = promedio.toFixed(2);
   document.getElementById('sMayor').textContent = mayor.toFixed(1);
   document.getElementById('sMenor').textContent = menor.toFixed(1);
   document.getElementById('sAprobados').textContent = `${aprobados} / ${total}`;

   document.getElementById('estadisticas').style.display = 'block';
}

function limpiar() {
   rutasLogistica.length = 0;
   renderizarTabla();
   document.getElementById('estadisticas').style.display = 'none';
   document.getElementById('error').style.display = 'none';
}

window.onload = () => {
   document.getElementById('btnAgregar').addEventListener('click', agregarRuta);
   document.getElementById('btnCalcular').addEventListener('click', calcularEstadisticas);
   document.getElementById('btnLimpiar').addEventListener('click', limpiar);
};