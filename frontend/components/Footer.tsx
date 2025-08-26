'use client';

// Componente Footer profesional para farmacia
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">💊</div>
              <div>
                <h3 className="text-2xl font-bold text-green-400">PharmaTorres</h3>
                <p className="text-sm text-gray-400">Farmacia Online</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Más de 15 años brindando servicios farmacéuticos de calidad, 
              con la confianza y seguridad que tu familia merece.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span>🏛️</span>
                <span>Autorizada por SEREMI de Salud</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span>🎓</span>
                <span>Colegio Químico Farmacéutico</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Inicio</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-green-400 transition-colors">Productos</a></li>
              <li><a href="/prescriptions" className="text-gray-300 hover:text-green-400 transition-colors">Recetas Médicas</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contacto</a></li>
              <li><a href="/help" className="text-gray-300 hover:text-green-400 transition-colors">Ayuda</a></li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Categorías</h4>
            <ul className="space-y-3">
              <li><a href="/category/medicamentos" className="text-gray-300 hover:text-green-400 transition-colors">Medicamentos</a></li>
              <li><a href="/category/belleza" className="text-gray-300 hover:text-green-400 transition-colors">Belleza y Cuidado</a></li>
              <li><a href="/category/naturales" className="text-gray-300 hover:text-green-400 transition-colors">Productos Naturales</a></li>
              <li><a href="/category/bebe" className="text-gray-300 hover:text-green-400 transition-colors">Bebé y Mamá</a></li>
              <li><a href="/category/deporte" className="text-gray-300 hover:text-green-400 transition-colors">Nutrición Deportiva</a></li>
              <li><a href="/category/higiene" className="text-gray-300 hover:text-green-400 transition-colors">Higiene Personal</a></li>
            </ul>
          </div>

          {/* Contacto y horarios */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-lg">📞</span>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-300">+56 2 2345 6789</p>
                  <p className="text-sm text-gray-400">Atención 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-lg">✉️</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">contacto@pharmatorres.cl</p>
                  <p className="text-sm text-gray-400">Respuesta en 24hrs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-400 text-lg">📍</span>
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-gray-300">Av. Providencia 1234</p>
                  <p className="text-sm text-gray-400">Providencia, Santiago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Métodos de pago y envío */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold mb-4 text-green-400">Métodos de Pago</h5>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">💳 Visa</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">💳 Mastercard</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">🏦 Transferencia</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">📱 WebPay</div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4 text-green-400">Métodos de Envío</h5>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">🚚 StarKen</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">📦 Chilexpress</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">🏪 Retiro en tienda</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} PharmaTorres. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Términos y Condiciones
              </a>
              <a href="/returns" className="text-gray-400 hover:text-green-400 transition-colors">
                Política de Devoluciones
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg">📘</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg">📸</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg">🐦</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-lg">💼</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
