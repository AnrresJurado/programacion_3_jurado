import { useState, useCallback, memo } from 'react';

interface RouteTask {
  id: number;
  ruta: string;
  completada: boolean;
}

const INITIAL_ROUTES: RouteTask[] = [
  { id: 1, ruta: 'Ruta Quito - Guayaquil (Peajes pagados)', completada: false },
  { id: 2, ruta: 'Ruta Cuenca - Manta (Inspección mecánica)', completada: true },
  { id: 3, ruta: 'Ruta Ambato - Esmeraldas (Carga asignada)', completada: false },
];

let rowRenderCount = 0;

const RouteRow = memo(function RouteRow({
  route,
  onToggle,
  onDelete,
}: {
  route: RouteTask;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  rowRenderCount++;
  const count = rowRenderCount;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 14px',
        background: route.completada ? '#f0fdf4' : '#fafafa',
        borderRadius: 8,
        border: '1px solid',
        borderColor: route.completada ? '#86efac' : '#e5e5e5',
      }}
    >
      <input
        type="checkbox"
        checked={route.completada}
        onChange={() => onToggle(route.id)}
        style={{ cursor: 'pointer', width: 16, height: 16 }}
      />
      <span
        style={{
          flex: 1,
          fontSize: 14,
          textDecoration: route.completada ? 'line-through' : 'none',
          color: route.completada ? '#666' : '#111',
        }}
      >
        {route.ruta}
      </span>
      <span style={{ fontSize: 11, color: '#aaa' }}>render #{count}</span>
      <button
        onClick={() => onDelete(route.id)}
        style={{
          padding: '2px 8px',
          borderRadius: 4,
          border: '1px solid #fca5a5',
          background: '#fef2f2',
          color: '#dc2626',
          cursor: 'pointer',
          fontSize: 12,
        }}
      >
        ✕
      </button>
    </div>
  );
});

export default function MemoizedList_mp() {
  const [routes, setRoutes] = useState<RouteTask[]>(INITIAL_ROUTES);
  const [counter, setCounter] = useState(0);

  const handleToggle = useCallback((id: number) => {
    setRoutes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, completada: !r.completada } : r))
    );
  }, []);

  const handleDelete = useCallback((id: number) => {
    setRoutes((prev) => prev.filter((r) => r.id !== id));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 20 }}>
      <h3>📋 Hojas de Ruta Memoizadas (_mp)</h3>
      <p style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
        <code>React.memo</code> + <code>useCallback</code> previenen re-renders innecesarios.
      </p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
        <button
          onClick={() => setCounter((c) => c + 1)}
          style={{ padding: '6px 14px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Contador Ajeno de Control ({counter})
        </button>
        <span style={{ fontSize: 12, color: '#888' }}>
          ← No re-renderiza las filas
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {routes.map((route) => (
          <RouteRow
            key={route.id}
            route={route}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}