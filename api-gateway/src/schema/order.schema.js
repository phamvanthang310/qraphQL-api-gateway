export const orderTypeDefs = `
  type Order {
    id: ID
    status: String
    items: [Product!]!
  }
`;
