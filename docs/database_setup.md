# Manual de Configuración de Base de Datos

## 🎯 Configuración de Supabase completada

### ✅ Información de conexión configurada:
- **URL del proyecto**: https://xuupljbmldoapqpzskck.supabase.co
- **API Key**: Configurada en variables de entorno
- **Base de datos**: PostgreSQL configurada

## 📋 Próximos pasos para la base de datos

### 1. Crear el esquema de base de datos

Accede al **SQL Editor de Supabase**:
🔗 https://app.supabase.com/project/xuupljbmldoapqpzskck/sql

**Paso a paso:**
1. Haz clic en "New query"
2. Copia y pega el contenido completo del archivo `docs/database_schema.sql`
3. Haz clic en "Run" para ejecutar el esquema
4. Espera a que se complete (puede tomar 1-2 minutos)

### 2. Insertar datos de ejemplo

En el mismo SQL Editor:
1. Crea una nueva consulta
2. Copia y pega el contenido del archivo `docs/sample_data.sql`
3. Ejecuta la consulta
4. Verifica que se insertaron los datos correctamente

### 3. Verificar la configuración

En el panel de Supabase, ve a:
- **Database > Tables** para ver las tablas creadas
- **Authentication > Users** (se configurará más adelante)
- **Storage > Buckets** para imágenes de productos

## 🛍️ Datos de ejemplo incluidos

### Productos de muestra:
- Paracetamol 500mg - $2.500
- Ibuprofeno 400mg - $3.200  
- Amoxicilina 500mg - $8.900 (requiere receta)
- Shampoo Head & Shoulders - $4.500
- Centrum Adultos - $12.900
- Eucerin FPS 60 - $18.900
- Y más...

### Usuarios de prueba:
- **Admin**: admin@pharmatorres.cl / password123
- **Farmacéutico**: farmaceutico@pharmatorres.cl / password123
- **Cliente**: cliente@example.com / password123

## 🔧 Configuración de Storage (Opcional)

Para las imágenes de productos:
1. Ve a **Storage** en Supabase
2. Crea un bucket llamado `products`
3. Configura como público para acceso a las imágenes
4. Sube imágenes de ejemplo si lo deseas

## ✅ Verificación final

Una vez completados los pasos anteriores:

```sql
-- Ejecuta esta consulta para verificar que todo funciona:
SELECT 
  (SELECT COUNT(*) FROM users) as total_users,
  (SELECT COUNT(*) FROM products) as total_products,
  (SELECT COUNT(*) FROM product_categories) as total_categories;
```

Deberías ver:
- total_users: 3
- total_products: 10
- total_categories: 10

## 🚀 ¡Listo para continuar!

Una vez completada la configuración de base de datos, puedes:
1. Iniciar el backend: `npm run start:dev`
2. Iniciar el frontend: `npm run dev`
3. Comenzar el desarrollo de las funcionalidades
