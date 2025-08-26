// Página de detalle de producto dinámico
interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Producto {params.id}</h1>
      {/* Detalle del producto aquí */}
    </div>
  )
}
