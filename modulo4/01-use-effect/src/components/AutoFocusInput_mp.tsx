import { useEffect, useRef } from 'react';

export default function AutoFocusInput_mp() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h2>🎯 Registro Rápido de Código de Guía de Remisión (_mp)</h2>
      <p>El cursor se ubica automáticamente en el campo de escaneo al ingresar.</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escanee o digite código de guía (ej. GUI-9928)"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
}