import { Card, Typography, List } from 'antd'

const { Title } = Typography

const STACK = [
  'React 19 + TypeScript',
  'Ant Design v6',
  'React Router v7',
  'Módulo de Gestión Logística y Transportes',
]

export default function AboutPage_mp() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px 16px' }}>
      <Title level={3} style={{ marginBottom: 20 }}>Acerca de TransLogix (_mp)</Title>
      <Card>
        <List
          dataSource={STACK}
          renderItem={(item) => <List.Item>🚛 {item}</List.Item>}
        />
      </Card>
    </div>
  )
}