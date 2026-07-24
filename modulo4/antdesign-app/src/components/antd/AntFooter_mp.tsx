import { Layout, Typography } from 'antd'

const { Footer } = Layout
const { Text } = Typography

export default function AntFooter_mp() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Text type="secondary">
        TransLogix © {new Date().getFullYear()} — Sistema de Gestión con Ant Design v6 + React 19 (_mp)
      </Text>
    </Footer>
  )
}