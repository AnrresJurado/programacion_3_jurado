import { Card, Tag, Space, Typography, Row, Col } from 'antd'

const { Title, Text } = Typography

interface UnitCardProps {
  name: string;
  category: string;
  price: number;
  active: boolean;
}

function UnitCard({ name, category, price, active }: UnitCardProps) {
  return (
    <Card
      hoverable
      styles={{ body: { display: 'flex', flexDirection: 'column', gap: 8 } }}
    >
      <Text strong>🚛 {name}</Text>
      <Text type="secondary" style={{ fontSize: 13 }}>Categoría: {category}</Text>
      <Space>
        <Tag color={active ? 'success' : 'default'}>
          {active ? 'Operativo' : 'En Taller'}
        </Tag>
        <Text strong>${price.toFixed(2)}/día</Text>
      </Space>
    </Card>
  )
}

export default function LabAntCard_mp() {
  const units: UnitCardProps[] = [
    { name: 'PBX-1024 (Mack)', category: 'Pesado', price: 450.00, active: true },
    { name: 'PBA-3092 (Hino)', category: 'Refrigerado', price: 620.00, active: true },
    { name: 'GSU-8812 (Chevrolet)', category: 'Liviano', price: 180.00, active: false },
  ]

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Tarjetas de Flota (_mp)</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Unidades de transporte tipadas con Grid responsivo de Ant Design.
      </Text>
      <Row gutter={[16, 16]}>
        {units.map((u) => (
          <Col key={u.name} xs={24} sm={12} md={8}>
            <UnitCard {...u} />
          </Col>
        ))}
      </Row>
    </div>
  )
}