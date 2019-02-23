export const product = (_, {id}, {dataSources}) => {
  return id ? dataSources.productDatasource.getProduct(id) : dataSources.productDatasource.getProducts();
};
