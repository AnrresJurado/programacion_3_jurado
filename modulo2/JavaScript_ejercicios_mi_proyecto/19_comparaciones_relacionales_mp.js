const cargaActualToneladas = 10;
const capacidadMaximaToneladas = 20;

// ¿La carga actual supera la capacidad máxima del camión?
console.log(cargaActualToneladas > capacidadMaximaToneladas);    // false — mayor que

// ¿El camión tiene espacio disponible para más mercancía?
console.log(cargaActualToneladas < capacidadMaximaToneladas);    // true  — menor que

// ¿La carga llegó exactamente al límite permitido o lo superó?
console.log(cargaActualToneladas >= 10);  // true  — mayor o igual que

// ¿La carga está por debajo del umbral mínimo de despacho (ej. 9 toneladas)?
console.log(cargaActualToneladas <= 9);   // false — menor o igual que