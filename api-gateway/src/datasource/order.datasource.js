const {RESTDataSource} = require('apollo-datasource-rest');

export class OrderDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8001';
  }

  async getOrders() {
    return this.get('/orders');
  }

  async getOrder(id) {
    return this.get(`/orders/${id}`);
  }
}
