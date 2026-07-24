import { Card, Col, Row, Statistic, Typography } from 'antd'
import {
  ArrowUpOutlined,
  CarOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'

const { Title } = Typography

interface KpiData {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  trend: number;
  icon: React.ReactNode;
  color: string;
}

const KPIS: KpiData[] = [
  { title: 'Facturación Fletes', value: 24850, prefix: '$', trend: 14.2, icon: <ArrowUpOutlined />, color: '#1677ff' },
  { title: 'Despachos Activos', value: 86, trend: 9.5, icon: <CarOutlined />, color: '#52c41a' },
  { title: 'Conductores en Ruta', value: 42, trend: 3.8, icon: <TeamOutlined />, color: '#722ed1' },
  { title: 'Entregas a Tiempo', value: 98.4, suffix: '%', trend: 1.2, icon: <CheckCircleOutlined />, color: '#fa8c16' },
]

export default function AntKpis_mp() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 12 }}>Resumen de Operación</Title>
      <Row gutter={[16, 16]}>
        {KPIS.map((kpi) => (
          <Col key={kpi.title} xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title={kpi.title}
                value={kpi.value}
                suffix={kpi.suffix}
                prefix={kpi.prefix}
                precision={kpi.suffix === '%' ? 1 : 0}
                valueStyle={{ color: kpi.color }}
              />
              <div style={{ marginTop: 8, fontSize: 12, color: kpi.trend > 0 ? '#52c41a' : '#ff4d4f' }}>
                {kpi.trend > 0 ? '↑' : '↓'} {Math.abs(kpi.trend)}% vs mes anterior
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}