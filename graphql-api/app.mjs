import graphql from 'graphql-yoga';
import dotenv from 'dotenv';

import typeDefs from './typeDefs.mjs';
import resolvers from './resolvers.mjs';

const { GraphQLServer } = graphql;
dotenv.config();

const options = {
  port: 8000,
  endpoint: '/graphql',
  // subscriptions: '/subscriptions',
  playground: '/playground'
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    //if we pass anything here can be available in all resolvers
  }
});

server.start(options, ({ port }) =>
  console.log(`Graphql server listening on http://localhost:${port}`)
);
