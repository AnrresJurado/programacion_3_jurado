import { useState } from 'react'
import { Alert, Button, Space, Typography } from 'antd'

const { Title, Text } = Typography

export default function LabAntAlert_mp() {
  const [show, setShow] = useState(true)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Alertas del Sistema (_mp)</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Notificaciones de peajes, tráfico y estado de despacho.
      </Text>

      <Space direction="vertical" style={{ width: '100%', marginBottom: 20 }}>
        <Alert message="Información GPS: Señal satelital estable." type="info" showIcon />
        <Alert message="Despacho exitoso: La unidad PBX-1024 ha arribado a puerto." type="success" showIcon />
        <Alert message="Advertencia: Mantenimiento preventivo requerido en 500 km." type="warning" showIcon />
        <Alert message="Error: Bloqueo de vía reportado en Alóag - Santo Domingo." type="error" showIcon />
      </Space>

      <Text strong style={{ display: 'block', marginBottom: 8 }}>Alerta Descartable (Closable)</Text>
      <Space direction="vertical" style={{ width: '100%', marginBottom: 16 }}>
        {show && (
          <Alert
            message="Novedad de Carretera"
            description="Haz clic en la X para descartar el reporte de retención en balanza."
            type="success"
            showIcon
            closable
            onClose={() => setShow(false)}
          />
        )}
      </Space>
      <Button onClick={() => setShow(true)}>Reactivar Alerta</Button>
    </div>
  )
}