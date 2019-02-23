export const consumerTypeDefs = `
  type Consumer {
    id: ID
    name: String!
    orders: [Order!]!
  }
`;
