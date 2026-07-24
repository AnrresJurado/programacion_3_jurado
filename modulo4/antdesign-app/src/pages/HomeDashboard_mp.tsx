import { Typography } from 'antd'
import AntKpis_mp from '../components/antd/AntKpis_mp'
import AntGoals_mp from '../components/antd/AntProgress_mp'
import AntSalesTable_mp from '../components/antd/AntSalesTable_mp'

const { Title, Text } = Typography

export default function HomeDashboard_mp() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px' }}>
      <Title level={3} style={{ marginBottom: 4 }}>Dashboard de Flotas y Despacho (_mp)</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 24 }}>
        KPIs, metas de transporte y últimas hojas de ruta registradas.
      </Text>
      <AntKpis_mp />
      <AntGoals_mp />
      <AntSalesTable_mp />
    </div>
  )
}