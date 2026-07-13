// src/AppHome.tsx
/*
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TwNavbar from './components/tw/TwNavbar'
import TwFooter from './components/tw/TwFooter'
import HomeTW   from './pages/HomeTW'
import AboutTW  from './pages/AboutTW'
import ContactUsTW from './pages/ContactUsTW'

export default function AppHome() {
  return (
    <BrowserRouter>
      <TwNavbar />
      <Routes>
        <Route path="/"      element={<HomeTW />} />
        <Route path="/about" element={<AboutTW />} />
        <Route path="/ContactUsTW" element={<ContactUsTW />} />
      </Routes>
      <TwFooter />
    </BrowserRouter>
  )
}*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TwNavbar_mp from './components/tw/TwNavbar_mp';
import TwFooter_mp from './components/tw/TwFooter_mp';
import HomeTW_mp from './pages/HomeTW_mp';
import AboutTW_mp from './pages/AboutTW_mp';
import ContactUsTW_mp from './pages/ContactUsTW_mp';

export default function AppHome() {
  return (
    <BrowserRouter>
      <TwNavbar_mp />
      <Routes>
        <Route path="/" element={<HomeTW_mp />} />
        <Route path="/about" element={<AboutTW_mp />} />
        <Route path="/ContactUsTW" element={<ContactUsTW_mp />} />
      </Routes>
      <TwFooter_mp />
    </BrowserRouter>
  );
}