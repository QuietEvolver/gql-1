const { ApolloServer } = require("@apollo/server"); // The Apollo Server library helps us implement this server quickly, painlessly, and in a production-ready way.
const { startStandaloneServer } = require("@apollo/server/standalone"); // import the startStandaloneServer function from the @apollo/server/standalone package.
const typeDefs = require("./schema"); // typeDefs from our schema.js file


//TODO