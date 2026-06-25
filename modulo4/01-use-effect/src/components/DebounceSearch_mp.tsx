import { useEffect, useState } from 'react';

export default function DebounceSearch_mp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <h2>⚡ Búsqueda Optimizada de Choferes / Placas (Debounce _mp)</h2>
      <input
        type="text"
        placeholder="Ingrese placa o nombre del chofer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
        Filtro Aplicado a la Base de Datos: <strong>{debouncedTerm || 'Sin filtro'}</strong>
      </p>
    </div>
  );
}