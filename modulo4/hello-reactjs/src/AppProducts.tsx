import ProductCard from './components1/ProductCard'
import ProductCatalogList from './components1/ProductCatalogList'
import UserProfileCard from './components1/UserProfileCard'

interface Product {
  id: number
  name: string
  price: number
  outOfStock?: boolean,
   category: string
}

const catalog: Product[] = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99, category: "Computacion" },
  { id: 2, name: 'Monitor 27"',       price: 349.99,category: "Computacion"  },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: false,  category: "Computacion"  },
  { id: 4, name: 'Webcam HD',         price: 59.99,  category: "Computacion"  },
]



export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <ProductCard
        title="Bienvenido a la tienda"
        description="Encuentra los mejores accesorios para tu escritorio"
        highlighted
        price={1000}
      />

      <ProductCard title="Oferta del día" 
      description="Webcam HD con 20% de descuento" />
      <ProductCard title="Novedades de la semana" 
      description="" />

      <ProductCatalogList 
      products={catalog}
      title = 'Lista de productos'/>

      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />

      <UserProfileCard
        fullName="Luis Mora"
        email="luis@ejemplo.com"
        role="viewer"
        isActive={false}
        skills={['Figma', 'CSS']}
      />
    </main>

    
  )
}

