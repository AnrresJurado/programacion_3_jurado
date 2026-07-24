import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider_mp } from './contexts/ThemeContext_mp.tsx';
import { AuthProvider_mp }  from './contexts/AuthContext_mp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider_mp>
      <AuthProvider_mp>
        <App />
      </AuthProvider_mp>
    </ThemeProvider_mp>
  </StrictMode>,
);