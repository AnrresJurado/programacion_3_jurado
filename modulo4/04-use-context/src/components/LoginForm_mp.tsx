import { useState } from 'react';
import { useAuth_mp } from '../contexts/AuthContext_mp';

export default function LoginForm_mp() {
  const { state, login } = useAuth_mp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login(email, password);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}
    >
      <h3>🚚 Acceso al Sistema de Transportes (_mp)</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo de operador/chofer"
        disabled={state.isLoading}
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Clave de acceso"
        disabled={state.isLoading}
        style={inputStyle}
      />

      {state.error && (
        <p style={{ margin: 0, fontSize: 13, color: '#ef4444' }}>{state.error}</p>
      )}

      <button
        type="submit"
        disabled={state.isLoading || !email || !password}
        style={{
          padding: '10px',
          background: state.isLoading ? '#93c5fd' : '#0284c7',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: state.isLoading ? 'not-allowed' : 'pointer',
          fontWeight: 500,
        }}
      >
        {state.isLoading ? 'Ingresando al sistema...' : 'Iniciar Turno'}
      </button>
    </form>
  );
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: 14,
};