// src/AppHome.tsx
/*
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout }        from 'antd'
import AntNavbar         from './components/antd/AntNavbar'
import AntFooter         from './components/antd/AntFooter'
import HomeDashboard     from './pages/HomeDashboard'
import AboutPage         from './pages/AboutPage'

const { Content } = Layout

export default function AppHome() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <AntNavbar />
        <Content>
          <Routes>
            <Route path="/"      element={<HomeDashboard />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Content>
        <AntFooter />
      </Layout>
    </BrowserRouter>
  )
}*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import AntNavbar_mp from './components/antd/AntNavbar_mp'
import AntFooter_mp from './components/antd/AntFooter_mp'
import HomeDashboard_mp from './pages/HomeDashboard_mp'
import AboutPage_mp from './pages/AboutPage_mp'

const { Content } = Layout

export default function AppHome() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <AntNavbar_mp />
        <Content>
          <Routes>
            <Route path="/" element={<HomeDashboard_mp />} />
            <Route path="/about" element={<AboutPage_mp />} />
          </Routes>
        </Content>
        <AntFooter_mp />
      </Layout>
    </BrowserRouter>
  )
}