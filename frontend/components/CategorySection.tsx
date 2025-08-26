'use client';

// Componente de categorías principales inspirado en farmacias chilenas
export default function CategorySection() {
  const categories = [
    {
      icon: "💊",
      title: "Medicamentos",
      description: "Receta médica y venta libre",
      color: "from-blue-500 to-blue-600",
      items: "500+ productos"
    },
    {
      icon: "🌿",
      title: "Naturales",
      description: "Medicina alternativa y suplementos",
      color: "from-green-500 to-green-600",
      items: "200+ productos"
    },
    {
      icon: "💄",
      title: "Belleza",
      description: "Cuidado personal y cosmética",
      color: "from-pink-500 to-pink-600",
      items: "300+ productos"
    },
    {
      icon: "👶",
      title: "Bebé y Mamá",
      description: "Productos para toda la familia",
      color: "from-purple-500 to-purple-600",
      items: "150+ productos"
    },
    {
      icon: "🏃‍♂️",
      title: "Deporte",
      description: "Nutrición deportiva y bienestar",
      color: "from-orange-500 to-orange-600",
      items: "100+ productos"
    },
    {
      icon: "🦷",
      title: "Higiene",
      description: "Cuidado bucal y personal",
      color: "from-teal-500 to-teal-600",
      items: "180+ productos"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Categorías Principales</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra exactamente lo que necesitas en nuestras categorías especializadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative`}>
                  {/* Patrón decorativo de fondo */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 text-6xl">{category.icon}</div>
                    <div className="absolute bottom-4 left-4 text-4xl opacity-50">{category.icon}</div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {category.items}
                      </span>
                      <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver todas las categorías */}
        <div className="text-center mt-12">
          <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300">
            Ver Todas las Categorías
          </button>
        </div>
      </div>
    </section>
  );
}
