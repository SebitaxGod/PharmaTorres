// Exportaciones centralizadas de todos los stores
// Esto facilita los imports y mantiene la estructura organizada

// Auth Store
export {
  useAuthStore,
  useAuth,
  useUser,
  useIsAuthenticated,
  useIsLoading,
  useIsHydrated, // 🎯 Nuevo hook exportado
  type User,
  type RegisterData,
} from './authStore';

// Futuros stores se exportarán aquí:
// export { useCartStore, useCart } from './cartStore';
// export { useProductsStore, useProducts } from './productsStore';
// export { useOrdersStore, useOrders } from './ordersStore';
// export { useAdminStore, useAdmin } from './adminStore';
// export { useNotificationsStore, useNotifications } from './notificationsStore';
