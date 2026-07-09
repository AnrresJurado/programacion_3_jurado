// src/AppLab.tsx
/*
import { useState } from 'react'
import LabRbButtons from './lab/LabRbButtons'
import LabRbAlert   from './lab/LabRbAlert'
import LabRbCard    from './lab/LabRbCard'
import LabRbForm    from './lab/LabRbForm'
import LabRbTable   from './lab/LabRbTable'

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div>
      <div className="border-bottom bg-light px-3 py-2 d-flex align-items-center gap-3">
        <span className="fw-bold">React-Bootstrap LAB</span>
        <select
          className="form-select form-select-sm"
          style={{ maxWidth: 180 }}
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="buttons">Buttons</option>
          <option value="alert">Alert</option>
          <option value="card">Cards</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
        </select>
      </div>

      {lab === 'buttons' && <LabRbButtons />}
      {lab === 'alert'   && <LabRbAlert />}
      {lab === 'card'    && <LabRbCard />}
      {lab === 'form'    && <LabRbForm />}
      {lab === 'table'   && <LabRbTable />}
    </div>
  )
}*/

import { useState } from 'react';
import LabRbButtons_mp from './lab/LabRbButtons_mp';
import LabRbAlert_mp from './lab/LabRbAlert_mp';
import LabRbCard_mp from './lab/LabRbCard_mp';
import LabRbForm_mp from './lab/LabRbForm_mp';
import LabRbTable_mp from './lab/LabRbTable_mp';

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table';

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons');

  return (
    <div>
      <div className="border-bottom bg-light px-3 py-2 d-flex align-items-center gap-3">
        <span className="fw-bold">🚚 React-Bootstrap LAB (_mp)</span>
        <select
          className="form-select form-select-sm"
          style={{ maxWidth: 200 }}
          value={lab}
          onChange={(e) => setLab(e.target.value as LabKey)}
        >
          <option value="buttons">Buttons (Botones)</option>
          <option value="alert">Alert (Alertas)</option>
          <option value="card">Cards (Tarjetas)</option>
          <option value="form">Form (Formulario)</option>
          <option value="table">Table (Tabla)</option>
        </select>
      </div>

      {lab === 'buttons' && <LabRbButtons_mp />}
      {lab === 'alert' && <LabRbAlert_mp />}
      {lab === 'card' && <LabRbCard_mp />}
      {lab === 'form' && <LabRbForm_mp />}
      {lab === 'table' && <LabRbTable_mp />}
    </div>
  );
}