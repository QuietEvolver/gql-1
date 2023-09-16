const { ApolloServer } = require("@apollo/server"); // The Apollo Server library helps us implement this server quickly, painlessly, and in a production-ready way.
const { startStandaloneServer } = require("@apollo/server/standalone"); // import the startStandaloneServer function from the @apollo/server/standalone package.
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = require("./schema"); // typeDefs from our schema.js file

// using the schema property. This property is another way of initializing an Apollo Server, which is useful for building federated subgraphs
const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs })
  }),
});
// actually call the function at the bottom of the function declaration
ApolloServer();