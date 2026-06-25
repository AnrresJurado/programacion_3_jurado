import { useEffect, useState } from 'react';

interface Chofer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function FetchUser_mp() {
  const [chofer, setChofer] = useState<Chofer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          setChofer({
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
          });
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  if (loading) return <p>⏳ Cargando expediente del chofer de turno...</p>;

  return (
    <div style={{ border: '1px solid #28a745', padding: '16px', borderRadius: '8px' }}>
      <h2>👤 Ficha Técnica del Conductor (_mp)</h2>
      <p><strong>Nombre:</strong> {chofer?.name}</p>
      <p><strong>Correo Corporativo:</strong> {chofer?.email}</p>
      <p><strong>Teléfono de Emergencia:</strong> {chofer?.phone}</p>
    </div>
  );
}