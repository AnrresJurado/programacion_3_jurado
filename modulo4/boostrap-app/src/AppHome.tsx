// src/AppHome.tsx
/*
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RBNavbar from './components/rb/RBNavbar'
import RBFooter from './components/rb/RBFooter'
import HomeRB   from './pages/HomeRB'
import AboutRB  from './pages/AboutRB'
import ProyectsRB  from './pages/ProyectsRB'

export default function AppHome() {
  return (
    <BrowserRouter>
      <RBNavbar />
      <Routes>
        <Route path="/"      element={<HomeRB />} />
        <Route path="/about" element={<AboutRB />} />
        <Route path="/proyects" element={<ProyectsRB />} />
      </Routes>
      <RBFooter />
    </BrowserRouter>
  )
}*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RBNavbar_mp from './components/rb/RBNavbar_mp';
import RBFooter_mp from './components/rb/RBFooter_mp';
import HomeRB_mp from './pages/HomeRB_mp';
import AboutRB_mp from './pages/AboutRB_mp';
import ProyectsRB_mp from './pages/ProyectsRB_mp';

export default function AppHome() {
  return (
    <BrowserRouter>
      <RBNavbar_mp />
      <Routes>
        <Route path="/" element={<HomeRB_mp />} />
        <Route path="/about" element={<AboutRB_mp />} />
        <Route path="/proyects" element={<ProyectsRB_mp />} />
      </Routes>
      <RBFooter_mp />
    </BrowserRouter>
  );
}