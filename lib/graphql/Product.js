const Product = `
  type Product {
    _id: ID!
    title: String!
    price: Float!
    quantity: Int!
    images: [String!]!
    type: String!
    color: String!
  }
`;

export default Product;
