export const orderResolver = {
  getOrders: (parent, {id}, {dataSources}, info) => {
    console.log(`getOrders: (${parent}, ${id}, ${dataSources}, info)`);
    return id ? dataSources.orderDatasource.getOrder(id) : dataSources.orderDatasource.getOrders();
  }
};
