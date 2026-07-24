import { useState, useRef, useEffect } from 'react';

export default function PreviousValue_mp() {
  const [flete, setFlete] = useState('');
  const previousFleteRef = useRef('');

  useEffect(() => {
    previousFleteRef.current = flete;
  }, [flete]);

  return (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h3>💵 Auditoría de Ajuste de Tarifa/Flete (_mp)</h3>
      <input
        type="number"
        value={flete}
        onChange={(e) => setFlete(e.target.value)}
        placeholder="Ingrese nueva tarifa ($)..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 16, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          Tarifa Actual: <strong>{flete ? `$${flete}` : '—'}</strong>
        </p>
        <p style={{ margin: 0, color: '#6b7280' }}>
          Tarifa Anterior: <strong>{previousFleteRef.current ? `$${previousFleteRef.current}` : '—'}</strong>
        </p>
      </div>
    </div>
  );
}