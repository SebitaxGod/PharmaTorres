# Estructura Modular - PharmaTorres (Actualizada: 26 agosto 2025)

## 1. Frontend (Next.js + Tailwind) - ACTUALIZADO
```
/frontend
/app
  /auth
    /login
      page.tsx        ✅ Implementado - Login funcional
    /register  
      page.tsx        ✅ Implementado - Registro funcional
  /products
    page.tsx          ✅ Implementado - Lista productos
    /[id]
      page.tsx        ✅ Implementado - Detalle producto
  /cart
    page.tsx          ✅ Implementado - Carrito básico
  layout.tsx          ✅ Implementado - Layout con navbar dinámico
  page.tsx            ✅ Implementado - Home page
  globals.css         ✅ Configurado - Tailwind CSS
/components
  Navbar.tsx          ✅ Implementado - Con lógica de autenticación
  Footer.tsx          ✅ Implementado - Footer responsivo
  ProductCard.tsx     ✅ Implementado - Tarjeta de producto
  ProductGrid.tsx     ✅ Implementado - Grid de productos
  HeroBanner.tsx      ✅ Implementado - Banner principal
/contexts
  AuthContext.tsx     ✅ Implementado - Manejo completo de auth
```

**🗑️ Carpetas/archivos eliminados en limpieza:**
- ❌ `/orders` - Carpeta vacía eliminada
- ❌ `/profile` - Carpeta vacía eliminada  
- ❌ `AuthContext.new.tsx` - Archivo duplicado eliminado

## 2. Backend (NestJS) - ACTUALIZADO
```
/backend
/src
  /modules
    /auth                 ✅ COMPLETAMENTE IMPLEMENTADO
      auth.controller.ts     - Endpoints register/login/forgot-password
      auth.service.ts        - Lógica de autenticación con bcrypt
      auth.module.ts         - Configuración JWT
      /dto
        register.dto.ts      - Validación registro
        login.dto.ts         - Validación login
    /users                ✅ IMPLEMENTADO
      users.controller.ts    - CRUD usuarios
      users.service.ts       - Lógica usuarios con TypeORM
      users.module.ts        - Módulo usuarios
      /entities
        user.entity.ts       - Entidad usuario con bcrypt
    /products             ✅ IMPLEMENTADO
      products.controller.ts - CRUD productos
      products.service.ts    - Lógica productos
      products.module.ts     - Módulo productos
      /entities
        product.entity.ts    - Entidad producto
    /dev                  ✅ NUEVO - Para desarrollo
      dev.controller.ts      - Endpoints reparación passwords
      dev.service.ts         - Lógica reparación
      dev.module.ts          - Módulo desarrollo
    /cart                 🔄 Básico - Solo estructura
    /orders               🔄 Básico - Solo estructura  
    /prescriptions        🔄 Básico - Solo estructura
  /common
    /filters
    /guards
    /interceptors
  /config
    database.config.ts    ✅ Configuración TypeORM + Supabase
  main.ts                 ✅ Configurado con CORS y validación
```

## 3. Base de datos (PostgreSQL - Supabase) - FUNCIONANDO
```sql
-- ✅ IMPLEMENTADAS Y FUNCIONANDO:
users ✅ 
  - id (UUID)
  - name (VARCHAR)
  - email (VARCHAR UNIQUE)  
  - password (VARCHAR) -- Hash bcrypt
  - phone (VARCHAR)
  - role (ENUM: customer, admin, pharmacist)
  - isActive (BOOLEAN)
  - created_at, updated_at (TIMESTAMPS)

products ✅
  - id (UUID)
  - name (VARCHAR)
  - description (TEXT)
  - price (DECIMAL)
  - stock (INTEGER)
  - requiresPrescription (BOOLEAN)
  - category (VARCHAR)
  - created_at, updated_at (TIMESTAMPS)

-- 🔄 PENDIENTES (estructura básica existe):
cart 🔄
orders 🔄  
prescriptions 🔄
```

## 4. Estándares de modularidad
- Cada módulo (auth, products, cart, orders) tiene:
  - Controlador
  - Servicio
  - Entidad
  - DTOs
- Frontend modularizado por páginas + componentes reutilizables
- Tailwind configurado con `theme.config` central para colores, tipografía y estilos

## 5. Repositorio en GitHub
- Repositorio dividido en carpetas principales:
  - `/frontend` → proyecto Next.js
  - `/backend` → proyecto NestJS
  - `/docs` → documentación (estos markdowns, diagramas, especificaciones)
- Ramas recomendadas:
  - `main` (producción estable)
  - `develop` (integración)
  - `feature/*` (nuevas funciones)
  - `hotfix/*` (correcciones urgentes)
- Convención de commits:
  - `feat:` → nueva funcionalidad
  - `fix:` → corrección de bug
  - `docs:` → documentación
  - `style:` → cambios de estilo/UI
  - `refactor:` → mejoras internas
  - `test:` → tests
- Flujo de trabajo:
  - Nadie hace `push` directo a `main`
  - Todo cambio pasa por Pull Request
  - GitHub Actions corre tests y despliega automáticamente
