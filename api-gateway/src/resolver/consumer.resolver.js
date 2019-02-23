export const consumer = {
  orders: (parent, _, {dataSources}, info) => {
    console.log(`Consumer.orders: ${parent.orders}-${parent.id}`);
    return parent.orders.map(orderId => dataSources.orderDatasource.getOrder(orderId));
  }
};

export const getConsumers = (_, {id}, {dataSources}, info) => {
  return id ? dataSources.consumerDatasource.getConsumer(id) : dataSources.consumerDatasource.getConsumers();
};
