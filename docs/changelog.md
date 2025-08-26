# 📋 Changelog - PharmaTorres

## [0.2.0] - 2025-08-26

### 🎉 **MAJOR FEATURES IMPLEMENTADAS**

#### 🔐 **Sistema de Autenticación Completo**
- ✅ **Registro de usuarios** con validación automática de hash bcrypt
- ✅ **Login de usuarios** con verificación segura de contraseñas
- ✅ **Tokens JWT** para manejo de sesiones
- ✅ **Context API de React** para manejo global de estado de autenticación
- ✅ **Interfaz de usuario profesional** para login y registro
- ✅ **Endpoints de desarrollo** para reparación de contraseñas legacy

#### 🧹 **Optimización y Limpieza del Proyecto**
- ✅ **Eliminación de dependencias innecesarias** (76 MB liberados)
- ✅ **Limpieza de archivos duplicados** y carpetas vacías
- ✅ **Optimización de variables de entorno**
- ✅ **Código más limpio y mantenible**

### 🔧 **BACKEND CHANGES**

#### Added
- `auth.controller.ts` - Endpoints completos de autenticación
- `auth.service.ts` - Lógica de autenticación con bcrypt y JWT
- `dev.controller.ts` - Endpoints para desarrollo y migración
- `dev.service.ts` - Servicios de reparación de contraseñas
- Hash verification automático durante registro
- Sistema robusto de validación de contraseñas

#### Updated
- `user.entity.ts` - Entidad mejorada con hash automático
- `users.service.ts` - Integración con TypeORM y bcrypt
- Configuración JWT en `auth.module.ts`
- CORS y validación global en `main.ts`

#### Removed
- ❌ `sqlite3` dependency (innecesaria)
- ❌ `bcryptjs` dependency (duplicada)

### 🖥️ **FRONTEND CHANGES**

#### Added
- `AuthContext.tsx` - Contexto completo de autenticación
- `app/auth/login/page.tsx` - Página de login funcional
- `app/auth/register/page.tsx` - Página de registro funcional
- `Navbar.tsx` - Navbar dinámico con estado de autenticación
- Integración completa con backend API
- Manejo de tokens y sesiones

#### Updated
- `layout.tsx` - Layout con AuthProvider
- Estilos mejorados en todas las páginas
- Validación de formularios en cliente

#### Removed
- ❌ `next-auth` dependency (innecesaria)
- ❌ `@supabase/supabase-js` dependency (innecesaria)
- ❌ `zustand` dependency (innecesaria)
- ❌ `AuthContext.new.tsx` - Archivo duplicado
- ❌ `app/orders/` - Carpeta vacía
- ❌ `app/profile/` - Carpeta vacía
- ❌ Variables de entorno innecesarias

### 🗄️ **DATABASE CHANGES**

#### Updated
- Tabla `users` con hash bcrypt funcionando
- Validación automática de contraseñas
- Datos de ejemplo actualizados

### 📚 **DOCUMENTATION UPDATES**
- ✅ `project_status.md` - Estado actualizado con autenticación completa
- ✅ `modular_structure.md` - Estructura actualizada y limpia
- ✅ `technology_stack.md` - Stack tecnológico optimizado
- ✅ `changelog.md` - Nuevo archivo de cambios (este archivo)

### 🚀 **PERFORMANCE IMPROVEMENTS**
- **76 MB** de dependencias eliminadas
- Instalación **más rápida** de node_modules
- **Menor superficie de ataque** de seguridad
- Código **más limpio y mantenible**

### 🔒 **SECURITY ENHANCEMENTS**
- Hash bcrypt con salt rounds seguros
- Validación automática de hash durante registro
- Tokens JWT con expiración adecuada
- Eliminación de dependencias innecesarias

---

## [0.1.0] - 2025-08-XX

### 🎯 **INITIAL SETUP**
- ✅ Configuración inicial de Next.js frontend
- ✅ Configuración inicial de NestJS backend  
- ✅ Conexión con Supabase PostgreSQL
- ✅ Estructura modular básica
- ✅ Configuración de Tailwind CSS
- ✅ Módulos básicos de productos y usuarios

### 📋 **PRÓXIMAS VERSIONES PLANIFICADAS**

#### [0.3.0] - Carrito y Órdenes
- [ ] Sistema de carrito funcional
- [ ] Proceso de checkout
- [ ] Módulo de órdenes completo
- [ ] Estados de órdenes

#### [0.4.0] - Panel de Administración
- [ ] Dashboard de administración
- [ ] Gestión de productos avanzada
- [ ] Reportes y analytics
- [ ] Gestión de usuarios

#### [0.5.0] - Integraciones
- [ ] Pasarela de pagos (Webpay)
- [ ] Sistema de notificaciones
- [ ] Integración con couriers
- [ ] Sistema de recetas médicas

---

**Leyenda:**
- ✅ = Implementado y funcionando
- 🔄 = En progreso
- [ ] = Planificado
- ❌ = Eliminado/Removido
