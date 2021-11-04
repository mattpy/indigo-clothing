const Query = `
  type Query {
    products(title: String, cart: [String!]): [Product!]!
  }
`;

export default Query;
