export const consumerResolver = {
  Consumer: (parent, {id}, {dataSources}, info) => {
    return id ? dataSources.consumerDatasource.getConsumer(id) : dataSources.consumerDatasource.getConsumers();
  }
};
