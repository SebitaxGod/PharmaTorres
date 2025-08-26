import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xuupljbmldoapqpzskck.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1dXBsamJtbGRvYXBxcHpza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMTc2NDMsImV4cCI6MjA3MTc5MzY0M30.55L08TAzKvqugJpwSd3joe18nC5dlJxNTr9EA_pa_uE'

export const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    console.log('🔗 Probando conexión a Supabase...')
    
    const { data, error } = await supabase
      .from('_test_table_that_does_not_exist')
      .select('*')
      .limit(1)
    
    if (error && error.message.includes('relation "_test_table_that_does_not_exist" does not exist')) {
      console.log('✅ Conexión a Supabase exitosa!')
      return true
    } else if (error) {
      console.error('❌ Error de conexión:', error.message)
      return false
    }
    
    return true
  } catch (err) {
    console.error('❌ Error de conexión:', err)
    return false
  }
}

async function createBasicTables() {
  console.log('📋 Creando tablas básicas...')
  
  // Para esta demostración, vamos a crear las tablas usando el SQL Editor de Supabase
  console.log('ℹ️  Para crear las tablas de la base de datos:')
  console.log('')
  console.log('1. Accede a https://app.supabase.com/project/xuupljbmldoapqpzskck')
  console.log('2. Ve a "SQL Editor" en el menú lateral')
  console.log('3. Crea una nueva consulta y ejecuta el contenido de:')
  console.log('   - docs/database_schema.sql (esquema completo)')
  console.log('   - docs/sample_data.sql (datos de ejemplo)')
  console.log('')
  console.log('🔗 Link directo al SQL Editor:')
  console.log('https://app.supabase.com/project/xuupljbmldoapqpzskck/sql')
  console.log('')
}

if (require.main === module) {
  testConnection().then(success => {
    if (success) {
      createBasicTables()
    }
  })
}
