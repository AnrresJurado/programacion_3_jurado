// Botón que crece al pasar el mouse o tocar en una tablet de monitoreo
const boton = document.getElementById('botonAnimado');

// Aumentar tamaño al enfocar la atención
function agrandar() {
   boton.style.transform = 'scale(1.3)';
   boton.style.backgroundColor = 'darkred';
}

// Volver a tamaño normal
function normalizar() {
   boton.style.transform = 'scale(1)';
   boton.style.backgroundColor = 'crimson';
}

// Eventos de Mouse (Escritorio)
boton.addEventListener('mouseover', agrandar);
boton.addEventListener('mouseout', normalizar);

// Eventos Touch (Dispositivos móviles de operarios)
boton.addEventListener('touchstart', (e) => {
   e.preventDefault();
   agrandar();
});
boton.addEventListener('touchend', normalizar);