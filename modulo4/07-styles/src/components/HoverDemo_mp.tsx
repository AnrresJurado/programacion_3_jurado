import { useHover } from '../hooks/useHover';

export default function HoverDemo_mp() {
  const btnIniciar = useHover(
    {
      padding: '10px 20px',
      background: '#0284c7',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.2s',
    },
    {
      background: '#0369a1',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(2, 132, 199, 0.35)',
    }
  );

  const btnDetalle = useHover(
    {
      padding: '10px 20px',
      background: 'transparent',
      color: '#0284c7',
      border: '1px solid #0284c7',
      borderRadius: 8,
      cursor: 'pointer',
      fontWeight: 600,
      transition: 'all 0.2s',
    },
    { background: '#0284c7', color: 'white' }
  );

  const card = useHover(
    {
      border: '1px solid #e2e8f0',
      background: '#ffffff',
      borderRadius: 10,
      padding: 16,
      transition: 'all 0.2s',
      cursor: 'default',
    },
    {
      borderColor: '#0284c7',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    }
  );

  return (
    <div {...card.hoverProps} style={card.style}>
      <h3 style={{ margin: '0 0 12px', color: '#0284c7', fontWeight: 800 }}>
        🔍 Interactividad de Unidades con Hook useHover (_mp)
      </h3>
      <p style={{ margin: '0 0 14px', color: '#64748b', fontSize: 14 }}>
        Pasa el cursor sobre los botones para ver los efectos interactivos aplicados con <code>useHover</code>.
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button {...btnIniciar.hoverProps} style={btnIniciar.style}>Iniciar Monitoreo</button>
        <button {...btnDetalle.hoverProps} style={btnDetalle.style}>Ver Histórico</button>
      </div>
    </div>
  );
}