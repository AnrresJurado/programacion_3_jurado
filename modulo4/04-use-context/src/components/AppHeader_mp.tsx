import { useTheme_mp } from '../contexts/ThemeContext_mp';
import { useAuth_mp } from '../contexts/AuthContext_mp';
import ThemeToggle_mp from './ThemeToggle_mp';
import UserBadge_mp from './UserBadge_mp';

export default function AppHeader_mp() {
  const { theme } = useTheme_mp();
  const { state: auth } = useAuth_mp();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        background: theme === 'dark' ? '#111827' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
          🚛 Control de Despacho de Flota (_mp)
        </h1>
        {auth.user && (
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
            Operador Activo: {auth.user.role}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ThemeToggle_mp />
        <UserBadge_mp />
      </div>
    </header>
  );
}