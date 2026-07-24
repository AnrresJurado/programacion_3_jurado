import { useState } from 'react'
import { Table, Tag, Input, Typography, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Title, Text } = Typography

interface Unit {
  key: number
  placa: string
  categoria: string
  flete: number
  activa: boolean
}

const UNIDADES: Unit[] = [
  { key: 1, placa: 'PBX-1024 (Mack)', categoria: 'Pesado', flete: 450.00, activa: true },
  { key: 2, placa: 'PBA-3092 (Hino)', categoria: 'Refrigerado', flete: 620.00, activa: true },
  { key: 3, placa: 'GSU-8812 (Chevrolet)', categoria: 'Liviano', flete: 180.00, activa: false },
  { key: 4, placa: 'PCH-4410 (MACK)', categoria: 'Pesado', flete: 500.00, activa: true },
  { key: 5, placa: 'MAZ-9921 (Hino Thermo)', categoria: 'Refrigerado', flete: 580.00, activa: false },
]

const COLUMNS: ColumnsType<Unit> = [
  { title: '#', dataIndex: 'key', width: 50 },
  {
    title: 'Placa / Unidad',
    dataIndex: 'placa',
    render: (v: string) => <Text strong>🚛 {v}</Text>,
  },
  { title: 'Categoría', dataIndex: 'categoria' },
  {
    title: 'Flete Base',
    dataIndex: 'flete',
    align: 'right',
    render: (v: number) => <Text strong>${v.toFixed(2)}</Text>,
    sorter: (a, b) => a.flete - b.flete,
  },
  {
    title: 'Estado Operativo',
    dataIndex: 'activa',
    render: (v: boolean) => (
      <Tag color={v ? 'success' : 'default'}>{v ? 'Operativo' : 'Inactivo'}</Tag>
    ),
    filters: [
      { text: 'Operativo', value: true },
      { text: 'Inactivo', value: false },
    ],
    onFilter: (value, record) => record.activa === value,
  },
]

export default function LabAntTable_mp() {
  const [search, setSearch] = useState('')

  const filtered = UNIDADES.filter(p =>
    p.placa.toLowerCase().includes(search.toLowerCase()) ||
    p.categoria.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Tabla de Control de Flotas (_mp)</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
        Tabla de Ant Design con ColumnsType, ordenamiento por flete y filtrado por estado.
      </Text>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input.Search
          placeholder="Buscar por placa o categoría..."
          allowClear
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 360 }}
        />
        <Table<Unit>
          columns={COLUMNS}
          dataSource={filtered}
          pagination={{ pageSize: 4 }}
          size="middle"
        />
      </Space>
    </div>
  )
}