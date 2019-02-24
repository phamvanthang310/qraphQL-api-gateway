export const consumer = {
  orders: (parent, _, {dataSources}, info) => {
    return parent.orders.map(orderId => dataSources.orderDatasource.getOrder(orderId));
  }
};

export const getConsumers = (_, arg, {dataSources}, info) => {
  return dataSources.consumerDatasource.getConsumers();
};

export const getConsumer = (_, {id}, {dataSources}, info) => {
  return dataSources.consumerDatasource.getConsumer(id);
};
