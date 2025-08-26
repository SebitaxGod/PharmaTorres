# 🔐 Arquitectura del Sistema de Autenticación - PharmaTorres

## 📋 **Resumen del Sistema**

PharmaTorres implementa un sistema de autenticación robusto y seguro basado en:
- **Backend**: NestJS + TypeORM + PostgreSQL + bcrypt + JWT
- **Frontend**: Next.js + React Context + Axios
- **Base de datos**: Supabase PostgreSQL

## 🏗️ **Arquitectura General**

```
┌─────────────────┐    HTTP/HTTPS    ┌─────────────────┐    TypeORM    ┌─────────────────┐
│                 │  ←──────────────→ │                 │ ←──────────→  │                 │
│   FRONTEND      │      Axios       │    BACKEND      │   Database    │   POSTGRESQL    │
│   (Next.js)     │   + JSON/JWT     │   (NestJS)      │   Queries     │   (Supabase)    │
│                 │                  │                 │               │                 │
└─────────────────┘                  └─────────────────┘               └─────────────────┘
        │                                      │                               │
        │                                      │                               │
    ┌─────────┐                         ┌─────────────┐                ┌──────────────┐
    │ React   │                         │   bcrypt    │                │    users     │
    │ Context │                         │     +       │                │    table     │
    │   API   │                         │    JWT      │                │              │
    └─────────┘                         └─────────────┘                └──────────────┘
```

## 🔧 **Componentes del Sistema**

### **1. Frontend (Next.js)**

#### **AuthContext.tsx**
```typescript
- createContext() para estado global
- useState() para user, isLoading, isAuthenticated
- useEffect() para verificar token al cargar
- login(), register(), logout() functions
- localStorage para persistencia de token
```

#### **Páginas de autenticación**
```typescript
/app/auth/login/page.tsx     → Formulario de login
/app/auth/register/page.tsx  → Formulario de registro
```

#### **Componentes dinámicos**
```typescript
Navbar.tsx → Muestra estado de autenticación
           → Botones dinámicos Login/Logout
           → Información del usuario logueado
```

### **2. Backend (NestJS)**

#### **Módulo de Autenticación**
```typescript
auth/
├── auth.controller.ts    → POST /auth/register, /auth/login
├── auth.service.ts       → Lógica de hash, verificación, JWT
├── auth.module.ts        → Configuración JWT + imports
└── dto/
    ├── register.dto.ts   → Validación datos registro
    └── login.dto.ts      → Validación datos login
```

#### **Módulo de Usuarios**
```typescript
users/
├── users.service.ts      → CRUD con TypeORM
├── users.entity.ts       → Entidad con hash automático
└── users.module.ts       → Configuración TypeORM
```

#### **Módulo de Desarrollo**
```typescript
dev/
├── dev.controller.ts     → Endpoints reparación passwords
└── dev.service.ts        → Lógica migración legacy users
```

### **3. Base de Datos (PostgreSQL)**

#### **Tabla users**
```sql
id               UUID PRIMARY KEY
name             VARCHAR(255) NOT NULL
email            VARCHAR(255) UNIQUE NOT NULL
password         VARCHAR(255) NOT NULL  -- Hash bcrypt
phone            VARCHAR(20)
role             user_role DEFAULT 'customer'
isActive         BOOLEAN DEFAULT true
created_at       TIMESTAMP DEFAULT NOW()
updated_at       TIMESTAMP DEFAULT NOW()
```

## 🔄 **Flujos de Autenticación**

### **Flujo de Registro**

```
1. Usuario llena formulario en /auth/register
2. Frontend valida datos y envía POST a /api/auth/register
3. Backend valida DTO (email único, password fuerte)
4. Backend genera hash bcrypt del password
5. Backend crea usuario en BD con TypeORM
6. Backend verifica hash automáticamente
7. Backend genera JWT token
8. Backend retorna { access_token, user }
9. Frontend guarda token en localStorage
10. Frontend actualiza Context con usuario
11. Frontend redirige a página principal
```

### **Flujo de Login**

```
1. Usuario llena formulario en /auth/login
2. Frontend envía POST a /api/auth/login
3. Backend busca usuario por email
4. Backend compara password con bcrypt.compare()
5. Si válido: Backend genera JWT token
6. Backend retorna { access_token, user }
7. Frontend guarda token en localStorage
8. Frontend actualiza Context con usuario
9. Frontend redirige a página principal
```

### **Flujo de Verificación de Sesión**

```
1. Frontend carga aplicación
2. AuthContext useEffect() ejecuta checkAuthStatus()
3. Frontend busca token en localStorage
4. Si existe token: mantiene sesión (sin verificar server)
5. Frontend actualiza estado isAuthenticated = true
6. Navbar muestra información de usuario
```

## 🔒 **Características de Seguridad**

### **Hashing de Contraseñas**
```typescript
// En users.entity.ts
@BeforeInsert()
async hashPassword() {
  this.password = await bcrypt.hash(this.password, 10);
}

// Verificación automática durante registro
const isValidHash = await bcrypt.compare(registerDto.password, user.password);
```

### **JWT Tokens**
```typescript
// Configuración en auth.module.ts
JwtModule.register({
  secret: process.env.JWT_SECRET || 'pharmatorres-secret-key',
  signOptions: { expiresIn: '24h' },
})
```

### **Validación de DTOs**
```typescript
// register.dto.ts
@IsEmail()
email: string;

@IsStrongPassword()
@MinLength(8)
password: string;

@IsNotEmpty()
name: string;
```

## 🚀 **Endpoints Implementados**

### **Autenticación Principal**
```
POST /api/auth/register
Body: { name, email, phone, password }
Response: { access_token, user }

POST /api/auth/login  
Body: { email, password }
Response: { access_token, user }

POST /api/auth/forgot-password
Body: { email }
Response: { message }
```

### **Endpoints de Desarrollo**
```
POST /api/dev/repair-password
Body: { email, newPassword }
Response: { message, user }

POST /api/dev/repair-all-passwords
Body: { newPassword }
Response: { message, count }
```

## 🧪 **Testing y Validación**

### **Casos de Prueba Exitosos**
✅ Registro de usuario nuevo → Login inmediato
✅ Login con credenciales correctas → Token válido
✅ Logout → Limpieza de sesión
✅ Verificación automática de hash durante registro
✅ Reparación de contraseñas legacy
✅ Validación de datos de entrada
✅ Manejo de errores (email duplicado, password incorrecto)

### **Flujo de Testing Recomendado**
```bash
1. Registrar usuario: http://localhost:3000/auth/register
2. Verificar hash en BD: SELECT password FROM users WHERE email = '...'
3. Login: http://localhost:3000/auth/login
4. Verificar token JWT generado
5. Navegar por la aplicación con sesión activa
6. Logout y verificar limpieza de estado
```

## 🔧 **Configuración y Variables**

### **Frontend (.env.local)**
```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### **Backend (.env)**
```bash
JWT_SECRET=pharmatorres-secret-key
DATABASE_URL=postgresql://postgres:password@host:5432/pharmatorres
```

## 📈 **Próximas Mejoras**

### **Versión 0.3.0 Planeada**
- [ ] Refresh tokens para sesiones más largas
- [ ] Middleware de autenticación para rutas protegidas
- [ ] Roles y permisos granulares
- [ ] Verificación de email por correo
- [ ] Rate limiting en endpoints de auth
- [ ] Two-factor authentication (2FA)

### **Monitoreo y Logs**
- [ ] Logs de intentos de login
- [ ] Alertas de seguridad
- [ ] Métricas de autenticación
- [ ] Audit trail de cambios de usuario

---

**Fecha de última actualización**: 26 de agosto de 2025  
**Versión del sistema**: 0.2.0  
**Estado**: ✅ Funcionando al 100%
