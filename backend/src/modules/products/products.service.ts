import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  async findAll() {
    // TODO: Implementar conexión a Supabase
    return {
      message: 'Lista de productos',
      data: [
        {
          id: '1',
          name: 'Paracetamol 500mg',
          price: 2500,
          short_description: 'Alivio rápido del dolor y fiebre',
          requires_prescription: false,
          image_url: '/api/placeholder/200/200'
        },
        {
          id: '2',
          name: 'Ibuprofeno 400mg',
          price: 3200,
          short_description: 'Antiinflamatorio potente',
          requires_prescription: false,
          image_url: '/api/placeholder/200/200'
        },
        {
          id: '3',
          name: 'Amoxicilina 500mg',
          price: 8900,
          short_description: 'Antibiótico recetado',
          requires_prescription: true,
          image_url: '/api/placeholder/200/200'
        },
        {
          id: '4',
          name: 'Centrum Adultos',
          price: 12900,
          short_description: 'Vitaminas y minerales esenciales',
          requires_prescription: false,
          image_url: '/api/placeholder/200/200'
        },
        {
          id: '5',
          name: 'Eucerin Protector Solar FPS 60',
          price: 18900,
          short_description: 'Protección solar avanzada',
          requires_prescription: false,
          image_url: '/api/placeholder/200/200'
        },
        {
          id: '6',
          name: 'Shampoo Anticaspa',
          price: 4500,
          short_description: 'Elimina la caspa efectivamente',
          requires_prescription: false,
          image_url: '/api/placeholder/200/200'
        },
        {
          id: '7',
          name: 'Loratadina 10mg',
          price: 3800,
          short_description: 'Alivio de síntomas alérgicos',
          requires_prescription: false,
          image_url: '/api/placeholder/200/200'
        },
        {
          id: '8',
          name: 'Omeprazol 20mg',
          price: 4500,
          short_description: 'Control de acidez estomacal',
          requires_prescription: true,
          image_url: '/api/placeholder/200/200'
        }
      ]
    };
  }

  async findOne(id: string) {
    // TODO: Implementar búsqueda por ID
    return {
      message: `Producto ${id}`,
      data: {
        id,
        name: 'Producto ejemplo',
        price: 1000
      }
    };
  }

  async create(createProductDto: CreateProductDto) {
    // TODO: Implementar creación de producto
    return {
      message: 'Producto creado',
      data: createProductDto
    };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    // TODO: Implementar actualización
    return {
      message: `Producto ${id} actualizado`,
      data: updateProductDto
    };
  }

  async remove(id: string) {
    // TODO: Implementar eliminación
    return {
      message: `Producto ${id} eliminado`
    };
  }
}
