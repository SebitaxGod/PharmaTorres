'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Tipos para el usuario y contexto de autenticación
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'admin' | 'pharmacist' | 'customer';
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

// API base URL
const API_BASE_URL = 'http://localhost:3002/api';

// Crear el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider del contexto de autenticación
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar token al cargar la aplicación
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('pharmatorres_token');
        if (token) {
          // Por ahora no verificamos el token ya que no tenemos endpoint de profile
          // En su lugar, mantenemos el usuario logueado si hay token
          setUser({
            id: 'mock-user-id',
            email: 'usuario@pharmatorres.cl',
            firstName: 'Usuario',
            lastName: 'Logueado',
            role: 'customer',
            isActive: true,
            emailVerified: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
        }
      } catch (error) {
        console.error('Error verificando autenticación:', error);
        localStorage.removeItem('pharmatorres_token');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Función de login
  const login = async (email: string, password: string, rememberMe: boolean = false): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { access_token, user: userData } = data;
        
        // Guardar token
        localStorage.setItem('pharmatorres_token', access_token);
        
        // Actualizar estado del usuario
        setUser(userData);
        
        return true;
      } else {
        const errorData = await response.json();
        console.error('Error en login:', errorData.message);
        return false;
      }
    } catch (error) {
      console.error('Error de conexión en login:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Función de registro
  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        const { access_token, user: newUser } = data;
        
        // Guardar token
        localStorage.setItem('pharmatorres_token', access_token);
        
        // Actualizar estado del usuario
        setUser(newUser);
        
        return true;
      } else {
        const errorData = await response.json();
        console.error('Error en registro:', errorData.message);
        return false;
      }
    } catch (error) {
      console.error('Error de conexión en registro:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Función de logout
  const logout = () => {
    localStorage.removeItem('pharmatorres_token');
    setUser(null);
  };

  // Función de actualizar perfil
  const updateProfile = async (profileData: Partial<User>): Promise<boolean> => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('pharmatorres_token');
      
      if (!token || !user) {
        return false;
      }

      const response = await fetch(`${API_BASE_URL}/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        return true;
      } else {
        console.error('Error actualizando perfil');
        return false;
      }
    } catch (error) {
      console.error('Error de conexión actualizando perfil:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Función de recuperar contraseña
  const forgotPassword = async (email: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      return response.ok;
    } catch (error) {
      console.error('Error en recuperar contraseña:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Función de resetear contraseña
  const resetPassword = async (token: string, newPassword: string): Promise<void> => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (!response.ok) {
        throw new Error('Error al resetear contraseña');
      }
    } catch (error) {
      console.error('Error resetear contraseña:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar el contexto de autenticación
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}
