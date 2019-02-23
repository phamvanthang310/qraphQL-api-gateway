import { OrderDatasource } from './order.datasource';
import { ProductDatasource } from './product.datasource';
import { ConsumerDatasource } from './consumer.datasource';

export const dataSources = () => {
  return {
    orderDatasource: new OrderDatasource(),
    productDatasource: new ProductDatasource(),
    consumerDatasource: new ConsumerDatasource()
  };
};

