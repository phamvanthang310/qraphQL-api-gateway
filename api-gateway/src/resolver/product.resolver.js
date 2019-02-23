export const productResolver = {
  getProducts: (parent, {id}, {dataSources}, info) => {
    console.log(`getProducts: (${parent}, ${id}, ${dataSources}, info)`);
    return id ? dataSources.productDatasource.getProduct(id) : dataSources.productDatasource.getProducts();
  }
};
