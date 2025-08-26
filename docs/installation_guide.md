# Guía de Instalación - PharmaTorres

## 🚀 Configuración rápida del proyecto

### 1. Prerrequisitos
Asegúrate de tener instalado:
- **Node.js** (v18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** o **yarn** (viene con Node.js)
- **Git** - [Descargar aquí](https://git-scm.com/)

### 2. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/PharmaTorres.git
cd PharmaTorres
```

### 3. Configurar el Frontend (Next.js)

#### Instalar dependencias
```bash
cd frontend
npm install
```

#### Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
copy .env.example .env.local

# Editar .env.local con tus valores:
# NEXT_PUBLIC_API_URL=http://localhost:3001
# NEXTAUTH_SECRET=tu-secret-key-muy-segura
# NEXTAUTH_URL=http://localhost:3000
```

#### Ejecutar en modo desarrollo
```bash
npm run dev
```
El frontend estará disponible en: http://localhost:3000

### 4. Configurar el Backend (NestJS)

#### Instalar dependencias
```bash
cd ../backend
npm install
```

#### Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
copy .env.example .env

# Editar .env con tus valores:
# DATABASE_URL="postgresql://username:password@localhost:5432/pharmatorres"
# JWT_SECRET=tu-jwt-secret-muy-seguro
# PORT=3001
# FRONTEND_URL=http://localhost:3000
```

#### Ejecutar en modo desarrollo
```bash
npm run start:dev
```
El backend estará disponible en: http://localhost:3001

### 5. Configurar Base de Datos

#### Opción A: PostgreSQL Local
1. Instala PostgreSQL en tu sistema
2. Crea una base de datos llamada `pharmatorres`
3. Actualiza la `DATABASE_URL` en el archivo `.env`

#### Opción B: Supabase (Recomendado)
1. Ve a [supabase.com](https://supabase.com) y crea una cuenta
2. Crea un nuevo proyecto
3. Obtén la URL y las keys de tu proyecto
4. Actualiza las variables de Supabase en el archivo `.env`

### 6. Comandos útiles

#### Frontend
```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start

# Linting
npm run lint
```

#### Backend
```bash
# Desarrollo con recarga automática
npm run start:dev

# Construir para producción
npm run build

# Ejecutar en producción
npm run start:prod

# Tests
npm run test
npm run test:watch
npm run test:cov
```

### 7. Estructura de URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api
- **Documentación API**: http://localhost:3001/api/docs (próximamente)

### 8. Troubleshooting

#### Error: "Puerto ya en uso"
```bash
# Encontrar proceso usando el puerto 3000 o 3001
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Terminar el proceso (reemplaza PID con el número del proceso)
taskkill /PID <PID> /F
```

#### Error: "No se puede conectar a la base de datos"
- Verifica que PostgreSQL esté ejecutándose
- Confirma que las credenciales en `.env` sean correctas
- Si usas Supabase, verifica que las keys sean válidas

#### Error: "Módulos no encontrados"
```bash
# Limpiar cache e instalar de nuevo
rm -rf node_modules package-lock.json
npm install
```

### 9. Próximos pasos

1. **Configurar la base de datos**: Crea las tablas necesarias según el esquema en `docs/modular_structure.md`
2. **Implementar autenticación**: Configura NextAuth en el frontend y JWT en el backend
3. **Crear componentes**: Desarrolla los componentes de UI basándose en `docs/design.md`
4. **API endpoints**: Implementa los controladores y servicios del backend

### 10. Obtener ayuda

- Revisa la documentación en la carpeta `/docs`
- Consulta los issues en GitHub
- Contacta al equipo de desarrollo

---

¡Feliz desarrollo! 🎉
