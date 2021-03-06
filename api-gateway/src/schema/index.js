import { orderTypeDefs } from './order.schema';
import { consumerTypeDefs } from './consumer.schema';
import { productTypeDefs } from './product.schema';

const query = `
  type Query {
    getConsumers(id: ID): [Consumer!]
  }
`;

// export const typeDefs = makeExecutableSchema({
//   typeDefs: [productTypeDefs, orderTypeDefs, consumerTypeDefs, query]
// });

export const typeDefs = `
${orderTypeDefs}
${consumerTypeDefs}
${productTypeDefs}
${query}
`;
