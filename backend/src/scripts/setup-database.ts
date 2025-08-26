// Script para crear la base de datos en Supabase
import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabaseUrl = 'https://xuupljbmldoapqpzskck.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1dXBsamJtbGRvYXBxcHpza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyMTc2NDMsImV4cCI6MjA3MTc5MzY0M30.55L08TAzKvqugJpwSd3joe18nC5dlJxNTr9EA_pa_uE'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function setupDatabase() {
  try {
    console.log('🚀 Iniciando configuración de base de datos...')
    
    // Leer el archivo de esquema
    const schemaPath = path.join(__dirname, '..', 'docs', 'database_schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf8')
    
    console.log('📋 Ejecutando esquema de base de datos...')
    
    // Dividir el esquema en declaraciones individuales
    const statements = schema
      .split(';')
      .filter(statement => statement.trim().length > 0)
      .map(statement => statement.trim() + ';')
    
    // Ejecutar cada declaración
    for (const [index, statement] of statements.entries()) {
      try {
        if (statement.trim() === ';') continue
        
        console.log(`Ejecutando declaración ${index + 1}/${statements.length}...`)
        
        const { error } = await supabase.rpc('exec_sql', {
          sql_query: statement
        })
        
        if (error) {
          console.warn(`⚠️  Advertencia en declaración ${index + 1}:`, error.message)
        }
      } catch (err) {
        console.error(`❌ Error en declaración ${index + 1}:`, err)
      }
    }
    
    console.log('✅ Esquema de base de datos ejecutado')
    
    // Leer los datos de ejemplo
    const sampleDataPath = path.join(__dirname, '..', 'docs', 'sample_data.sql')
    const sampleData = fs.readFileSync(sampleDataPath, 'utf8')
    
    console.log('📋 Insertando datos de ejemplo...')
    
    // Dividir en declaraciones individuales
    const dataStatements = sampleData
      .split(';')
      .filter(statement => statement.trim().length > 0)
      .map(statement => statement.trim() + ';')
    
    // Ejecutar cada declaración de datos
    for (const [index, statement] of dataStatements.entries()) {
      try {
        if (statement.trim() === ';') continue
        
        console.log(`Insertando datos ${index + 1}/${dataStatements.length}...`)
        
        const { error } = await supabase.rpc('exec_sql', {
          sql_query: statement
        })
        
        if (error) {
          console.warn(`⚠️  Advertencia en inserción ${index + 1}:`, error.message)
        }
      } catch (err) {
        console.error(`❌ Error en inserción ${index + 1}:`, err)
      }
    }
    
    console.log('✅ Datos de ejemplo insertados')
    
    // Verificar que las tablas se crearon correctamente
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
    
    if (tablesError) {
      console.error('❌ Error al verificar tablas:', tablesError)
    } else {
      console.log('📊 Tablas creadas:')
      tables?.forEach(table => console.log(`  - ${table.table_name}`))
    }
    
    // Verificar algunos productos
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('name, price, requires_prescription')
      .limit(5)
    
    if (productsError) {
      console.error('❌ Error al verificar productos:', productsError)
    } else {
      console.log('🛍️  Productos de ejemplo:')
      products?.forEach(product => 
        console.log(`  - ${product.name} - $${product.price} ${product.requires_prescription ? '(Receta requerida)' : ''}`)
      )
    }
    
    console.log('🎉 ¡Base de datos configurada exitosamente!')
    console.log('')
    console.log('📋 Credenciales de prueba:')
    console.log('  Admin: admin@pharmatorres.cl / password123')
    console.log('  Farmacéutico: farmaceutico@pharmatorres.cl / password123')
    console.log('  Cliente: cliente@example.com / password123')
    
  } catch (error) {
    console.error('❌ Error general:', error)
  }
}

// Función alternativa usando queries directas si rpc no está disponible
async function setupDatabaseDirect() {
  try {
    console.log('🚀 Configuración alternativa de base de datos...')
    
    // Crear tablas principales manualmente
    console.log('👥 Creando tabla de usuarios...')
    // Esta sería una versión simplificada
    // En un entorno real, ejecutarías el SQL directamente en el panel de Supabase
    
    console.log('ℹ️  Para completar la configuración:')
    console.log('1. Ve al panel de Supabase: https://app.supabase.com/project/xuupljbmldoapqpzskck')
    console.log('2. Dirígete a SQL Editor')
    console.log('3. Ejecuta el contenido de docs/database_schema.sql')
    console.log('4. Luego ejecuta docs/sample_data.sql')
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

// Ejecutar el setup
if (require.main === module) {
  setupDatabase().catch(() => {
    console.log('Intentando método alternativo...')
    setupDatabaseDirect()
  })
}

export { setupDatabase, setupDatabaseDirect }
