const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'yellow';
})
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'lightgray';
})
caja.addEventListener('click', () => {
   alert('Has hecho click en la caja');
})

const area = document.getElementById('areaTouch');

area.addEventListener('touchstart', () => {
    area.style.backgroundColor = 'green';
})
area.addEventListener('touchend', () => {
    area.style.backgroundColor = 'blue';
})

