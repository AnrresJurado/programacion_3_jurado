import { useEffect, useState } from 'react';

interface ScreenSize {
  width: number;
  height: number;
}

export default function WindowSize_mp() {
  const [size, setSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h2>🖥️ Adaptabilidad del Panel de Monitoreo de Flotas (_mp)</h2>
      <p>Ancho: {size.width}px | Alto: {size.height}px</p>
      <p style={{ fontWeight: 'bold' }}>
        Modo de Pantalla: {size.width < 768 ? '📱 Vista Móvil para Chofer' : '🖥️ Monitor de Despacho en Cabina'}
      </p>
    </div>
  );
}