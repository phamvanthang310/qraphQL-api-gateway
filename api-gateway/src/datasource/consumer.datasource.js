import { RESTDataSource } from 'apollo-datasource-rest';
import DataLoader from 'dataloader';

export class ConsumerDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8000';
    this.dataloader = new DataLoader(ids => this.getBatchConsumers(ids));
  }

  async getConsumers() {
    return this.get('/consumers');
  }

  async getConsumer(id) {
    return this.dataloader.load(id);
  }

  async getBatchConsumers(ids) {
    return this.get(`/consumers?ids=${ids.join(',')}`);
  }
}
