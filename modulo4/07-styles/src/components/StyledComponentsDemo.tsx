// src/components/StyledComponentsDemo.tsx

import styled from 'styled-components'

// Props transient con prefijo $ — no pasan al DOM en v6
interface BtnProps {
  $variant?: 'primary' | 'outline'
}

const Card = styled.div`
  border:        1px solid var(--border);
  background:    var(--card);
  border-radius: 10px;
  padding:       16px;
`

const Title = styled.h3`
  margin:      0 0 8px 0;
  color:       var(--accent);
  font-weight: 800;
`

const Titulo = styled.h1`
  margin:      0 0 8px 0;
  color:       var(--accent);
  font-weight: 800;
`
const Parrafo = styled.p`
  margin:      0 0 8px 0;
  color:       var(--accent);
  font-weight: 800;
`

const Btn = styled.button<BtnProps>`
  flex:          block;
  padding:       8px 16px;
  border-radius: 8px;
  cursor:        pointer;
  font-weight:   600;
  border:        1px solid var(--accent);
  background:    ${p => p.$variant === 'outline' ? 'transparent' : 'var(--accent)'};
  color:         ${p => p.$variant === 'outline' ? 'var(--accent)' : 'white'};
  transition:    filter 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`

export default function StyledComponentsDemo() {
  return (
    <Card>
      <Title>Styled-components v6</Title>
      <Titulo>Componente Styled</Titulo>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        CSS-in-JS con scope automático. Props transient con prefijo <code>$</code>
        en v6 para no contaminar el DOM.
      </p>
      <hr></hr>
      <div style={{ display: 'block', gap: 8 }}>
        <Parrafo>Este es un párrafo de ejemplo.</Parrafo>
        <Btn>Primary</Btn>
        <hr></hr>
        <Btn $variant="outline">Outline</Btn>
      </div>
    </Card>
  )
}