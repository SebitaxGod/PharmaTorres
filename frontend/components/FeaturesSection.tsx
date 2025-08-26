'use client';

// Componente de características y confianza - estilo profesional farmacéutico
export default function FeaturesSection() {
  const features = [
    {
      icon: "⚕️",
      title: "Farmacéuticos Certificados",
      description: "Personal calificado con experiencia en atención farmacéutica y asesoría profesional",
      stats: "15+ años de experiencia"
    },
    {
      icon: "🔒",
      title: "Compra 100% Segura",
      description: "Transacciones protegidas con encriptación SSL y múltiples métodos de pago seguros",
      stats: "Certificado SSL"
    },
    {
      icon: "🚚",
      title: "Entrega Rápida",
      description: "Despacho express en 24-48 horas a todo Chile con seguimiento en tiempo real",
      stats: "24-48 horas"
    },
    {
      icon: "📱",
      title: "Atención 24/7",
      description: "Soporte telefónico y chat en línea disponible todos los días del año",
      stats: "Siempre disponible"
    },
    {
      icon: "💊",
      title: "Medicamentos Originales",
      description: "Solo trabajamos con laboratorios certificados y medicamentos con registro sanitario",
      stats: "100% Originales"
    },
    {
      icon: "📋",
      title: "Recetas Digitales",
      description: "Sube tu receta médica de forma segura y recibe tu medicamento sin complicaciones",
      stats: "Proceso simplificado"
    }
  ];

  const certifications = [
    {
      name: "ISP Chile",
      description: "Instituto de Salud Pública",
      icon: "🏛️"
    },
    {
      name: "Colegio Químico",
      description: "Farmacéuticos de Chile",
      icon: "🎓"
    },
    {
      name: "SEREMI Salud",
      description: "Autorización Sanitaria",
      icon: "✅"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir PharmaTorres?</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de una década brindando servicios farmacéuticos de calidad con la confianza de miles de familias chilenas
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
              <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-2 rounded-lg inline-block">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de certificaciones */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones y Avales</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos con todas las autorizaciones y certificaciones requeridas para operar como farmacia en Chile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1,500+</div>
              <div className="text-gray-600">Productos Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.5%</div>
              <div className="text-gray-600">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
