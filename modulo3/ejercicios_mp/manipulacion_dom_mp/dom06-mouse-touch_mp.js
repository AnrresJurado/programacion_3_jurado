const camion = document.getElementById('camion-icono');
let coloresContenedor = ['darkblue', 'darkgreen', 'darkred', 'purple', '#333'];
let colorActual = 0;

let arrastrando = false;

function cambiarMercancia() {
   colorActual = (colorActual + 1) % coloresContenedor.length;
   camion.style.background = coloresContenedor[colorActual];
}

function moverCamion(x, y) {
   const patio = document.getElementById('container-patio');
   const patioRect = patio.getBoundingClientRect();
   const camionRect = camion.getBoundingClientRect();
   const mitadAncho = camionRect.width / 2;
   const mitadAlto = camionRect.height / 2;

   const offsetTop = patioRect.top + window.scrollY;
   const offsetLeft = patioRect.left + window.scrollX;

   camion.style.left = (x - offsetLeft - mitadAncho) + 'px';
   camion.style.top = (y - offsetTop - mitadAlto) + 'px';
}

camion.addEventListener('touchstart', (e) => {
   e.preventDefault(); 
   cambiarMercancia();
   arrastrando = true;
});

document.addEventListener('touchmove', (e) => {
   if (!arrastrando) return;
   const touch = e.touches[0];
   moverCamion(touch.pageX, touch.pageY);
});

document.addEventListener('touchend', () => {
   arrastrando = false;
});

camion.addEventListener('mousedown', (e) => {
   e.preventDefault();
   cambiarMercancia();
   arrastrando = true;
});

document.addEventListener('mousemove', (e) => {
   if (!arrastrando) return;
   moverCamion(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
   arrastrando = false;
});

const boton = document.getElementById('botonDespacho');
boton.addEventListener('mouseover', () => {
    boton.style.transform = 'scale(1.1)';
    boton.style.backgroundColor = '#218838';
});
boton.addEventListener('mouseout', () => {
    boton.style.transform = 'scale(1)';
    boton.style.backgroundColor = '#28a745';
});

const triangulo = document.getElementById('triangulo-advertencia');
triangulo.addEventListener('mouseover', () => {
    triangulo.style.transform = 'rotate(180deg) scale(1.2)';
});
triangulo.addEventListener('mouseout', () => {
    triangulo.style.transform = 'rotate(0deg) scale(1)';
});