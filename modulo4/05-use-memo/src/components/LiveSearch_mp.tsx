import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export default function LiveSearch_mp() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 360 }}>
      <h3>🔎 Búsqueda de Guías en Tiempo Real (_mp)</h3>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escriba código de guía o nombre de chofer..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Filtro activo (después de 400ms): <strong>{debouncedQuery || '—'}</strong>
      </p>
    </div>
  );
}