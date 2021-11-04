import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { connectDB } from '../../lib/db/db-util';
import typeDefs from '../../lib/graphql/typeDefs';
import resolvers from '../../lib/graphql/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    client: await connectDB()
  }),
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({
    path: '/api/graphql'
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
