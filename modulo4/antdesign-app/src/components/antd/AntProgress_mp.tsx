import { Card, Progress, Space, Typography } from 'antd'

const { Title, Text } = Typography

interface GoalProps {
  label: string;
  current: number;
  target: number;
  color: string;
}

const GOALS: GoalProps[] = [
  { label: 'Meta de Tonelaje Mensual (Ton)', current: 1450, target: 2000, color: '#1677ff' },
  { label: 'Unidades con Mantenimiento', current: 38, target: 40, color: '#52c41a' },
  { label: 'Hojas de Ruta Liquidadas', current: 120, target: 150, color: '#722ed1' },
]

export default function AntGoals_mp() {
  return (
    <Card style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 16 }}>Metas Operativas del Mes</Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        {GOALS.map((g) => {
          const percent = Math.round((g.current / g.target) * 100)
          return (
            <div key={g.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <Text style={{ fontSize: 13 }}>{g.label}</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {g.current.toLocaleString()} / {g.target.toLocaleString()}
                </Text>
              </div>
              <Progress
                percent={percent}
                strokeColor={g.color}
                size="small"
                style={{ margin: 0 }}
              />
            </div>
          )
        })}
      </Space>
    </Card>
  )
}