export default function CssModuleDemo_mp() {
  return (
    <div style={{ padding: 16, border: '1px solid #0284c7', borderRadius: 10, background: '#f0f9ff' }}>
      <h3 style={{ margin: '0 0 8px', color: '#0369a1' }}>🚚 Módulo de Flotas Encapsulado (_mp)</h3>
      <p style={{ margin: '0 0 12px', color: '#334155', fontSize: 14 }}>
        CSS Modules genera identificadores únicos para evitar colisiones de estilos entre 
        los módulos de choferes, mantenimiento y facturación de fletes.
      </p>
      <button style={{ padding: '8px 16px', background: '#0284c7', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Botón Modular de Asignación
      </button>
    </div>
  );
}