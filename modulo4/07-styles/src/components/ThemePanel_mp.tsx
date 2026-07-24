import { useState } from 'react';

export default function ThemePanel_mp() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeStyles = {
    bg: isDarkMode ? '#0f172a' : '#ffffff',
    cardBg: isDarkMode ? '#1e293b' : '#f8fafc',
    border: isDarkMode ? '#334155' : '#e2e8f0',
    text: isDarkMode ? '#f8fafc' : '#0f172a',
    accent: '#0284c7',
  };

  return (
    <div
      style={{
        border: `1px solid ${themeStyles.border}`,
        background: themeStyles.cardBg,
        color: themeStyles.text,
        borderRadius: 10,
        padding: 16,
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h3 style={{ margin: 0, color: themeStyles.accent, fontWeight: 800 }}>
          🌙 Modos de Pantalla de Cabina (_mp)
        </h3>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            padding: '6px 14px',
            border: `1px solid ${themeStyles.border}`,
            borderRadius: 8,
            background: themeStyles.bg,
            color: themeStyles.text,
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          {isDarkMode ? '☀️ Modo Diurno' : '🌙 Modo Nocturno'}
        </button>
      </div>

      <p style={{ margin: '0 0 12px', fontSize: 14, opacity: 0.8 }}>
        Alterna los colores de la interfaz para adaptarse al turno de conducción nocturna.
      </p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['Flete Activo', 'GPS Conectado', 'Turno Chofer'].map((tag) => (
          <div
            key={tag}
            style={{
              padding: '4px 10px',
              background: themeStyles.accent,
              color: '#ffffff',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}