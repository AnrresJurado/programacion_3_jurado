//Validar si la unidad tiene el permiso de circulación vigente

/* 
   Lógica para el cálculo de peajes:
   1. Identificar el tipo de vehículo (Liviano/Pesado).
   2. Contar el número de ejes.
   3. Aplicar descuento por telepeaje si está activo.
*/

/**
 * Calcula el tiempo estimado de llegada (ETA) de una unidad.
 * 
 * @param {number} distancia - La distancia total del trayecto en kilómetros.
 * @param {number} velocidad - La velocidad promedio permitida para el tipo de transporte.
 * @returns {string}: Un mensaje con el tiempo estimado en horas.
 */

function tiempo (distancia, velocidad) {
    const calculo = distancia / velocidad;
    return`El tiempo estimado para llegar a su destino es de ${calculo}h`;
}