// src/components/InlineEditor.tsx

import { useRef, useState } from 'react'

export default function InlineEditor() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Escribe algo y guarda')
  const inputRef2 = useRef<HTMLInputElement>(null)
  const [saved2, setSaved2] = useState('Escribe algo y guarda')

  function handleSave() {
    // Se lee el valor directamente del DOM — sin useState intermedio
    const value = inputRef.current?.value ?? ''
    setSaved(value.trim() === '' ? '(vacío)' : value)

    const value2 = inputRef2.current?.value ?? ''
    setSaved2(value2.trim() === '' ? '(vacío)' : value2)
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = ''  
    }
    if (inputRef2.current) {
      inputRef2.current.value = ''
      inputRef2.current.focus()
    }
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Guardado: <strong style={{ color: '#111827' }}>{saved}</strong>
      </p>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Guardado 2: <strong style={{ color: '#111827' }}>{saved2}</strong>
      </p>

      <input
        ref={inputRef}
        defaultValue=""
        placeholder="Campo 1: escribe sin causar re-renders..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={inputRef2}
        defaultValue=""
        placeholder="Campo 2: escribe sin causar re-renders..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}