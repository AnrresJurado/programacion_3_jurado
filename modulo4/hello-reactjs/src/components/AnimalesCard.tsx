// src/components/ProductCatalogList.tsx

interface Product {
  id: number
  name: string// src/components/ProductCard.tsx

interface ProductCardProps {
  title: string
  description?: string
  highlighted?: boolean
  price?: number
}

export default function ProductCard({
  title,
  description = '',
  highlighted = false,
  price = 0,
}: ProductCardProps) {
  return (
    <div
      style={{
        border: highlighted ? '2px solid gold' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: highlighted ? '#fffbea' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description || 'Sin Descripcion'}</p>
      <p style={{ margin: 0, color: '#555' }}>Precio:{price}</p>
    </div>
  )
}
  tipo: string
  edad: number
}

interface ProductCatalogListProps {
  products: Product[]
  title?: string
}

export default function ProductCatalogList({
  products,
  title = 'Catálogo',
}: ProductCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {products.length === 0 && (
        <p style={{ color: '#999' }}>No hay productos disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: product.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {product.name}
              {product.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Agotado
                </em>
              )}
                <em style={{ marginLeft: 8, fontSize: 12, color: 'rgb(63, 238, 0)' }}>
                    {product.category}
                </em>
            </span>
            <strong>${product.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}