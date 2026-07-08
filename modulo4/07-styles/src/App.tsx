// src/App.tsx

/*
import CssGlobalDemo        from './components/CssGlobalDemo'
import CssModuleDemo        from './components/CssModuleDemo'
import InlineStyleDemo      from './components/InlineStyleDemo'
import StyledComponentsDemo from './components/StyledComponentsDemo'
import LiveStyleEditor      from './components/LiveStyleEditor'
import HoverDemo            from './components/HoverDemo'
import ThemePanel           from './components/ThemePanel'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  CssGlobalDemo        — clases globales y riesgo de colisión     │
// │  2  InlineStyleDemo      — objetos JS, sin :hover ni @media         │
// │  3  CssModuleDemo        — scope local, :hover con CSS Modules      │
// │  4  StyledComponentsDemo — CSS-in-JS con props transient ($)        │
// │  5  LiveStyleEditor      — hook useStyles para estilos dinámicos    │
// │  6  HoverDemo            — hook useHover para efectos hover         │
// │  7  ThemePanel           — Context + CSS variables para theming     │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 3

export default function App() {
  const content =
    PASO === 1 ? <CssGlobalDemo /> :
    PASO === 2 ? <InlineStyleDemo /> :
    PASO === 3 ? <CssModuleDemo /> :
    PASO === 4 ? <StyledComponentsDemo /> :
    PASO === 5 ? <LiveStyleEditor /> :
    PASO === 6 ? <HoverDemo /> :
    PASO === 7 ? <ThemePanel /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px' }}>
        {content}
      </main>
  )
}*/

import { useState } from 'react';
import CssGlobalDemo_mp from './components/CssGlobalDemo_mp';
import InlineStyleDemo_mp from './components/InlineStyleDemo_mp';
import CssModuleDemo_mp from './components/CssModuleDemo_mp';
import StyledComponentsDemo_mp from './components/StyledComponentsDemo_mp';
import LiveStyleEditor_mp from './components/LiveStyleEditor_mp';
import HoverDemo_mp from './components/HoverDemo_mp';
import ThemePanel_mp from './components/ThemePanel_mp';

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO para navegar entre componentes de estilos _mp           │
// │  1  CssGlobalDemo_mp        — Estilos CSS globales                   │
// │  2  InlineStyleDemo_mp      — Estilos en línea con CSSProperties       │
// │  3  CssModuleDemo_mp        — Estilos encapsulados por módulo        │
// │  4  StyledComponentsDemo_mp — CSS-in-JS con styled-components        │
// │  5  LiveStyleEditor_mp      — Estilos dinámicos con useStyles        │
// │  6  HoverDemo_mp            — Efectos interactivos con useHover      │
// │  7  ThemePanel_mp           — Paleta diurna / nocturna de cabina     │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1;

export default function App() {
  const [paso, setPaso] = useState(PASO);

  const content =
    paso === 1 ? <CssGlobalDemo_mp /> :
    paso === 2 ? <InlineStyleDemo_mp /> :
    paso === 3 ? <CssModuleDemo_mp /> :
    paso === 4 ? <StyledComponentsDemo_mp /> :
    paso === 5 ? <LiveStyleEditor_mp /> :
    paso === 6 ? <HoverDemo_mp /> :
    paso === 7 ? <ThemePanel_mp /> :
    <p style={{ color: '#e00' }}>Paso {paso}: crea el componente primero</p>;

  return (
    <main style={{ maxWidth: 640, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
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