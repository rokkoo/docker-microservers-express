const typeDef = `
 type Product {
  _id: ID!
  name: String
  description: String
  reviews: [Review!]!
 }

 type Review {
  _id: ID!
  title: String
  grade: Int
  comment: String
  product: Product!
 }

 type Query {
  product(id:Int!): [Product!]
 }
`;

export default typeDef;
