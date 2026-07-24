import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage_mp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    // replace: true evita regresar al login con el botón de atrás
    navigate('/dashboard', { replace: true });
  }

  return (
    <div style={{ maxWidth: 340, margin: '20px auto' }}>
      <h1 style={{ fontSize: 22, marginBottom: 20 }}>🚛 Iniciar Sesión de Operador (_mp)</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo corporativo (ej. chofer@transporte.com)"
          required
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Clave de acceso"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px',
            background: loading ? '#93c5fd' : '#0284c7',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 500,
          }}
        >
          {loading ? 'Ingresando al sistema...' : 'Iniciar Turno'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 14,
};