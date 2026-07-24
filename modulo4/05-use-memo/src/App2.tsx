// src/App.tsx

import ModalDemo        from './components/ModalDemo'
import QuantitySelector from './components/QuantitySelector'
import ThemeSelector    from './components/ThemeSelector'
import LiveSearch       from './components/LiveSearch'
import PostList         from './components/PostList'
import ResponsiveLayout from './components/ResponsiveLayout'
import CodeBlock        from './components/CodeBlock'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  ModalDemo        — useToggle: modal con overlay                 │
// │  2  QuantitySelector — useCounter: contador con límites             │
// │  3  ThemeSelector    — useLocalStorage: tema persistente            │
// │  4  LiveSearch       — useDebounce: búsqueda con delay              │
// │  5  PostList         — useFetch: lista de posts con fetch genérico  │
// │  6  ResponsiveLayout — useMediaQuery + useWindowSize: layout        │
// │  7  CodeBlock        — useClipboard: copiar al portapapeles         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

const EXAMPLE_CODE = `export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = useCallback(() => setValue(v => !v), [])
  return { value, toggle }
}`

export default function App() {
  const content =
    PASO === 1 ? <ModalDemo /> :
    PASO === 2 ? <QuantitySelector /> :
    PASO === 3 ? <ThemeSelector /> :
    PASO === 4 ? <LiveSearch /> :
    PASO === 5 ? <PostList /> :
    PASO === 6 ? <ResponsiveLayout /> :
    PASO === 7 ? <CodeBlock code={EXAMPLE_CODE} language="tsx" /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}