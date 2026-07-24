// src/AppLab.tsx
/*
import { useState } from 'react'
import FormularioUsuario from './components/shades/FormularioUsuario';
import TarjetaProducto from './components/shades/TarjetaProducto';

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex items-center gap-4 border-b border-white/10 bg-slate-900 px-4 py-2">
        <span className="font-bold text-white text-sm">Tailwind v4 LAB</span>
        <select
          className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1 text-sm text-white outline-none"
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="buttons">Buttons</option>
          <option value="alert">Alerts</option>
          <option value="card">Cards</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
        </select>
      </div>

      {lab === 'form' && <FormularioUsuario />}
      {lab === 'card' && <TarjetaProducto />}
    </div>
  )
}*/

import { useState } from 'react';
import FormularioUsuario_mp from './components/shades/FormularioUsuario_mp';
import TarjetaProducto_mp from './components/shades/TarjetaProducto_mp';

type ShadKey = 'card' | 'form';

export default function AppShadcn() {
  const [shad, setShad] = useState<ShadKey>('card');

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="flex items-center gap-4 border-b border-white/10 bg-slate-900 px-4 py-2 mb-6 rounded-xl">
        <span className="font-bold text-white text-sm">🚚 Shadcn UI LAB (_mp)</span>
        <select
          className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1 text-sm text-white outline-none"
          value={shad}
          onChange={(e) => setShad(e.target.value as ShadKey)}
        >
          <option value="card">Tarjeta de Unidad (Card)</option>
          <option value="form">Registro Operador (Modal Dialog)</option>
        </select>
      </div>

      <div className="flex justify-center items-center min-h-[300px]">
        {shad === 'card' && <TarjetaProducto_mp />}
        {shad === 'form' && <FormularioUsuario_mp />}
      </div>
    </div>
  );
}