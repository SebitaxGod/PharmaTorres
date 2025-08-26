'use client';

import React from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Tipos para el usuario
export interface User {
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

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

// Interface del store de autenticación
interface AuthState {
  // Estado
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isHydrated: boolean; // 🎯 CLAVE: Flag para saber si ya se hidrato
  
  // Getters computados
  isAuthenticated: boolean;
  
  // Acciones
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  forgotPassword: (email: string) => Promise<boolean>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  
  // Acciones internas
  setLoading: (loading: boolean) => void;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setHydrated: () => void; // 🎯 Nueva accion
}

// API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL + '/api' || 'http://localhost:3001/api';

// Crear el store de autenticación con Zustand
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      user: null,
      token: null,
      isLoading: false,
      isHydrated: false, // 🎯 CLAVE: Inicialmente false
      
      // Getter computado
      get isAuthenticated() {
        const state = get();
        const hasUser = !!state.user;
        const hasToken = !!state.token;
        const result = hasUser && hasToken;
        
        // 🔍 Debug logging para entender el estado
        console.log('🔍 isAuthenticated getter:', {
          hasUser,
          hasToken,
          result,
          userEmail: state.user?.email || 'null',
          tokenLength: state.token?.length || 0
        });
        
        return result;
      },
      
      // Función de login
      login: async (email: string, password: string, rememberMe: boolean = false) => {
        const { setLoading, setUser, setToken } = get();
        
        try {
          setLoading(true);
          
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
            
            // Actualizar estado
            setToken(access_token);
            setUser(userData);
            
            // 🎯 IMPORTANTE: Log para debug
            console.log('✅ Login successful, user data saved:', { 
              userId: userData.id, 
              email: userData.email 
            });
            
            return true;
          } else {
            const errorData = await response.json();
            console.error('❌ Error en login:', errorData.message);
            return false;
          }
        } catch (error) {
          console.error('❌ Error de conexión en login:', error);
          return false;
        } finally {
          setLoading(false);
        }
      },
      
      // Función de registro
      register: async (userData: RegisterData) => {
        const { setLoading, setUser, setToken } = get();
        
        try {
          setLoading(true);
          
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
            
            // Actualizar estado
            setToken(access_token);
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
          setLoading(false);
        }
      },
      
      // Función de logout
      logout: () => {
        set({ user: null, token: null });
        console.log('🚪 User logged out');
      },
      
      // Función de actualizar perfil
      updateProfile: async (profileData: Partial<User>) => {
        const { user, token, setLoading, setUser } = get();
        
        if (!token || !user) {
          return false;
        }
        
        try {
          setLoading(true);
          
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
          setLoading(false);
        }
      },
      
      // Función de recuperar contraseña
      forgotPassword: async (email: string) => {
        const { setLoading } = get();
        
        try {
          setLoading(true);
          
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
          setLoading(false);
        }
      },
      
      // Función de resetear contraseña
      resetPassword: async (resetToken: string, newPassword: string) => {
        const { setLoading } = get();
        
        try {
          setLoading(true);
          
          const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: resetToken, newPassword }),
          });

          if (!response.ok) {
            throw new Error('Error al resetear contraseña');
          }
        } catch (error) {
          console.error('Error resetear contraseña:', error);
          throw error;
        } finally {
          setLoading(false);
        }
      },
      
      // Acciones internas
      setLoading: (loading: boolean) => set({ isLoading: loading }),
      setUser: (user: User | null) => set({ user }),
      setToken: (token: string | null) => set({ token }),
      setHydrated: () => set({ isHydrated: true }), // 🎯 Nueva acción
    }),
    {
      name: 'pharmatorres-auth', // Clave para localStorage
      storage: createJSONStorage(() => localStorage),
      
      // Solo persistir datos esenciales (NO isLoading ni isHydrated)
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);

// 🎯 NUEVO: Selectores optimizados que consideran la hidratación
export const useAuth = () => {
  const user = useAuthStore(state => state.user);
  const isLoading = useAuthStore(state => state.isLoading);
  const isHydrated = useAuthStore(state => state.isHydrated);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const login = useAuthStore(state => state.login);
  const register = useAuthStore(state => state.register);
  const logout = useAuthStore(state => state.logout);
  const updateProfile = useAuthStore(state => state.updateProfile);
  const forgotPassword = useAuthStore(state => state.forgotPassword);
  const resetPassword = useAuthStore(state => state.resetPassword);
  const setHydrated = useAuthStore(state => state.setHydrated);
  const setUser = useAuthStore(state => state.setUser);
  const setToken = useAuthStore(state => state.setToken);

  return {
    user,
    isLoading,
    isHydrated, // 🎯 Exponer este flag
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    forgotPassword,
    resetPassword,
    setHydrated, // 🎯 Exponer esta acción
    setUser, // 🎯 Exponer esta acción
    setToken, // 🎯 Exponer esta acción
  };
};

// Selectores específicos para optimización
export const useUser = () => useAuthStore(state => state.user);
export const useIsAuthenticated = () => useAuthStore(state => state.isAuthenticated);
export const useIsLoading = () => useAuthStore(state => state.isLoading);
export const useIsHydrated = () => useAuthStore(state => state.isHydrated); // 🎯 Nuevo selector

// 🎯 Hook optimizado para SSR con hidratación manual
export const useAuthWithHydration = () => {
  const [isHydrated, setIsHydrated] = React.useState(false);
  
  // 🔥 CLAVE: Obtener valores directos del store sin el getter problemático
  const user = useAuthStore(state => state.user);
  const token = useAuthStore(state => state.token);
  const isLoading = useAuthStore(state => state.isLoading);
  
  // 🔥 IMPORTANTE: Obtener las funciones del store también
  const login = useAuthStore(state => state.login);
  const register = useAuthStore(state => state.register);
  const logout = useAuthStore(state => state.logout);
  const updateProfile = useAuthStore(state => state.updateProfile);
  const forgotPassword = useAuthStore(state => state.forgotPassword);
  const resetPassword = useAuthStore(state => state.resetPassword);
  
  // 🔥 SOLUCION: Calcular isAuthenticated directamente en React
  const isAuthenticated = React.useMemo(() => {
    const result = !!user && !!token;
    console.log('🎯 React isAuthenticated calc:', {
      hasUser: !!user,
      hasToken: !!token,
      result,
      userEmail: user?.email || 'null'
    });
    return result;
  }, [user, token]);

  React.useEffect(() => {
    console.log('🎯 useAuthWithHydration: useEffect ejecutándose');
    
    const syncFromLocalStorage = () => {
      try {
        const savedUser = localStorage.getItem('pharmatorres-auth');
        if (savedUser) {
          const parsed = JSON.parse(savedUser);
          const userData = parsed.state?.user;
          const tokenData = parsed.state?.token;
          
          console.log('🔄 Manual sync from localStorage:', {
            hasUser: !!userData,
            hasToken: !!tokenData,
            user: userData?.firstName || 'null'
          });

          if (userData && tokenData) {
            console.log('🔄 Actualizando store con datos de localStorage...');
            
            // 🔥 Actualizar ambos valores juntos
            useAuthStore.setState({ 
              user: userData, 
              token: tokenData,
              isHydrated: true
            });
            
            // 🎯 SOLUCION: Forzar re-evaluación después de setState
            setTimeout(() => {
              const currentState = useAuthStore.getState();
              console.log('🔍 Estado final después de setState:', {
                hasUser: !!currentState.user,
                hasToken: !!currentState.token,
                isAuthenticated: currentState.isAuthenticated,
                userEmail: currentState.user?.email || 'null'
              });
            }, 0);
            
            console.log('✅ Store actualizado exitosamente');
            console.log('📊 Estado después de sync:', {
              hasUser: !!userData,
              hasToken: !!tokenData,
              user: userData?.firstName || 'null'
            });
          }
        }
      } catch (error) {
        console.error('❌ Error en sync manual:', error);
      }
    };

    // Ejecutar sync
    syncFromLocalStorage();
    
    // Marcar como hidratado localmente
    setIsHydrated(true);
    
    console.log('✅ Hidratación completada');
  }, []); // Sin dependencias para evitar re-ejecutions

  return {
    user,
    token,
    isLoading,
    isAuthenticated, // 🔥 Ahora calculado en React, no en Zustand
    isHydrated,
    login,
    register,
    logout, // 🔥 IMPORTANTE: Ahora sí incluimos logout
    updateProfile,
    forgotPassword,
    resetPassword,
  };
};
