import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { graphql, buildSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { stitchSchemas } from '@graphql-tools/stitch';
import wrappedSchema from './index.js';

const  typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};


async function startApolloServer() {
  const app = express();

  const httpServer = http.createServer(app);


  const schema1 = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const schema = stitchSchemas({
    subschemas: [
      schema1,
      wrappedSchema,
    ]
  });

  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

await startApolloServer();