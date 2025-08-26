# PharmaTorres 🏥💊

## Descripción
PharmaTorres es una farmacia online e-commerce enfocada en la venta de medicamentos, productos de salud, cuidado personal y suplementos. Inspirado en las mejores farmacias de Chile como Cruz Verde y Salcobrand, pero adaptado completamente a la experiencia digital.

## ✅ **Estado Actual (26 agosto 2025)**
🎉 **SISTEMA DE AUTENTICACIÓN COMPLETAMENTE IMPLEMENTADO Y FUNCIONANDO**

- ✅ **Registro de usuarios** con hash bcrypt seguro
- ✅ **Login funcional** con validación de contraseñas  
- ✅ **Tokens JWT** para manejo de sesiones
- ✅ **Interfaz de usuario profesional** para auth
- ✅ **Base de datos PostgreSQL** configurada y conectada
- ✅ **API REST completa** con NestJS + TypeORM
- ✅ **Frontend Next.js** con Tailwind CSS
- ✅ **Proyecto optimizado** (76 MB de dependencias innecesarias eliminadas)

## 🚀 Características implementadas
- ✅ **Autenticación completa** (registro/login/logout)
- ✅ **Catálogo de productos** funcional
- ✅ **Carrito de compras** básico
- ✅ **Base de datos** PostgreSQL con Supabase
- ✅ **API REST** con validación y seguridad
- ✅ **Interfaz responsiva** con Tailwind CSS
- ✅ **Sistema de roles** preparado
- 🔄 **Validación de recetas** (próximamente)
- 🔄 **Despacho a domicilio** (próximamente)
- 🔄 **Sistema de pagos** (próximamente)

## 🛠️ Tecnologías utilizadas (Stack optimizado)

### Frontend ✅
- **Next.js 14.2.5** - React framework para SSR/SSG
- **Tailwind CSS 3.4.17** - Framework CSS responsivo
- **TypeScript 5.5.4** - Tipado estático
- **React Context API** - Manejo de estado de autenticación
- **Axios 1.7.2** - Cliente HTTP

### Backend ✅
- **NestJS 10.3.10** - Framework Node.js modular y escalable
- **PostgreSQL** - Base de datos principal (Supabase)
- **TypeORM 0.3.26** - ORM para base de datos
- **JWT** - Autenticación con tokens
- **bcrypt 6.0.0** - Hash seguro de contraseñas

### Infraestructura ✅
- **Supabase** - PostgreSQL hosting + dashboard
- **Vercel** - Despliegue del frontend (listo)
- **Render/Railway** - Despliegue del backend (listo)

## 📁 Estructura del proyecto (Actualizada)

```
PharmaTorres/
├── frontend/                    # ✅ Aplicación Next.js funcionando
│   ├── app/
│   │   ├── auth/               # ✅ Sistema de autenticación
│   │   │   ├── login/          # ✅ Página de login
│   │   │   └── register/       # ✅ Página de registro
│   │   ├── products/           # ✅ Catálogo de productos
│   │   ├── cart/               # ✅ Carrito básico
│   │   └── layout.tsx          # ✅ Layout con navbar dinámico
│   ├── components/             # ✅ Componentes reutilizables
│   ├── contexts/               # ✅ AuthContext implementado
│   └── package.json            # ✅ Dependencias optimizadas
├── backend/                     # ✅ API NestJS funcionando
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/           # ✅ Autenticación completa
│   │   │   ├── users/          # ✅ CRUD usuarios
│   │   │   ├── products/       # ✅ CRUD productos
│   │   │   └── dev/            # ✅ Endpoints desarrollo
│   │   ├── config/             # ✅ Configuración BD
│   │   └── main.ts             # ✅ CORS y validación
│   └── package.json            # ✅ Dependencias optimizadas
├── docs/                        # ✅ Documentación actualizada
│   ├── project_status.md       # ✅ Estado actual
│   ├── technology_stack.md     # ✅ Stack optimizado
│   ├── modular_structure.md    # ✅ Estructura limpia
│   ├── authentication_architecture.md  # ✅ NUEVO
│   ├── changelog.md            # ✅ NUEVO
│   └── ...
└── README.md                    # ✅ Este archivo actualizado
```

## 📋 Documentación (Actualizada)

### **Estado del Proyecto**
- [**Estado Actual**](./docs/project_status.md) - Situación completa del desarrollo ✅
- [**Changelog**](./docs/changelog.md) - Historial de cambios y versiones ✅

### **Arquitectura y Tecnología**
- [**Stack Tecnológico**](./docs/technology_stack.md) - Tecnologías optimizadas ✅
- [**Estructura Modular**](./docs/modular_structure.md) - Organización limpia del código ✅
- [**Arquitectura de Autenticación**](./docs/authentication_architecture.md) - Sistema de auth detallado ✅

### **Negocio y Diseño**
- [**Modelo de Negocio**](./docs/business_model.md) - Propuesta de valor y flujo de negocio
- [**Diseño**](./docs/design.md) - Guía de diseño visual y UX
- [**Roadmap**](./docs/roadmap.md) - Planificación de desarrollo

### **Configuración**
- [**Guía de Instalación**](./docs/installation_guide.md) - Configuración paso a paso
- [**Configuración de BD**](./docs/database_setup.md) - Setup de base de datos

## 🚀 Inicio Rápido (Sistema Funcionando)

### Prerrequisitos ✅
- Node.js 18+ 
- npm/yarn
- Cuenta Supabase (gratuita)
- Git

### Instalación y Ejecución ✅

#### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd PharmaTorres
```

#### 2. Configurar Backend
```bash
cd backend
npm install                 # Dependencias optimizadas
cp .env.example .env       # Configurar variables de entorno
npm run start:dev          # ✅ Servidor en http://localhost:3001
```

#### 3. Configurar Frontend  
```bash
cd frontend
npm install                # Dependencias limpias
cp .env.example .env.local # Configurar variables de entorno
npm run dev                # ✅ App en http://localhost:3000
```

#### 4. Probar el Sistema ✅
- **Registro**: http://localhost:3000/auth/register
- **Login**: http://localhost:3000/auth/login  
- **Productos**: http://localhost:3000/products
- **API**: http://localhost:3001/api

### 🎯 **Demo en Vivo**
1. ✅ Registrar nuevo usuario → Funciona inmediatamente
2. ✅ Login con credenciales → Token JWT generado
3. ✅ Navegar por productos → Catálogo funcionando
4. ✅ Ver carrito → Interfaz lista

### 🔧 **Scripts Útiles**
```bash
# Backend
npm run start:dev          # Desarrollo con hot reload
npm run build             # Build para producción
npm run lint              # Linting

# Frontend  
npm run dev               # Desarrollo con hot reload
npm run build             # Build para producción
npm run start             # Servidor de producción
```

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/PharmaTorres.git
   cd PharmaTorres
   ```

2. **Configurar el Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env.local
   # Edita .env.local con tus variables de entorno
   npm run dev
   ```

3. **Configurar el Backend**
   ```bash
   cd ../backend
   npm install
   cp .env.example .env
   # Edita .env con tus variables de entorno
   npm run start:dev
   ```

### Variables de entorno

#### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXTAUTH_SECRET=tu-secret-key
NEXTAUTH_URL=http://localhost:3000
```

#### Backend (.env)
```
DATABASE_URL=tu-url-de-supabase
JWT_SECRET=tu-jwt-secret
PORT=3001
```

## 🏗️ Roadmap de desarrollo

### Fase 1 - MVP (Producto Mínimo Viable)
- [x] Estructura del proyecto
- [ ] Autenticación de usuarios
- [ ] Catálogo de productos
- [ ] Carrito de compras
- [ ] Checkout básico
- [ ] Panel de administración básico

### Fase 2 - Funcionalidades avanzadas
- [ ] Validación de recetas
- [ ] Sistema de pagos (Webpay)
- [ ] Seguimiento de pedidos
- [ ] Notificaciones por email
- [ ] Sistema de reviews

### Fase 3 - Optimización y escalabilidad
- [ ] Suscripciones recurrentes
- [ ] Recomendaciones con IA
- [ ] Integración con couriers
- [ ] App móvil

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Convención de commits
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Documentación
- `style:` Cambios de estilo/UI
- `refactor:` Mejoras internas
- `test:` Tests

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👥 Equipo

- **Desarrollo Frontend**: Por asignar
- **Desarrollo Backend**: Por asignar
- **Diseño UX/UI**: Por asignar
- **Product Manager**: Por asignar

## 📞 Contacto

Para consultas sobre el proyecto, contacta a: [email@pharmatorres.cl]

---

⭐️ **¿Te gusta el proyecto? ¡Dale una estrella!**
