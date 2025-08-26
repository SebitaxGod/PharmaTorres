// Componente HeroBanner - Diseño profesional inspirado en farmacias chilenas
export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-blue-600 text-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl">💊</div>
        <div className="absolute top-32 right-20 text-7xl">⚕️</div>
        <div className="absolute bottom-32 left-20 text-8xl">🏥</div>
        <div className="absolute bottom-20 right-10 text-6xl">🩺</div>
      </div>
      
      {/* Patrón geométrico */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24">
          <path d="M0,64 C240,20 480,20 720,64 C960,108 1200,108 1200,64 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🏆 Farmacia Líder en Chile
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">PharmaTorres</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-green-100 mt-2">
                Tu salud, nuestra prioridad
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-2xl">
              Medicamentos seguros, atención farmacéutica profesional y entrega confiable. 
              <strong className="font-semibold"> Más de 15 años cuidando tu salud.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3">
                <span>🛒</span>
                <span>Explorar Catálogo</span>
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-3">
                <span>📋</span>
                <span>Subir Receta Médica</span>
              </button>
            </div>

            {/* Información de contacto rápido */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+56 2 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⏰</span>
                <span>Atención 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🚚</span>
                <span>Envío gratis sobre $30.000</span>
              </div>
            </div>
          </div>

          {/* Panel de servicios destacados */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-center">Servicios Destacados</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-xl">
                  <div className="text-2xl">🏥</div>
                  <div>
                    <div className="font-semibold">Farmacia Certificada</div>
                    <div className="text-sm opacity-80">Autorizada por SEREMI de Salud</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-xl">
                  <div className="text-2xl">👨‍⚕️</div>
                  <div>
                    <div className="font-semibold">Consulta Farmacéutica</div>
                    <div className="text-sm opacity-80">Asesoría profesional gratuita</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-xl">
                  <div className="text-2xl">📱</div>
                  <div>
                    <div className="font-semibold">Recetas Digitales</div>
                    <div className="text-sm opacity-80">Proceso 100% online</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-xl">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <div className="font-semibold">Compra Protegida</div>
                    <div className="text-sm opacity-80">Garantía de reembolso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}