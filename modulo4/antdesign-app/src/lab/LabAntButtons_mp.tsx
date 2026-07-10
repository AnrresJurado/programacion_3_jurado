import { Button, Space, Typography } from 'antd'

const { Title, Text } = Typography

export default function LabAntButtons_mp() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Botones Operativos (_mp)</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Variantes, tamaños y estados para la interfaz de choferes.
      </Text>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Variantes</Text>
      <Space wrap style={{ marginBottom: 20 }}>
        <Button type="primary">Iniciar Ruta</Button>
        <Button>Reporte General</Button>
        <Button type="dashed">Guía Borrador</Button>
        <Button type="link">Ver Mapa GPS</Button>
        <Button type="text">Pausa Turno</Button>
        <Button danger>Parada Emergencia</Button>
        <Button type="primary" danger>Cancelar Flete</Button>
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Tamaños</Text>
      <Space wrap style={{ marginBottom: 20 }}>
        <Button type="primary" size="large">Botón Grande</Button>
        <Button type="primary">Estándar</Button>
        <Button type="primary" size="small">Compacto</Button>
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Estados</Text>
      <Space wrap>
        <Button type="primary" loading>Sincronizando GPS</Button>
        <Button type="primary" disabled>Camión Inactivo</Button>
      </Space>
    </div>
  )
}