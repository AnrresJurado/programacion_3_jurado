// src/App.tsx

import DocumentTitle    from './components/DocumentTitle'
import OnlineStatus     from './components/OnlineStatus'
import WindowSize       from './components/WindowSize'
import LiveClock        from './components/LiveClock'
import SearchWithEffect from './components/SearchWithEffect'
import DebounceSearch   from './components/DebounceSearch'
import FetchUser        from './components/FetchUser'
import AutoFocusInput   from './components/AutoFocusInput'
import TransportMonitor_mp from './components/TransportMonitor_mp'
import DocumentTitle_mp from './components/DocumentTitle_mp';
import OnlineStatus_mp from './components/OnlineStatus_mp';
import WindowSize_mp from './components/WindowSize_mp';
import LiveClock_mp from './components/LiveClock_mp';
import SearchWithEffect_mp from './components/SearchWithEffect_mp';
import DebounceSearch_mp from './components/DebounceSearch_mp';
import FetchUser_mp from './components/FetchUser_mp';
import AutoFocusInput_mp from './components/AutoFocusInput_mp';

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  DocumentTitle    — useEffect con array vacío, limpia al desmontar│
// │  2  OnlineStatus     — subscripción a eventos online/offline         │
// │  3  WindowSize       — evento resize con estado objeto tipado        │
// │  4  LiveClock        — setInterval con inicializador perezoso        │
// │  5  SearchWithEffect — efecto con dependencia, búsqueda sincronizada │
// │  6  DebounceSearch   — setTimeout/clearTimeout, patrón debounce      │
// │  7  FetchUser        — fetch real, loading/error, flag cancelled      │
// │  8  AutoFocusInput   — useRef + useEffect para foco imperativo       │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 17

export default function App() {
  const content =
    PASO === 1 ? <DocumentTitle /> :
    PASO === 2 ? <OnlineStatus /> :
    PASO === 3 ? <WindowSize /> :
    PASO === 4 ? <LiveClock /> :
    PASO === 5 ? <SearchWithEffect /> :
    PASO === 6 ? <DebounceSearch /> :
    PASO === 7 ? <FetchUser /> :
    PASO === 8 ? <AutoFocusInput /> :
    PASO === 9 ? <TransportMonitor_mp /> :
    PASO === 10 ? <DocumentTitle_mp /> :
    PASO === 11 ? <OnlineStatus_mp /> :
    PASO === 12 ? <WindowSize_mp /> :
    PASO === 13 ? <LiveClock_mp /> :
    PASO === 14 ? <SearchWithEffect_mp /> :
    PASO === 15 ? <DebounceSearch_mp /> :
    PASO === 16 ? <FetchUser_mp /> :
    PASO === 17 ? <AutoFocusInput_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}

