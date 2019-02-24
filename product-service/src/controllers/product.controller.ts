import { repository, } from '@loopback/repository';
import { get, param, } from '@loopback/rest';
import { Product } from '../models';
import { ProductRepository } from '../repositories';

export class ProductController {
  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) {
  }

  //
  // @post('/products', {
  //   responses: {
  //     '200': {
  //       description: 'Product model instance',
  //       content: {'application/json': {schema: {'x-ts-type': Product}}},
  //     },
  //   },
  // })
  // async create(@requestBody() product: Product): Promise<Product> {
  //   return await this.productRepository.create(product);
  // }
  //
  // @get('/products/count', {
  //   responses: {
  //     '200': {
  //       description: 'Product model count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async count(
  //   @param.query.object('where', getWhereSchemaFor(Product)) where?: Where,
  // ): Promise<Count> {
  //   return await this.productRepository.count(where);
  // }

  @get('/products', {
    responses: {
      '200': {
        description: 'Array of Product model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Product}},
          },
        },
      },
    },
  })
  async batchFind(@param.query.string('ids') idsString: string): Promise<Product[]> {
    if (!idsString) {
      return await this.productRepository.find();
    }

    const ids = idsString.split(',');
    const products = await this.productRepository.find();
    return products.filter(product => ids.includes(String(product.id)));
  }

  //
  // @patch('/products', {
  //   responses: {
  //     '200': {
  //       description: 'Product PATCH success count',
  //       content: {'application/json': {schema: CountSchema}},
  //     },
  //   },
  // })
  // async updateAll(
  //   @requestBody() product: Product,
  //   @param.query.object('where', getWhereSchemaFor(Product)) where?: Where,
  // ): Promise<Count> {
  //   return await this.productRepository.updateAll(product, where);
  // }

  @get('/products/{id}', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: {'x-ts-type': Product}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Product> {
    return await this.productRepository.findById(id);
  }

  // @patch('/products/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Product PATCH success',
  //     },
  //   },
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody() product: Product,
  // ): Promise<void> {
  //   await this.productRepository.updateById(id, product);
  // }
  //
  // @put('/products/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Product PUT success',
  //     },
  //   },
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() product: Product,
  // ): Promise<void> {
  //   await this.productRepository.replaceById(id, product);
  // }

  // @del('/products/{id}', {
  //   responses: {
  //     '204': {
  //       description: 'Product DELETE success',
  //     },
  //   },
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.productRepository.deleteById(id);
  // }
}
