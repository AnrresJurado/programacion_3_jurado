import { useReducer, useMemo } from 'react';

interface RouteItem {
  id:       number;
  ruta:     string;
  flete:    number;
  unidades: number;
}

interface ManifestState {
  items:  RouteItem[];
  isOpen: boolean;
}

type ManifestAction =
  | { type: 'ADD_ITEM';    item: Omit<RouteItem, 'unidades'> }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'INCREMENT';   id: number }
  | { type: 'DECREMENT';   id: number }
  | { type: 'CLEAR' }
  | { type: 'TOGGLE_PANEL' };

function manifestReducer(state: ManifestState, action: ManifestAction): ManifestState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find((i) => i.id === action.item.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, unidades: i.unidades + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, unidades: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      };
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, unidades: i.unidades + 1 } : i
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, unidades: i.unidades - 1 } : i))
          .filter((i) => i.unidades > 0),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'TOGGLE_PANEL':
      return { ...state, isOpen: !state.isOpen };
  }
}

const RUTAS_DISPONIBLES = [
  { id: 1, ruta: 'Quito ➔ Guayaquil (Contenedor 40")', flete: 450 },
  { id: 2, ruta: 'Cuenca ➔ Manta (Carga Refrigerada)',  flete: 520 },
  { id: 3, ruta: 'Ambato ➔ Esmeraldas (Plataforma)',   flete: 380 },
  { id: 4, ruta: 'Tulcán ➔ Huaquillas (Tránsito)',     flete: 680 },
];

export default function ShoppingCart_mp() {
  const [manifest, dispatch] = useReducer(manifestReducer, { items: [], isOpen: false });

  const totalFlete = useMemo(
    () => manifest.items.reduce((acc, i) => acc + i.flete * i.unidades, 0),
    [manifest.items]
  );
  const totalUnidades = useMemo(
    () => manifest.items.reduce((acc, i) => acc + i.unidades, 0),
    [manifest.items]
  );

  return (
    <div style={{ maxWidth: 460, fontFamily: 'sans-serif' }}>
      <h3>📦 Programación de Manifiesto de Despacho (_mp)</h3>

      {/* Catálogo de Rutas */}
      <div style={{ marginBottom: 16 }}>
        {RUTAS_DISPONIBLES.map((route) => (
          <div
            key={route.id}
            style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '10px 0',
              borderBottom: '1px solid #e5e7eb',
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: 500 }}>{route.ruta}</p>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
                Flete Base: ${route.flete}
              </p>
            </div>
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', item: route })}
              style={{
                padding: '6px 14px', background: '#0070f3', color: '#fff',
                border: 'none', borderRadius: 6, cursor: 'pointer',
              }}
            >
              + Programar
            </button>
          </div>
        ))}
      </div>

      {/* Botón de Resumen */}
      <button
        onClick={() => dispatch({ type: 'TOGGLE_PANEL' })}
        style={{
          width: '100%', padding: '10px',
          background: totalUnidades > 0 ? '#0070f3' : '#f3f4f6',
          color:      totalUnidades > 0 ? '#fff'    : '#6b7280',
          border: 'none', borderRadius: 8, cursor: 'pointer',
          fontWeight: 600, marginBottom: 12,
        }}
      >
        {manifest.isOpen ? 'Ocultar Manifiesto' : `Ver Manifiesto (${totalUnidades} Viajes)`}
      </button>

      {/* Panel del Manifiesto */}
      {manifest.isOpen && (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, padding: 16 }}>
          {manifest.items.length === 0 ? (
            <p style={{ color: '#9ca3af', margin: 0 }}>Sin viajes programados en el manifiesto.</p>
          ) : (
            <>
              {manifest.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '8px 0',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  <span style={{ fontSize: 13, flex: 1 }}>{item.ruta}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      −
                    </button>
                    <span style={{ minWidth: 20, textAlign: 'center', fontSize: 14 }}>
                      {item.unidades}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      +
                    </button>
                    <span style={{ minWidth: 65, textAlign: 'right', fontSize: 14 }}>
                      ${(item.flete * item.unidades).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ paddingTop: 12, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>Total Fletes</span>
                <span style={{ fontWeight: 700, fontSize: 16 }}>${totalFlete.toFixed(2)}</span>
              </div>

              <button
                onClick={() => dispatch({ type: 'CLEAR' })}
                style={{
                  marginTop: 12, width: '100%', padding: '8px',
                  background: '#fee2e2', color: '#991b1b',
                  border: 'none', borderRadius: 6, cursor: 'pointer',
                }}
              >
                Vaciar Manifiesto
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

const qtyBtn: React.CSSProperties = {
  width: 24, height: 24, border: '1px solid #d1d5db',
  borderRadius: 4, background: '#f9fafb',
  cursor: 'pointer', fontSize: 14, lineHeight: 1,
};