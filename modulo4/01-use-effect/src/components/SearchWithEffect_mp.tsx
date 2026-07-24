import { useEffect, useState } from 'react';

export default function SearchWithEffect_mp() {
  const [categoria, setCategoria] = useState('PESADO');
  const [resultados, setResultados] = useState<string[]>([]);

  useEffect(() => {
    const unidades = {
      PESADO: ['Trailer Freightliner 2024', 'Camión Volvo FH16', 'MACK Granit'],
      LIVIANO: ['Camioneta Hino 300', 'Foton Aumark', 'Chevrolet NLR'],
    };

    setResultados(unidades[categoria as keyof typeof unidades] || []);
  }, [categoria]);

  return (
    <div>
      <h2>🔍 Búsqueda Sincronizada de Vehículos por Tipo (_mp)</h2>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={{ padding: '8px' }}>
        <option value="PESADO">Transporte Pesado</option>
        <option value="LIVIANO">Transporte Liviano</option>
      </select>
      <ul style={{ marginTop: '15px' }}>
        {resultados.map((item, idx) => (
          <li key={idx}>🚛 {item}</li>
        ))}
      </ul>
    </div>
  );
}