import { useLocalStorage } from '../hooks/useLocalStorage';

export default function ThemeSelector_mp() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('transport_theme_mp', 'light');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <h3>🎨 Modo de Pantalla de Cabina Persistente (_mp)</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        {(['light', 'dark'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: theme === t ? '#0284c7' : '#fff',
              color: theme === t ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            {t === 'light' ? '☀️ Modo Diurno' : '🌙 Modo Nocturno'}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>
        Garantiza que la preferencia del chofer se guarde en el navegador local.
      </p>
    </div>
  );
}