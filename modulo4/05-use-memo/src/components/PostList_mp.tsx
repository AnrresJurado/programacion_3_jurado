import { useFetch } from '../hooks/useFetch';

interface NovedadRuta {
  id: number;
  title: string;
  body: string;
}

export default function PostList_mp() {
  const { data: novedades, loading, error } = useFetch<NovedadRuta[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );

  if (loading) return <p style={{ color: '#6b7280' }}>⏳ Cargando novedades del centro de control...</p>;
  if (error)   return <p style={{ color: '#ef4444' }}>Error: {error}</p>;

  return (
    <div style={{ maxWidth: 500 }}>
      <h3>📢 Novedades y Monitoreo de Vías (_mp)</h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {novedades?.map((item) => (
          <li key={item.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, background: '#fafafa' }}>
            <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 14, color: '#0284c7' }}>
              📍 Alerta #{item.id}: {item.title}
            </p>
            <p style={{ margin: 0, fontSize: 13, color: '#4b5563' }}>
              {item.body.slice(0, 90)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}