import { Table, Tag, Typography, Progress } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Title, Text } = Typography

interface TransportRow {
  key: number;
  cliente: string;
  unidad: string;
  flete: number;
  progreso: number;
  estado: 'completado' | 'en_transito' | 'cancelado';
}

const DATA: TransportRow[] = [
  { key: 1, cliente: 'Corporación Favorita', unidad: 'PBX-1024 (Pesado)', flete: 1200, progreso: 100, estado: 'completado' },
  { key: 2, cliente: 'Pronaca S.A.', unidad: 'PBA-3092 (Thermo)', flete: 850, progreso: 65, estado: 'en_transito' },
  { key: 3, cliente: 'Holcim Ecuador', unidad: 'PCH-4410 (MACK)', flete: 1500, progreso: 100, estado: 'completado' },
  { key: 4, cliente: 'Plásticos del Litoral', unidad: 'GSU-8812 (Cargo)', flete: 420, progreso: 0, estado: 'cancelado' },
  { key: 5, cliente: 'Grupo Nutresa', unidad: 'MAZ-9921 (Hino)', flete: 980, progreso: 40, estado: 'en_transito' },
]

const STATUS_COLOR: Record<TransportRow['estado'], string> = {
  completado: 'success',
  en_transito: 'warning',
  cancelado: 'error',
}

const STATUS_LABEL: Record<TransportRow['estado'], string> = {
  completado: 'Completado',
  en_transito: 'En Tránsito',
  cancelado: 'Cancelado',
}

const COLUMNS: ColumnsType<TransportRow> = [
  {
    title: 'Cliente Cargo',
    dataIndex: 'cliente',
    render: (v: string) => <Text strong>{v}</Text>,
  },
  { title: 'Unidad Asignada', dataIndex: 'unidad' },
  {
    title: 'Valor Flete',
    dataIndex: 'flete',
    align: 'right',
    render: (v: number) => <Text strong>${v.toLocaleString()}</Text>,
    sorter: (a, b) => a.flete - b.flete,
  },
  {
    title: 'Avance de Ruta',
    dataIndex: 'progreso',
    render: (v: number) => (
      <Progress percent={v} size="small" style={{ margin: 0 }} />
    ),
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    render: (v: TransportRow['estado']) => (
      <Tag color={STATUS_COLOR[v]}>{STATUS_LABEL[v]}</Tag>
    ),
    filters: [
      { text: 'Completado', value: 'completado' },
      { text: 'En Tránsito', value: 'en_transito' },
      { text: 'Cancelado', value: 'cancelado' },
    ],
    onFilter: (value, record) => record.estado === value,
  },
]

export default function AntSalesTable_mp() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 12 }}>Últimas Hojas de Ruta</Title>
      <Table<TransportRow>
        columns={COLUMNS}
        dataSource={DATA}
        pagination={{ pageSize: 4 }}
        size="middle"
      />
    </div>
  )
}