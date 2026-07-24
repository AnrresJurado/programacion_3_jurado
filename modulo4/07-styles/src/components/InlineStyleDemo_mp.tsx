import type { CSSProperties } from 'react';

export default function InlineStyleDemo_mp() {
  const cardStyle: CSSProperties = {
    border: '1px solid #d1d5db',
    background: '#f9fafb',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  };

  const titleStyle: CSSProperties = {
    margin: '0 0 8px 0',
    color: '#0284c7',
    fontWeight: 800,
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>📦 Ficha de Carga con Inline Styles (_mp)</h3>
      <p style={{ margin: 0, color: '#4b5563', fontSize: 14 }}>
        Estilos aplicados directamente como objetos de TypeScript (<code>CSSProperties</code>) 
        para calcular dimensiones dinámicas del volumen de carga en tiempo de ejecución.
      </p>
    </div>
  );
}