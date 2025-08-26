const { DataSource } = require('typeorm');
const bcrypt = require('bcrypt');

// Configuración de conexión
const dataSource = new DataSource({
  type: 'postgres',
  host: 'db.xuupljbmldoapqpzskck.supabase.co',
  port: 5432,
  username: 'postgres',
  password: 'TU9js5XaB2iPCmCz',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false,
  },
});

async function fixUserPasswords() {
  try {
    await dataSource.initialize();
    console.log('✅ Conectado a la base de datos');
    
    // Vamos a crear hashes con la contraseña que quieres usar
    const password1 = '15975345'; // Tu contraseña original
    const password2 = 'password123'; // Contraseña de prueba
    
    const hash1 = await bcrypt.hash(password1, 10);
    const hash2 = await bcrypt.hash(password2, 10);
    
    console.log('🔐 Hash generado para 15975345:', hash1);
    console.log('🔐 Hash generado para password123:', hash2);
    
    // Verificar que los hashes funcionan
    const test1 = await bcrypt.compare(password1, hash1);
    const test2 = await bcrypt.compare(password2, hash2);
    
    console.log('✅ Test hash 15975345:', test1);
    console.log('✅ Test hash password123:', test2);
    
    if (test1 && test2) {
      // Actualizar tu usuario principal
      await dataSource.query(
        'UPDATE users SET password_hash = $1 WHERE email = $2',
        [hash1, 'sebigonza1701@gmail.com']
      );
      
      // Actualizar usuario de prueba
      await dataSource.query(
        'UPDATE users SET password_hash = $1 WHERE email = $2',
        [hash2, 'testdebug@example.com']
      );
      
      console.log('✅ Contraseñas actualizadas exitosamente!');
      console.log('📧 sebigonza1701@gmail.com - Contraseña: 15975345');
      console.log('📧 testdebug@example.com - Contraseña: password123');
    } else {
      console.log('❌ Error: Los hashes no se validaron correctamente');
    }
    
    await dataSource.destroy();
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

fixUserPasswords();
