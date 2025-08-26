-- Datos de ejemplo para PharmaTorres - VERSIÓN CORREGIDA
-- Este archivo contiene datos iniciales para desarrollo y testing

-- Insertar categorías de productos
INSERT INTO product_categories (id, name, slug, description) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'Medicamentos', 'medicamentos', 'Medicamentos con y sin receta médica'),
    ('550e8400-e29b-41d4-a716-446655440002', 'Cuidado Personal', 'cuidado-personal', 'Productos de higiene y cuidado personal'),
    ('550e8400-e29b-41d4-a716-446655440003', 'Suplementos', 'suplementos', 'Vitaminas y suplementos nutricionales'),
    ('550e8400-e29b-41d4-a716-446655440004', 'Dermocosméticos', 'dermocosmeticos', 'Productos dermatológicos y cosméticos'),
    ('550e8400-e29b-41d4-a716-446655440005', 'Bebé y Mamá', 'bebe-mama', 'Productos para bebés y madres'),
    ('550e8400-e29b-41d4-a716-446655440006', 'Primeros Auxilios', 'primeros-auxilios', 'Productos para primeros auxilios')
ON CONFLICT (id) DO NOTHING;

-- Insertar subcategorías
INSERT INTO product_categories (id, name, slug, description, parent_category_id) VALUES
    ('550e8400-e29b-41d4-a716-446655440011', 'Analgésicos', 'analgesicos', 'Medicamentos para el dolor', '550e8400-e29b-41d4-a716-446655440001'),
    ('550e8400-e29b-41d4-a716-446655440012', 'Antibióticos', 'antibioticos', 'Medicamentos antibióticos', '550e8400-e29b-41d4-a716-446655440001'),
    ('550e8400-e29b-41d4-a716-446655440013', 'Shampoo', 'shampoo', 'Shampoos y productos capilares', '550e8400-e29b-41d4-a716-446655440002'),
    ('550e8400-e29b-41d4-a716-446655440014', 'Vitaminas', 'vitaminas', 'Complejos vitamínicos', '550e8400-e29b-41d4-a716-446655440003')
ON CONFLICT (id) DO NOTHING;

-- Insertar productos de ejemplo
INSERT INTO products (id, name, slug, description, short_description, sku, price, stock_quantity, requires_prescription, category_id, manufacturer, active_ingredient, dosage, presentation) VALUES
    ('550e8400-e29b-41d4-a716-446655440101', 'Paracetamol 500mg', 'paracetamol-500mg', 'Analgésico y antipirético para el alivio del dolor y la fiebre', 'Alivio rápido del dolor y fiebre', 'PARA-500-24', 2500, 150, false, '550e8400-e29b-41d4-a716-446655440011', 'Laboratorio Chile', 'Paracetamol', '500mg', 'Caja x 24 tabletas'),
    ('550e8400-e29b-41d4-a716-446655440102', 'Ibuprofeno 400mg', 'ibuprofeno-400mg', 'Antiinflamatorio no esteroideo para dolor e inflamación', 'Antiinflamatorio potente', 'IBU-400-20', 3200, 200, false, '550e8400-e29b-41d4-a716-446655440011', 'Farmacia Nacional', 'Ibuprofeno', '400mg', 'Caja x 20 cápsulas'),
    ('550e8400-e29b-41d4-a716-446655440103', 'Amoxicilina 500mg', 'amoxicilina-500mg', 'Antibiótico de amplio espectro para infecciones bacterianas', 'Antibiótico recetado', 'AMOX-500-21', 8900, 80, true, '550e8400-e29b-41d4-a716-446655440012', 'Laboratorio Andromaco', 'Amoxicilina', '500mg', 'Caja x 21 cápsulas'),
    ('550e8400-e29b-41d4-a716-446655440104', 'Shampoo Anticaspa Head & Shoulders', 'shampoo-head-shoulders', 'Shampoo anticaspa con zinc piritiona', 'Elimina la caspa efectivamente', 'HS-ANTI-400', 4500, 120, false, '550e8400-e29b-41d4-a716-446655440013', 'Procter & Gamble', 'Zinc Piritiona', '1%', 'Frasco 400ml'),
    ('550e8400-e29b-41d4-a716-446655440105', 'Centrum Adultos', 'centrum-adultos', 'Multivitamínico completo para adultos', 'Vitaminas y minerales esenciales', 'CENT-ADU-100', 12900, 90, false, '550e8400-e29b-41d4-a716-446655440014', 'Pfizer', 'Complejo multivitamínico', 'Variado', 'Frasco x 100 tabletas'),
    ('550e8400-e29b-41d4-a716-446655440106', 'Eucerin Protector Solar FPS 60', 'eucerin-fps60', 'Protector solar facial con máxima protección', 'Protección solar avanzada', 'EUC-FPS60-50', 18900, 60, false, '550e8400-e29b-41d4-a716-446655440004', 'Eucerin', 'Filtros UV', 'FPS 60', 'Tubo 50ml'),
    ('550e8400-e29b-41d4-a716-446655440107', 'Vendas Elásticas', 'vendas-elasticas', 'Vendas elásticas para primeros auxilios', 'Vendaje flexible y resistente', 'VEND-ELAS-6', 1200, 200, false, '550e8400-e29b-41d4-a716-446655440006', 'Primeros Auxilios SA', 'Algodón elástico', 'N/A', 'Paquete x 6 unidades'),
    ('550e8400-e29b-41d4-a716-446655440108', 'Loratadina 10mg', 'loratadina-10mg', 'Antihistamínico para alergias', 'Alivio de síntomas alérgicos', 'LORA-10-30', 3800, 100, false, '550e8400-e29b-41d4-a716-446655440001', 'Laboratorio Recalcine', 'Loratadina', '10mg', 'Caja x 30 tabletas'),
    ('550e8400-e29b-41d4-a716-446655440109', 'Omeprazol 20mg', 'omeprazol-20mg', 'Inhibidor de la bomba de protones para acidez', 'Control de acidez estomacal', 'OME-20-14', 4500, 130, true, '550e8400-e29b-41d4-a716-446655440001', 'Laboratorio Chile', 'Omeprazol', '20mg', 'Caja x 14 cápsulas'),
    ('550e8400-e29b-41d4-a716-446655440110', 'Suero Fisiológico', 'suero-fisiologico', 'Solución salina estéril para limpieza', 'Limpieza de heridas y mucosas', 'SUERO-FIS-250', 800, 300, false, '550e8400-e29b-41d4-a716-446655440006', 'Farmacia Universal', 'Cloruro de sodio', '0.9%', 'Frasco 250ml')
ON CONFLICT (id) DO NOTHING;

-- Insertar imágenes de productos (URLs de ejemplo)
INSERT INTO product_images (product_id, image_url, alt_text, is_primary) VALUES
    ('550e8400-e29b-41d4-a716-446655440101', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/paracetamol-500mg.jpg', 'Paracetamol 500mg caja', true),
    ('550e8400-e29b-41d4-a716-446655440102', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/ibuprofeno-400mg.jpg', 'Ibuprofeno 400mg caja', true),
    ('550e8400-e29b-41d4-a716-446655440103', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/amoxicilina-500mg.jpg', 'Amoxicilina 500mg caja', true),
    ('550e8400-e29b-41d4-a716-446655440104', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/head-shoulders.jpg', 'Head & Shoulders shampoo', true),
    ('550e8400-e29b-41d4-a716-446655440105', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/centrum-adultos.jpg', 'Centrum Adultos frasco', true),
    ('550e8400-e29b-41d4-a716-446655440106', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/eucerin-fps60.jpg', 'Eucerin Protector Solar FPS 60', true),
    ('550e8400-e29b-41d4-a716-446655440107', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/vendas-elasticas.jpg', 'Vendas elásticas paquete', true),
    ('550e8400-e29b-41d4-a716-446655440108', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/loratadina-10mg.jpg', 'Loratadina 10mg caja', true),
    ('550e8400-e29b-41d4-a716-446655440109', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/omeprazol-20mg.jpg', 'Omeprazol 20mg caja', true),
    ('550e8400-e29b-41d4-a716-446655440110', 'https://xuupljbmldoapqpzskck.supabase.co/storage/v1/object/public/products/suero-fisiologico.jpg', 'Suero fisiológico frasco', true);

-- Insertar usuario administrador de ejemplo
INSERT INTO users (id, email, password_hash, first_name, last_name, role, email_verified) VALUES
    ('550e8400-e29b-41d4-a716-446655440201', 'admin@pharmatorres.cl', '$2b$10$K7L/8Y.sJ8kCzGO3ZMn8KOqGhXY4NDOQwlKOGUGjFwPnLQEOeXKfO', 'Administrador', 'PharmaTorres', 'admin', true),
    ('550e8400-e29b-41d4-a716-446655440202', 'farmaceutico@pharmatorres.cl', '$2b$10$K7L/8Y.sJ8kCzGO3ZMn8KOqGhXY4NDOQwlKOGUGjFwPnLQEOeXKfO', 'María', 'González', 'pharmacist', true),
    ('550e8400-e29b-41d4-a716-446655440203', 'cliente@example.com', '$2b$10$K7L/8Y.sJ8kCzGO3ZMn8KOqGhXY4NDOQwlKOGUGjFwPnLQEOeXKfO', 'Juan', 'Pérez', 'customer', true)
ON CONFLICT (email) DO NOTHING;

-- Insertar direcciones de ejemplo (sin ON CONFLICT porque no hay restricción única)
INSERT INTO user_addresses (user_id, street_address, city, region, postal_code, is_default) VALUES
    ('550e8400-e29b-41d4-a716-446655440203', 'Av. Providencia 1234, Depto 56', 'Santiago', 'Región Metropolitana', '7500000', true),
    ('550e8400-e29b-41d4-a716-446655440203', 'Calle Las Flores 789', 'Valparaíso', 'Región de Valparaíso', '2340000', false);

-- Insertar cupones de ejemplo
INSERT INTO coupons (code, name, description, discount_type, discount_value, minimum_order_amount, valid_from, valid_until) VALUES
    ('BIENVENIDO10', 'Descuento de Bienvenida', '10% de descuento en tu primera compra', 'percentage', 10.00, 15000, NOW() - INTERVAL '1 day', NOW() + INTERVAL '30 days'),
    ('ENVIOGRATIS', 'Envío Gratis', 'Envío gratis en compras sobre $25.000', 'fixed_amount', 3000.00, 25000, NOW() - INTERVAL '1 day', NOW() + INTERVAL '60 days'),
    ('VERANO2025', 'Descuento de Verano', '15% en productos de cuidado solar', 'percentage', 15.00, 10000, NOW() - INTERVAL '1 day', NOW() + INTERVAL '60 days')
ON CONFLICT (code) DO NOTHING;
