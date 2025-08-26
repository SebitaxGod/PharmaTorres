'use client';

// Componente de promociones destacadas inspirado en farmacias chilenas
export default function PromotionsSection() {
  const promotions = [
    {
      title: "Envío Gratis",
      subtitle: "En compras sobre $30.000",
      description: "Recibe tus medicamentos sin costo adicional",
      icon: "🚚",
      color: "from-blue-500 to-blue-600",
      badge: "Oferta Especial"
    },
    {
      title: "Descuento 15%",
      subtitle: "En productos de belleza",
      description: "Cuida tu piel con los mejores precios",
      icon: "💄",
      color: "from-pink-500 to-pink-600",
      badge: "Esta Semana"
    },
    {
      title: "Recetas Online",
      subtitle: "Subida y procesamiento",
      description: "Envía tu receta médica digitalmente",
      icon: "📋",
      color: "from-green-500 to-green-600",
      badge: "Nuevo Servicio"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Promociones Destacadas</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y servicios especiales para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {promo.badge}
                </span>
              </div>

              {/* Fondo degradado */}
              <div className={`bg-gradient-to-br ${promo.color} p-8 text-white relative`}>
                {/* Elementos decorativos */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 right-8 text-8xl">{promo.icon}</div>
                  <div className="absolute bottom-4 left-4 text-4xl opacity-50">{promo.icon}</div>
                </div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6">{promo.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-xl font-semibold mb-4 opacity-90">{promo.subtitle}</p>
                  <p className="text-lg opacity-80 mb-6 leading-relaxed">{promo.description}</p>
                  
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Conocer Más
                  </button>
                </div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to action adicional */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ayuda con tu receta médica?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Nuestros farmacéuticos certificados están disponibles para asesorarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300">
                📞 Consultar Farmacéutico
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                💬 Chat en Línea
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
