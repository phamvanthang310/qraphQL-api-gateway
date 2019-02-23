const {RESTDataSource} = require('apollo-datasource-rest');

export class ConsumerDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8080';
  }

  async getConsumers() {
    return this.get('/consumers');
  }

  async getConsumer(id) {
    return this.get(`/consumers/${id}`);
  }
}
