// Página principal de la aplicación
import HeroBanner from '@/components/HeroBanner'
import ProductGrid from '@/components/ProductGrid'
import CategorySection from '@/components/CategorySection'
import FeaturesSection from '@/components/FeaturesSection'
import PromotionsSection from '@/components/PromotionsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      
      {/* Sección de categorías principales */}
      <CategorySection />
      
      {/* Sección de promociones destacadas */}
      <PromotionsSection />
      
      {/* Sección de características y confianza */}
      <FeaturesSection />
      
      {/* Sección de productos destacados */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Los medicamentos y productos más populares, cuidadosamente seleccionados por nuestros farmacéuticos certificados
            </p>
          </div>
          <ProductGrid limit={8} />
          
          {/* Botón para ver más productos */}
          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
