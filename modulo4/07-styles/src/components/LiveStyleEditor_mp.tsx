import { useStyles } from '../hooks/useStyles';

export default function LiveStyleEditor_mp() {
  const { style, setColor, setSize, setBold, reset } = useStyles({
    color: '#0f172a',
    fontSize: 16,
    fontWeight: 400,
    backgroundColor: '#ffffff',
  });

  return (
    <div style={{ border: '1px solid #cbd5e1', borderRadius: 10, padding: 16, background: '#f8fafc' }}>
      <h3 style={{ margin: '0 0 12px', color: '#0284c7', fontWeight: 800 }}>
        ⚙️ Editor de Estilos para Paneles de Cabina (_mp)
      </h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: '#475569' }}>
          Color de Texto
          <input
            type="color"
            defaultValue="#0f172a"
            onChange={(e) => setColor(e.target.value)}
            style={{ width: 48, height: 32, border: 'none', cursor: 'pointer' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: '#475569' }}>
          Tamaño de Fuente
          <input
            type="range"
            min={12}
            max={32}
            defaultValue={16}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#475569', cursor: 'pointer' }}>
          <input type="checkbox" onChange={(e) => setBold(e.target.checked)} />
          Texto Resaltado
        </label>

        <button
          onClick={reset}
          style={{ padding: '4px 12px', border: '1px solid #cbd5e1', borderRadius: 6, background: '#fff', cursor: 'pointer', fontSize: 13 }}
        >
          Reiniciar Estilos
        </button>
      </div>

      <div style={{ padding: 12, border: '1px dashed #0284c7', borderRadius: 8, background: '#ffffff' }}>
        <p style={{ margin: 0, ...style }}>
          🚛 Vista Previa: Manifiesto de Carga - Unidad PBX-1024 en tránsito hacia Guayaquil.
        </p>
      </div>
    </div>
  );
}