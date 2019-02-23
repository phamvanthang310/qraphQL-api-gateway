export const order = {
  items: (parent, _, {dataSources}) => {
    console.log(`Order.items: (${parent.items})`);
    return parent.items.map(itemId => dataSources.productDatasource.getProduct(itemId));
  }
};
