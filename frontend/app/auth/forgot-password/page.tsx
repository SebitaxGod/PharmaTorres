'use client';

import { useState } from 'react';
import Link from 'next/link';

// Página para recuperar contraseña
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!email.trim()) {
      setError('El email es requerido');
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email inválido');
      setIsLoading(false);
      return;
    }

    try {
      // Aquí iría la lógica para enviar email de recuperación
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (err) {
      setError('Error al enviar el email. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="text-4xl">💊</div>
              <div>
                <h1 className="text-3xl font-bold text-green-600">PharmaTorres</h1>
                <p className="text-sm text-gray-500">Farmacia Online</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
            <div className="text-6xl mb-6">📧</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Email Enviado!</h2>
            <p className="text-gray-600 mb-6">
              Hemos enviado las instrucciones para restablecer tu contraseña a:
            </p>
            <p className="font-semibold text-green-600 mb-8">{email}</p>
            <p className="text-sm text-gray-500 mb-6">
              Revisa tu bandeja de entrada y la carpeta de spam. El enlace expirará en 1 hora.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/auth/login"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Volver al Login
              </Link>
              
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setEmail('');
                }}
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Enviar a otro email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header con logo */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="text-4xl">💊</div>
            <div>
              <h1 className="text-3xl font-bold text-green-600">PharmaTorres</h1>
              <p className="text-sm text-gray-500">Farmacia Online</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¿Olvidaste tu contraseña?</h2>
          <p className="text-gray-600">No te preocupes, te ayudamos a recuperarla</p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">🔐</div>
            <p className="text-gray-600">
              Ingresa tu email y te enviaremos las instrucciones para crear una nueva contraseña.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300"
                  placeholder="tu@email.com"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400">📧</span>
                </div>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="mr-2">📤</span>
                  Enviar Instrucciones
                </div>
              )}
            </button>
          </form>

          {/* Back to login */}
          <div className="mt-8 text-center">
            <Link 
              href="/auth/login" 
              className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500 transition-colors"
            >
              <span className="mr-2">←</span>
              Volver al Login
            </Link>
          </div>
        </div>

        {/* Info adicional */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 ¿Necesitas ayuda?</h3>
          <p className="text-blue-700 text-sm mb-4">
            Si tienes problemas para recuperar tu cuenta, nuestro equipo de soporte está aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:+56223456789" 
              className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <span className="mr-2">📞</span>
              Llamar Soporte
            </a>
            <a 
              href="mailto:soporte@pharmatorres.cl" 
              className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              <span className="mr-2">✉️</span>
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
