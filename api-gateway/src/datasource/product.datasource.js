import { RESTDataSource } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

export class ProductDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8002';
    this.dataloader = new DataLoader(ids => this.getBatchProduct(ids));
  }

  async getProducts() {
    return this.get('/products');
  }

  async getProduct(id) {
    return this.dataloader.load(id);
  }

  async getBatchProduct(ids) {
    return this.get(`/products?ids=${ids.join(',')}`);
  }
}
