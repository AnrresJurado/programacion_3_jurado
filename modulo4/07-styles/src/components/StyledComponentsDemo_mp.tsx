import styled from 'styled-components';

interface BtnProps {
  $variant?: 'primary' | 'outline';
}

const Card = styled.div`
  border: 1px solid #e2e8f0;
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  color: #0284c7;
  font-weight: 800;
`;

const Parrafo = styled.p`
  margin: 0 0 12px 0;
  color: #64748b;
  font-size: 14px;
`;

const Btn = styled.button<BtnProps>`
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid #0284c7;
  background: ${(p) => (p.$variant === 'outline' ? 'transparent' : '#0284c7')};
  color: ${(p) => (p.$variant === 'outline' ? '#0284c7' : 'white')};
  transition: filter 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function StyledComponentsDemo_mp() {
  return (
    <Card>
      <Title>🚛 Styled-Components v6 (_mp)</Title>
      <Parrafo>
        Componente estilizado con CSS-in-JS para representar acciones sobre la unidad de transporte.
      </Parrafo>
      <div style={{ display: 'flex', gap: 10 }}>
        <Btn>Asignar Ruta</Btn>
        <Btn $variant="outline">Ver Telemetría</Btn>
      </div>
    </Card>
  );
}