import 'regenerator-runtime';
import * as consumerResolver from './consumer.resolver';
import * as orderResolver from './order.resolver';
import * as productResolver from './product.resolver';

export const resolvers = {
  Query: {
    getConsumers: consumerResolver.getConsumers,
    getConsumer: consumerResolver.getConsumer,
  },
  Consumer: consumerResolver.consumer,
  Order: orderResolver.order,
  Product: productResolver.product,
};
