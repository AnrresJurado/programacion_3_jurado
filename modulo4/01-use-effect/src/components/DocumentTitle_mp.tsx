import { useEffect, useState } from 'react';

export default function DocumentTitle_mp() {
  const [rutaActual, setRutaActual] = useState('Quito - Guayaquil');

  useEffect(() => {
    document.title = `Ruta Activa: ${rutaActual} | Transportes`;
    return () => {
      document.title = 'Sistema de Transportes';
    };
  }, [rutaActual]);

  return (
    <div>
      <h2>🚛 Control de Título del Navegador (_mp)</h2>
      <p>Ruta en monitoreo: <strong>{rutaActual}</strong></p>
      <button onClick={() => setRutaActual('Cuenca - Manta')}>
        Cambiar a Ruta Cuenca - Manta
      </button>
    </div>
  );
}