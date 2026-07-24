// src/AppHome.tsx
/*
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MuiShell      from './components/mui/MuiShell'
import DashboardPage from './pages/DashboardPage'
import AboutPage     from './pages/AboutPage'

export default function AppHome() {
  return (
    <BrowserRouter>
      <MuiShell>
        <Routes>
          <Route path="/"      element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </MuiShell>
    </BrowserRouter>
  )
}*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MuiShell_mp from './components/mui/MuiShell_mp'
import DashboardPage_mp from './pages/DashboardPage_mp'
import AboutPage_mp from './pages/AboutPage_mp'

export default function AppHome() {
  return (
    <BrowserRouter>
      <MuiShell_mp>
        <Routes>
          <Route path="/" element={<DashboardPage_mp />} />
          <Route path="/about" element={<AboutPage_mp />} />
        </Routes>
      </MuiShell_mp>
    </BrowserRouter>
  )
}