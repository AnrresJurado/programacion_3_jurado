const campoBase = document.getElementById('campo_base');
const campoAltura = document.getElementById('campo_altura');
const btnArea = document.getElementById('btn_area');
const resultadoArea = document.getElementById('resultado_area');

btnArea.addEventListener('click', function() {
    const base = parseFloat(campoBase.value) || 0;
    const altura = parseFloat(campoAltura.value) || 0;
    const area = base * altura; 
    resultadoArea.textContent = `Superficie Ocupada: ${area.toFixed(2)} m²`;
});