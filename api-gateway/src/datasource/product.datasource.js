const {RESTDataSource} = require('apollo-datasource-rest');

export class ProductDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8002';
  }

  async getProducts() {
    return this.get('/products');
  }

  async getProduct(id) {
    return this.get(`/products/${id}`);
  }
}
