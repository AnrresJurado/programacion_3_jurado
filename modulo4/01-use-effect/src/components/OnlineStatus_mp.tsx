import { useEffect, useState } from 'react';

export default function OnlineStatus_mp() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{ padding: '16px', borderRadius: '8px', background: isOnline ? '#e6fffa' : '#ffebe9' }}>
      <h2>📶 Estado de Conexión del GPS de la Unidad (_mp)</h2>
      <p>
        Estado del Camión en Ruta:{' '}
        <strong style={{ color: isOnline ? 'green' : 'red' }}>
          {isOnline ? '🟢 CONECTADO (Transmitiendo Telemetría)' : '🔴 SIN SEÑAL (Modo Offline)'}
        </strong>
      </p>
    </div>
  );
}