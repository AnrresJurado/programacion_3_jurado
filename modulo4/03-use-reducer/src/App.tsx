// src/App.tsx

import BasicCounter     from './components/BasicCounter'
import RegistrationForm from './components/RegistrationForm'
import ShoppingCart     from './components/ShoppingCart'
import BasicCounter_mp from './components/BasicCounter_mp';
import RegistrationForm_mp from './components/RegistrationForm_mp';
import ShoppingCart_mp from './components/ShoppingCart_mp';

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  BasicCounter      — useReducer básico con acciones tipadas      │
// │  2  RegistrationForm  — formulario con validación y estados de envío│
// │  3  ShoppingCart      — carrito de compras completo                 │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 6

export default function App() {
  const content =
    PASO === 1 ? <BasicCounter /> :
    PASO === 2 ? <RegistrationForm /> :
    PASO === 3 ? <ShoppingCart /> :
    PASO === 4 ? <BasicCounter_mp /> :
    PASO === 5 ? <RegistrationForm_mp /> :
    PASO === 6 ? <ShoppingCart_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}