// Uso — el componente queda libre de gestionar el timer
import { useState }    from 'react'
import { useDebounce } from '../hooks/useDebounce'

export default function LiveSearch() {
  const [query, setQuery]  = useState('')
  const debouncedQuery     = useDebounce(query, 400)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Query activa (400ms): <strong>{debouncedQuery || '—'}</strong>
      </p>
    </div>
  )
}