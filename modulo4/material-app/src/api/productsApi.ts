// src/api/productsApi.ts
/*
import { http } from './http'
import type { PaginatedResponse, Product } from '../types/product'

interface GetProductsParams {
  page:     number
  pageSize: number
  search?:  string
}

export async function getProducts(params: GetProductsParams) {
  const { page, pageSize, search } = params
  const res = await http.get<PaginatedResponse<Product>>('/products/', {
    params: {
      page,
      page_size: pageSize,
      ...(search ? { search } : {}),
    },
  })
  return res.data
}
*/

// src/api/productsApi.ts (Versión MOCK temporal para la captura)
import type { PaginatedResponse, Product } from '../types/product'

interface GetProductsParams {
  page: number
  pageSize: number
  search?: string
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Bomba de Inyección Hino",
    slug: "bomba-inyeccion-hino",
    price: "489.99",
    stock: 12,
    is_active: true,
    url_image: "https://picsum.photos/seed/part1/400/140",
    category_name: "Motor",
    created_at: "2026-07-01",
    updated_at: "2026-07-01"
  },
  {
    id: 2,
    name: "Llanta 295/80 R22.5 Heavy Duty",
    slug: "llanta-295-80-r225",
    price: "349.99",
    stock: 24,
    is_active: true,
    url_image: "https://picsum.photos/seed/part2/400/140",
    category_name: "Neumáticos",
    created_at: "2026-07-01",
    updated_at: "2026-07-01"
  },
  {
    id: 3,
    name: "Filtro de Aire Mack Freightliner",
    slug: "filtro-aire-mack",
    price: "49.99",
    stock: 0,
    is_active: false,
    url_image: "https://picsum.photos/seed/part3/400/140",
    category_name: "Filtros",
    created_at: "2026-07-01",
    updated_at: "2026-07-01"
  },
  {
    id: 4,
    name: "Kit de Embrague Camión Pesado",
    slug: "kit-embrague-heavy",
    price: "859.99",
    stock: 5,
    is_active: true,
    url_image: "https://picsum.photos/seed/part4/400/140",
    category_name: "Transmisión",
    created_at: "2026-07-01",
    updated_at: "2026-07-01"
  },
  {
    id: 5,
    name: "Batería 12V 150Ah Flota",
    slug: "bateria-12v-150ah",
    price: "219.99",
    stock: 8,
    is_active: true,
    url_image: "https://picsum.photos/seed/part5/400/140",
    category_name: "Eléctrico",
    created_at: "2026-07-01",
    updated_at: "2026-07-01"
  }
]

export async function getProducts(params: GetProductsParams): Promise<PaginatedResponse<Product>> {
  const { search } = params
  let filtered = [...MOCK_PRODUCTS]
  
  if (search) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  }

  return {
    count: filtered.length,
    next: null,
    previous: null,
    results: filtered
  }
}
