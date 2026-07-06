import { useState } from 'react';
import FilteredCatalog_mp from './components/FilteredCatalog_mp';
import LiveSearch_mp from './components/LiveSearch_mp';
import MemoizedList_mp from './components/MemoizedList_mp';
import PostList_mp from './components/PostList_mp';
import PrimeSieve_mp from './components/PrimeSieve_mp';
import ThemeSelector_mp from './components/ThemeSelector_mp';

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO para navegar entre los ejercicios _mp de useMemo/hooks  │
// │  1  FilteredCatalog_mp — Catálogo de camiones con 2 useMemo          │
// │  2  LiveSearch_mp      — Búsqueda de guías con custom hook debounce  │
// │  3  MemoizedList_mp    — Listado de hojas de ruta con React.memo     │
// │  4  PostList_mp        — Consulta de novedades con custom hook fetch │
// │  5  PrimeSieve_mp      — Criba pesada de tarifas con useMemo         │
// │  6  ThemeSelector_mp   — Tema de cabina con custom hook localStorage │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 4;

export default function App() {
  const [paso, setPaso] = useState(PASO);

  const content =
    paso === 1 ? <FilteredCatalog_mp /> :
    paso === 2 ? <LiveSearch_mp /> :
    paso === 3 ? <MemoizedList_mp /> :
    paso === 4 ? <PostList_mp /> :
    paso === 5 ? <PrimeSieve_mp /> :
    paso === 6 ? <ThemeSelector_mp /> :
    <p style={{ color: '#e00' }}>Paso {paso}: crea el componente primero</p>;

  return (
    <main style={{ maxWidth: 650, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => setPaso(num)}
            style={{
              padding: '6px 12px',
              backgroundColor: paso === num ? '#0284c7' : '#eee',
              color: paso === num ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Paso {num}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ marginTop: '20px' }}>{content}</div>
    </main>
  );
}