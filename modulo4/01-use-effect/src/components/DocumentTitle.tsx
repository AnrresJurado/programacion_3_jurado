// src/components/DocumentTitle.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
    const randomNumber=Math.random();
  useEffect(() => {
    document.title = 'Mi App con React 19'
    console.log('DocumentTitle montado, título cambiado')
    console.log('NUmero cualquiera', randomNumber)

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'React App'
      console.log('DocumentTitle desmontado, título restaurado')
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al montar este componente.
    </p>
  )
}