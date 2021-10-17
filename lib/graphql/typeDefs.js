import { gql } from 'apollo-server-micro';

import Query from './Query';
import Product from './Product';

const typeDefs = gql`
  ${Query}
  ${Product}
`;

export default typeDefs;
