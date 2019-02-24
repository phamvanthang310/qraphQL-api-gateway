export const order = {
  items: (parent, _, {dataSources}) => {
    return parent.items.map(itemId => dataSources.productDatasource.getProduct(itemId));
  }
};
