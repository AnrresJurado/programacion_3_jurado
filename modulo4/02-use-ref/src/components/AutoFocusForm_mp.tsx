import { useRef, useEffect } from 'react';

export default function AutoFocusForm_mp() {
  const guiaRef = useRef<HTMLInputElement>(null);
  const placaRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    guiaRef.current?.focus();
  }, []);

  function handleGuiaKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      placaRef.current?.focus();
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 340 }}>
      <h3>🚛 Despacho Rápido de Unidad (_mp)</h3>
      <input
        ref={guiaRef}
        placeholder="Código de Guía (ej. GUI-2026-001)"
        onKeyDown={handleGuiaKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={placaRef}
        placeholder="Placa del Vehículo (ej. PBX-1234)"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Registrar Despacho
      </button>
    </form>
  );
}