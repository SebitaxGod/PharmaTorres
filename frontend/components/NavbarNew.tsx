'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuthWithHydration, useIsHydrated } from '@/stores/authStore'; // 🎯 Usar el hook mejorado

// Componente Navbar optimizado para SSR
export default function NavbarNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  // 🎯 CLAVE: Usar el nuevo hook de hidratación mejorado
  const { user, isAuthenticated, logout, isLoading, isHydrated } = useAuthWithHydration();

  const handleLogout = () => {
    console.log('🚪 handleLogout called, logout function:', typeof logout);
    if (logout && typeof logout === 'function') {
      logout();
      setIsUserMenuOpen(false);
    } else {
      console.error('❌ logout function not available');
      // Fallback: limpiar directamente el localStorage y recargar
      localStorage.removeItem('auth-storage');
      window.location.reload();
    }
  };

  // 🎯 Función para renderizar el estado de autenticación
  const renderAuthState = () => {
    // Si no está hidratado, mostrar skeleton
    if (!isHydrated) {
      return (
        <div className="flex items-center space-x-2 bg-gray-200 text-gray-500 px-4 py-2 rounded-lg animate-pulse">
          <span>👤</span>
          <span>Cargando...</span>
        </div>
      );
    }

    // Si está cargando (durante login/logout)
    if (isLoading) {
      return (
        <div className="flex items-center space-x-2 bg-blue-200 text-blue-600 px-4 py-2 rounded-lg">
          <span>⏳</span>
          <span>Procesando...</span>
        </div>
      );
    }

    // Si está autenticado
    if (isAuthenticated && user) {
      return (
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <span>👤</span>
            <span>{user.firstName}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{user.firstName} {user.lastName}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
                <p className="text-xs text-green-600">✅ Conectado</p>
              </div>
              <Link 
                href="/profile" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsUserMenuOpen(false)}
              >
                👤 Mi Perfil
              </Link>
              <Link 
                href="/orders" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsUserMenuOpen(false)}
              >
                📦 Mis Pedidos
              </Link>
              <Link 
                href="/prescriptions" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsUserMenuOpen(false)}
              >
                📋 Mis Recetas
              </Link>
              <Link 
                href="/favorites" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsUserMenuOpen(false)}
              >
                ❤️ Favoritos
              </Link>
              <div className="border-t border-gray-100 mt-2 pt-2">
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  🚪 Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Si no está autenticado
    return (
      <Link 
        href="/auth/login"
        className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        <span>👤</span>
        <span>Iniciar Sesión</span>
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-3xl">💊</div>
            <div>
              <h1 className="text-2xl font-bold text-green-600">PharmaTorres</h1>
              <p className="text-xs text-gray-500">Farmacia Online</p>
            </div>
          </Link>

          {/* Barra de búsqueda */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar medicamentos, vitaminas, productos..."
                className="w-full py-3 px-4 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors font-medium">
              <span>🏠</span>
              <span>Inicio</span>
            </Link>
            <Link href="/products" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors font-medium">
              <span>💊</span>
              <span>Productos</span>
            </Link>
            <Link href="/prescriptions" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors font-medium">
              <span>📋</span>
              <span>Recetas</span>
            </Link>
            
            {/* Carrito */}
            <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m5.6 0L7 13m4 0v6a2 2 0 11-4 0v-6m4 0v6a2 2 0 104 0v-6" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* 🎯 Estado de autenticación optimizado */}
            {renderAuthState()}
          </div>

          {/* Botón de menú móvil */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full py-3 px-4 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-2">
                <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors py-2">
                  <span>🏠</span>
                  <span>Inicio</span>
                </Link>
                <Link href="/products" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors py-2">
                  <span>💊</span>
                  <span>Productos</span>
                </Link>
                <Link href="/prescriptions" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors py-2">
                  <span>📋</span>
                  <span>Recetas</span>
                </Link>
                
                {/* Estado de auth en móvil */}
                <div className="pt-4 border-t border-gray-100">
                  {renderAuthState()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
