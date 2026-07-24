// src/App.tsx (para probar el ejercicio)

import UserProfileCard from './components/AnimalesProfileCard'

interface UserProfileCardProps {
  id: string
  nombre: string
  tipo: string
  edad: number
  precio: number
}

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <UserProfileCard
        id="1"
        nombre="Mailo"
        tipo="Doberman"
        edad= 
        precio= 12
      />
    </main>
  )
}