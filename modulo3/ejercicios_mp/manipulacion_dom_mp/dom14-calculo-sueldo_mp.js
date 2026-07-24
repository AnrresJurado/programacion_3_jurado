function fmt(valor) {
   return '$ ' + valor.toFixed(2);
}

function calcularLiquidacion() {
   const fleteBase = parseFloat(document.getElementById('inFleteBase').value);
   const bono = parseFloat(document.getElementById('inBonoRuta').value);
   const porcentajeSeguro = parseFloat(document.getElementById('inSeguro').value);
   const penalizacion = parseFloat(document.getElementById('inPenalizacion').value);

   const divError = document.getElementById('error');
   const divResultado = document.getElementById('resultado');

   divError.style.display = 'none';
   divResultado.style.display = 'none';

   if (isNaN(fleteBase) || fleteBase <= 0) {
       divError.textContent = 'Ingresa un valor de flete base válido.';
       divError.style.display = 'block';
       return;
   }

   if (isNaN(porcentajeSeguro) || porcentajeSeguro < 0 || porcentajeSeguro > 100) {
       divError.textContent = 'El porcentaje de seguro debe estar entre 0 y 100.';
       divError.style.display = 'block';
       return;
   }

   const bonoVal = isNaN(bono) ? 0 : bono;
   const penalizacionVal = isNaN(penalizacion) ? 0 : penalizacion;

   const totalIngresos = fleteBase + bonoVal;
   const deduccionSeguro = fleteBase * (porcentajeSeguro / 100);
   const totalDeducciones = deduccionSeguro + penalizacionVal;
   const netoPagar = totalIngresos - totalDeducciones;

   document.getElementById('rFlete').textContent = fmt(fleteBase);
   document.getElementById('rBono').textContent = fmt(bonoVal);
   document.getElementById('rIngresos').textContent = fmt(totalIngresos);
   document.getElementById('rPorcentajeSeguro').textContent = porcentajeSeguro.toFixed(2);
   document.getElementById('rDeduccionSeguro').textContent = '- ' + fmt(deduccionSeguro);
   document.getElementById('rMontoPenalizacion').textContent = '- ' + fmt(penalizacionVal);
   document.getElementById('rDeducciones').textContent = '- ' + fmt(totalDeducciones);

   const spanNeto = document.getElementById('rNeto');
   spanNeto.textContent = fmt(netoPagar);
   spanNeto.style.color = netoPagar >= 0 ? '#1e8449' : '#c0392b';

   divResultado.style.display = 'block';
}

function limpiar() {
   ['inFleteBase', 'inBonoRuta', 'inPenalizacion'].forEach(id => {
       document.getElementById(id).value = '';
   });
   document.getElementById('inSeguro').value = '4.5';
   document.getElementById('error').style.display = 'none';
   document.getElementById('resultado').style.display = 'none';
}