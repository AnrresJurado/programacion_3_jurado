// src/AppLab.tsx

/*
import { useState } from 'react'
import { Layout, Menu } from 'antd'
import LabAntButtons from './lab/LabAntButtons'
import LabAntAlert   from './lab/LabAntAlert'
import LabAntCard    from './lab/LabAntCard'
import LabAntForm    from './lab/LabAntForm'
import LabAntTable   from './lab/LabAntTable'

const { Header, Content } = Layout

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

const ITEMS = [
  { key: 'buttons', label: 'Buttons' },
  { key: 'alert',   label: 'Alert'   },
  { key: 'card',    label: 'Cards'   },
  { key: 'form',    label: 'Form'    },
  { key: 'table',   label: 'Table'   },
]

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ color: 'white', fontWeight: 700, whiteSpace: 'nowrap' }}>
          Ant Design v6 LAB
        </span>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[lab]}
          items={ITEMS}
          onClick={({ key }) => setLab(key as LabKey)}
          style={{ flex: 1 }}
        />
      </Header>
      <Content style={{ padding: '24px 0' }}>
        {lab === 'buttons' && <LabAntButtons />}
        {lab === 'alert'   && <LabAntAlert />}
        {lab === 'card'    && <LabAntCard />}
        {lab === 'form'    && <LabAntForm />}
        {lab === 'table'   && <LabAntTable />}
      </Content>
    </Layout>
  )
}*/

import { useState } from 'react'
import { Layout, Menu } from 'antd'
import LabAntButtons_mp from './lab/LabAntButtons_mp'
import LabAntAlert_mp from './lab/LabAntAlert_mp'
import LabAntCard_mp from './lab/LabAntCard_mp'
import LabAntForm_mp from './lab/LabAntForm_mp'
import LabAntTable_mp from './lab/LabAntTable_mp'

const { Header, Content } = Layout

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

const ITEMS = [
  { key: 'buttons', label: 'Buttons (Botones)' },
  { key: 'alert', label: 'Alert (Alertas)' },
  { key: 'card', label: 'Cards (Tarjetas)' },
  { key: 'form', label: 'Form (Formulario)' },
  { key: 'table', label: 'Table (Tabla)' },
]

export default function AppLab() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ color: 'white', fontWeight: 700, whiteSpace: 'nowrap' }}>
          🚚 Ant Design v6 LAB (_mp)
        </span>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[lab]}
          items={ITEMS}
          onClick={({ key }) => setLab(key as LabKey)}
          style={{ flex: 1 }}
        />
      </Header>
      <Content style={{ padding: '24px 0' }}>
        {lab === 'buttons' && <LabAntButtons_mp />}
        {lab === 'alert' && <LabAntAlert_mp />}
        {lab === 'card' && <LabAntCard_mp />}
        {lab === 'form' && <LabAntForm_mp />}
        {lab === 'table' && <LabAntTable_mp />}
      </Content>
    </Layout>
  )
}