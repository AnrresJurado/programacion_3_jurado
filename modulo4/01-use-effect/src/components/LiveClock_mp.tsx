import { useEffect, useState } from 'react';

export default function LiveClock_mp() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>⏱️ Reloj de Bitácora de Salidas (_mp)</h2>
      <h1 style={{ fontSize: '36px', color: '#007bff', margin: '10px 0' }}>{time}</h1>
      <p>Hora Oficial del Centro de Despacho Logístico</p>
    </div>
  );
}