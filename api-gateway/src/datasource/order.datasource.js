import { RESTDataSource } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

export class OrderDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8001';
    this.dataloader = new DataLoader(ids => this.getBatchOrder(ids));
  }

  async getOrders() {
    return this.get('/orders');
  }

  async getOrder(id) {
    return this.dataloader.load(id);
  }

  async getBatchOrder(ids) {
    return this.get(`/orders?ids=${ids.join(',')}`);
  }
}
