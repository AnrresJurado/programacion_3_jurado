const campoNumero1 = document.getElementById('campo_numero1');
const campoNumero2 = document.getElementById('campo_numero2');
const btnSumar = document.getElementById('btn_arear')
const listaTareas = document.getElementById('resultado');


btnSumar.addEventListener('click', function() {
    const numero1 = parseFloat(campoNumero1.value);
    const numero2 = parseFloat(campoNumero2.value);
    const area = numero1 * numero2 / 2;
    resultado.textContent = `Resultado: ${area}`
});


