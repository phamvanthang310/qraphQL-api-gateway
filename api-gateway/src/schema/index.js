import { orderTypeDefs } from './order.schema';
import { consumerTypeDefs } from './consumer.schema';
import { productTypeDefs } from './product.schema';

const query = `
  type Query {
    getConsumers: [Consumer!]
    getConsumer(id: ID): Consumer!
  }
`;

export const typeDefs = `
${orderTypeDefs}
${consumerTypeDefs}
${productTypeDefs}
${query}
`;
