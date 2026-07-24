import { useState, useMemo } from 'react';

function sieve(n: number): number[] {
  if (n < 2) return [];
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) isPrime[j] = false;
    }
  }
  return isPrime.reduce<number[]>((acc, ok, i) => (ok ? [...acc, i] : acc), []);
}

export default function PrimeSieve_mp() {
  const [limit, setLimit] = useState(10_000);
  const [counter, setCounter] = useState(0);

  // useMemo evita recalcular la matriz compleja en re-renders externos
  const primes = useMemo(() => sieve(limit), [limit]);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 540, margin: '0 auto', padding: 20 }}>
      <h3>📊 Algoritmo Pesado de Tarifas de Transporte (_mp)</h3>
      <p style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
        Uso de <code>useMemo</code> para aislar cálculos intensivos de la UI.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13 }}>
          Matriz de Combinaciones Rutas (N):
          <input
            type="range"
            min={1000}
            max={100_000}
            step={1000}
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            style={{ width: 200 }}
          />
          <span>{limit.toLocaleString()} Iteraciones</span>
        </label>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13 }}>
          Re-render de Control UI:
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button onClick={() => setCounter((c) => c - 1)} style={{ padding: '4px 12px' }}>−</button>
            <span>{counter}</span>
            <button onClick={() => setCounter((c) => c + 1)} style={{ padding: '4px 12px' }}>+</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          { label: 'Tarifas Calculadas', value: primes.length.toLocaleString() },
          { label: 'Iteración Máxima', value: limit.toLocaleString() },
          { label: 'Tarifa Pico ($)', value: (primes.at(-1) ?? 0).toLocaleString() },
        ].map(({ label, value }) => (
          <div key={label} style={{ padding: 12, background: '#f5f5f5', borderRadius: 8, fontSize: 13 }}>
            <div style={{ color: '#888', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}