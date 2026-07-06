/*

// src/App.tsx — rutas anidadas
import { Routes, Route } from 'react-router-dom'
import RootLayout       from './layouts/RootLayout'
import DashboardLayout  from './layouts/DashboardLayout'
import HomePage         from './pages/HomePage'
import ProductsPage     from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutPage        from './pages/AboutPage'
import LoginPage        from './pages/LoginPage'
import NotFoundPage     from './pages/NotFoundPage'
import ZodRegistrationForm from './components/ZodRegistrationForm'

// Páginas del dashboard (simples por ahora)
function Overview()   { return <h2>Resumen</h2> }
function Analytics()  { return <h2>Analítica</h2> }
function SettingsPage(){ return <h2>Configuración</h2> }

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index          element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="about"   element={<AboutPage />} />
        <Route path="login"   element={<LoginPage />} />
        <Route path="registro"   element={<ZodRegistrationForm />} />

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index          element={<Overview />} />
          <Route path="analytics"  element={<Analytics />} />
          <Route path="settings"   element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}*/

import { Routes, Route } from 'react-router-dom';
import RootLayout_mp from './layouts/RootLayout_mp';
import DashboardLayout_mp from './layouts/DashboardLayout_mp';
import AboutPage_mp from './pages/AboutPage_mp';
import LoginPage_mp from './pages/LoginPage_mp';
import NotFoundPage_mp from './pages/NotFoundPage_mp';
import ProductDetailPage_mp from './pages/ProductDetailPage_mp';
import ProductsPage_mp from './pages/ProductsPage_mp';
import ZodRegistrationForm_mp from './components/ZodRegistrationForm_mp';

function Overview_mp() { return <h2>📊 Resumen General de Unidades en Ruta</h2>; }
function Analytics_mp() { return <h2>📡 Telemetría y Monitoreo GPS en Tiempo Real</h2>; }
function SettingsPage_mp() { return <h2>⚙️ Configuración del Sistema de Flotas</h2>; }

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout_mp />}>
        <Route index element={<h2>🚛 Bienvenido al Portal de Gestión de Transporte (_mp)</h2>} />
        <Route path="products" element={<ProductsPage_mp />} />
        <Route path="products/:id" element={<ProductDetailPage_mp />} />
        <Route path="about" element={<AboutPage_mp />} />
        <Route path="login" element={<LoginPage_mp />} />
        <Route path="registro" element={<ZodRegistrationForm_mp />} />

        <Route path="dashboard" element={<DashboardLayout_mp />}>
          <Route index element={<Overview_mp />} />
          <Route path="analytics" element={<Analytics_mp />} />
          <Route path="settings" element={<SettingsPage_mp />} />
        </Route>

        <Route path="*" element={<NotFoundPage_mp />} />
      </Route>
    </Routes>
  );
}