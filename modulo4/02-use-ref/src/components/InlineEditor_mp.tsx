import { useRef, useState } from 'react';

export default function InlineEditor_mp() {
  const rutaRef = useRef<HTMLInputElement>(null);
  const choferRef = useRef<HTMLInputElement>(null);
  const [savedRuta, setSavedRuta] = useState('Quito ➔ Guayaquil');
  const [savedChofer, setSavedChofer] = useState('Andrés Jurado');

  function handleSave() {
    const valueRuta = rutaRef.current?.value ?? '';
    setSavedRuta(valueRuta.trim() === '' ? '(Sin Ruta)' : valueRuta);

    const valueChofer = choferRef.current?.value ?? '';
    setSavedChofer(valueChofer.trim() === '' ? '(Sin Chofer)' : valueChofer);
  }

  function handleClear() {
    if (rutaRef.current) rutaRef.current.value = '';
    if (choferRef.current) {
      choferRef.current.value = '';
      choferRef.current.focus();
    }
  }

  return (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h3>📝 Edición Directa de Hoja de Ruta (_mp)</h3>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Ruta Registrada: <strong style={{ color: '#111827' }}>{savedRuta}</strong>
      </p>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Conductor Asignado: <strong style={{ color: '#111827' }}>{savedChofer}</strong>
      </p>

      <input
        ref={rutaRef}
        defaultValue=""
        placeholder="Modificar Origen / Destino..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={choferRef}
        defaultValue=""
        placeholder="Modificar Nombre de Chofer..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar Cambios
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}