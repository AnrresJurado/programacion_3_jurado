// src/components/UserProfileCard.tsx

interface UserProfileCardProps {
  id: string
  nombre: string
  tipo: string
  edad: number
  precio: number
}

export default function UserProfileCard({
  id,
  nombre,
  tipo,
  edad,
  precio,
}: UserProfileCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        maxWidth: 400,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>{id}</h2>
        <span
          style={{
            backgroundColor: tipo ? '#d4edda' : '#f8d7da',
            color: tipo ? '#155724' : '#721c24',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 13,
          }}
        >
          {tipo}
        </span>
      </div>

      <p style={{ margin: '0 0 12px', fontSize: 13, color: '#888' }}>
        Nombre: <strong>{nombre}</strong>
      </p>

      <p style={{ fontStyle: 'italic', color: '#444' }}>{edad}</p>

      <p style={{ paddingLeft: 18, margin: 0 }}>
        {precio}
      </p>
    </div>
  )
}