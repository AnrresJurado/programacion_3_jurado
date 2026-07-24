const muelleA = document.getElementById('muelleA');

muelleA.addEventListener('mouseover', () => {
    muelleA.style.backgroundColor = 'yellow';
    muelleA.style.color = 'black';
    muelleA.innerHTML = '<strong>MUELLE A<br>[CAMIÓN DETECTADO]</strong>';
});

muelleA.addEventListener('mouseout', () => {
    muelleA.style.backgroundColor = 'lightcyan';
    muelleA.style.color = 'black';
    muelleA.innerHTML = '<strong>MUELLE A (Escritorio)</strong>';
});

muelleA.addEventListener('click', () => {
   alert('Abriendo compuertas mecánicas del Muelle A...');
});

const muelleTouch = document.getElementById('muelleTouch');

muelleTouch.addEventListener('touchstart', () => {
    muelleTouch.style.backgroundColor = 'darkgreen';
    muelleTouch.innerHTML = '<strong>MUELLE B<br>[OCUPADO - PROCESANDO]</strong>';
});

muelleTouch.addEventListener('touchend', () => {
    muelleTouch.style.backgroundColor = 'navy';
    muelleTouch.innerHTML = '<strong>MUELLE B<br>[DESCARGA COMPLETA]</strong>';
});