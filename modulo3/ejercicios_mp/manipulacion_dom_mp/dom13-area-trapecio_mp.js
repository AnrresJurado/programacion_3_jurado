const baseMayor = document.getElementById('baseMayor');
const baseMenor = document.getElementById('baseMenor');
const altura = document.getElementById('altura');
const btnCalcular = document.getElementById('btn_calculo_area');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

btnCalcular.addEventListener('click', () => {
    const bMayor = parseFloat(baseMayor.value);
    const bMenor = parseFloat(baseMenor.value);
    const h = parseFloat(altura.value);

    error.textContent = "";
    resultado.textContent = "";

    if (isNaN(bMayor) || isNaN(bMenor) || isNaN(h)) {
        error.textContent = "Por favor ingresa valores numéricos";
        return;
    }
    if (bMayor <= 0 || bMenor <= 0 || h <= 0) {
        error.textContent = "Por favor ingresa valores numéricos positivos";
        return;
    }

    const area = ((bMayor + bMenor) / 2) * h;
    resultado.textContent = `Superficie de Corte: ${area.toFixed(2)} m²`;
});