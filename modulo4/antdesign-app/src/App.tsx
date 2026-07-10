/*
import AppLab from './AppLab'
import AppHome from './AppHome'

function App() {
  return (
  <>
    <AppLab />
    <AppHome />
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
      <div style={{ background: '#001529', padding: '8px 16px', textAlign: 'right' }}>
        <button
          onClick={() => setView('dashboard')}
          style={{
            marginRight: 8,
            padding: '4px 12px',
            borderRadius: 4,
            border: 'none',
            background: view === 'dashboard' ? '#1677ff' : '#141414',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Dashboard AntD
        </button>
        <button
          onClick={() => setView('lab')}
          style={{
            padding: '4px 12px',
            borderRadius: 4,
            border: 'none',
            background: view === 'lab' ? '#1677ff' : '#141414',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Laboratorio AntD (LAB)
        </button>
      </div>

      {view === 'dashboard' ? <AppHome /> : <AppLab />}
    </div>
  )
}