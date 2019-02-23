import 'regenerator-runtime';

const {orderResolver} = require('./order.resolver');
const {consumerResolver} = require('./consumer.resolver');
const {productResolver} = require('./product.resolver');

export const resolvers = {
  Query: {
    ...orderResolver,
    ...productResolver

  },
  ...consumerResolver,

};


// module.exports = {
//   resolvers: {
//     ...orderResolver,
//     ...consumerResolver,
//     ...productResolver
//   }
// };
