/*
import AppHome from './AppHome'
import AppShadcn from './AppLab'

function App() {
  return (
  <>
    <AppShadcn />
  </>
  )
}

export default App*/

import { useState } from 'react';
import AppHome from './AppHome';
import AppLab from './AppLab';
import AppShadcn from './AppShadcn';

export default function App() {
  const [mode, setMode] = useState<'home' | 'lab' | 'shadcn'>('home');

  return (
    <div>
      <div className="bg-slate-900 border-b border-white/10 p-2 flex justify-end gap-2">
        <button
          className={`px-3 py-1 text-xs rounded-lg font-semibold transition ${
            mode === 'home' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white/70 hover:bg-slate-700'
          }`}
          onClick={() => setMode('home')}
        >
          Portal Principal TW
        </button>
        <button
          className={`px-3 py-1 text-xs rounded-lg font-semibold transition ${
            mode === 'lab' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white/70 hover:bg-slate-700'
          }`}
          onClick={() => setMode('lab')}
        >
          Laboratorio Tailwind (LAB)
        </button>
        <button
          className={`px-3 py-1 text-xs rounded-lg font-semibold transition ${
            mode === 'shadcn' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-white/70 hover:bg-slate-700'
          }`}
          onClick={() => setMode('shadcn')}
        >
          Shadcn UI (LAB)
        </button>
      </div>

      {mode === 'home' && <AppHome />}
      {mode === 'lab' && <AppLab />}
      {mode === 'shadcn' && <AppShadcn />}
    </div>
  );
}