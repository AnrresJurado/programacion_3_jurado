/*
import AppHome from './AppHome'

function App () {
  return (
    <>
      <AppHome/>
    </>
  )
}

export default App*/

import { useState } from 'react';
import AppHome from './AppHome';
import AppLab from './AppLab';

export default function App() {
  const [mode, setMode] = useState<'home' | 'lab'>('home');

  return (
    <div>
      <div className="bg-dark text-white p-2 d-flex justify-content-end gap-2">
        <button
          className={`btn btn-sm ${mode === 'home' ? 'btn-primary' : 'btn-outline-light'}`}
          onClick={() => setMode('home')}
        >
          Portal Principal
        </button>
        <button
          className={`btn btn-sm ${mode === 'lab' ? 'btn-primary' : 'btn-outline-light'}`}
          onClick={() => setMode('lab')}
        >
          Laboratorio de Componentes (LAB)
        </button>
      </div>

      {mode === 'home' ? <AppHome /> : <AppLab />}
    </div>
  );
}