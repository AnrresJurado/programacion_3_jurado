/*
import AppLab from './AppLab'

function App() {
  return (
  <>
    <AppLab />
  </>
  )
}

export default App*/

import { useState } from 'react'
import AppHome from './AppHome'
import AppLab from './AppLab'

export default function App() {
  const [view, setView] = useState<'dashboard' | 'lab'>('dashboard')

  return (
    <div>
      <div style={{ background: '#1976d2', padding: '8px 16px', textAlign: 'right' }}>
        <button
          onClick={() => setView('dashboard')}
          style={{
            marginRight: 8,
            padding: '4px 12px',
            borderRadius: 4,
            border: 'none',
            background: view === 'dashboard' ? '#0d47a1' : '#1565c0',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Portal Dashboard MUI
        </button>
        <button
          onClick={() => setView('lab')}
          style={{
            padding: '4px 12px',
            borderRadius: 4,
            border: 'none',
            background: view === 'lab' ? '#0d47a1' : '#1565c0',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Laboratorio MUI (LAB)
        </button>
      </div>

      {view === 'dashboard' ? <AppHome /> : <AppLab />}
    </div>
  )
}