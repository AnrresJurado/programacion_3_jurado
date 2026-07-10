import { useState } from 'react'
import { Form, Input, Select, Button, Alert, Typography } from 'antd'

const { Title, Text } = Typography
const { Option } = Select

interface FormValues {
  name: string
  email: string
  role: string
}

export default function LabAntForm_mp() {
  const [success, setSuccess] = useState(false)
  const [form] = Form.useForm<FormValues>()

  function onFinish(_values: FormValues) {
    setSuccess(true)
    form.resetFields()
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
      <Title level={4} style={{ marginBottom: 4 }}>LAB: Formulario de Operadores (_mp)</Title>
      <Text type="secondary" style={{ display: 'block', marginBottom: 20 }}>
        Validación integrada y feedback con Form.useForm para personal de flota.
      </Text>

      {success && (
        <Alert
          message="Registro de operador guardado correctamente"
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 480 }}
      >
        <Form.Item
          label="Nombre completo del conductor"
          name="name"
          rules={[
            { required: true, message: 'El nombre es requerido' },
            { min: 2, message: 'Mínimo 2 caracteres' },
          ]}
        >
          <Input placeholder="Andrés Jurado" />
        </Form.Item>

        <Form.Item
          label="Correo corporativo"
          name="email"
          rules={[
            { required: true, message: 'El email es requerido' },
            { type: 'email', message: 'Formato de email inválido' },
          ]}
        >
          <Input placeholder="chofer@transporte.com" />
        </Form.Item>

        <Form.Item
          label="Rol operativo"
          name="role"
          initialValue="chofer"
        >
          <Select>
            <Option value="chofer">Chofer de Flota</Option>
            <Option value="despachador">Despachador</Option>
            <Option value="admin">Administrador Logístico</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Registrar Operador</Button>
        </Form.Item>
      </Form>
    </div>
  )
}