export default function CssGlobalDemo_mp() {
  return (
    <div className="globalCard">
      <h3 className="globalTitle">🚛 Despacho General (_mp)</h3>
      <p style={{ margin: 0, color: 'var(--muted, #6b7280)' }}>
        Demostración de clases de alcance global para la tarjeta de flota.
        Las reglas definidas en CSS global afectan a todo el sistema de transportes.
      </p>
    </div>
  );
}