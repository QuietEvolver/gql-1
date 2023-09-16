const { ApolloServer } = require("@apollo/server"); // The Apollo Server library helps us implement this server quickly, painlessly, and in a production-ready way.
const { startStandaloneServer } = require("@apollo/server/standalone"); // import the startStandaloneServer function from the @apollo/server/standalone package.
const typeDefs = require("./schema"); // typeDefs from our schema.js file

///  set up an async function called startApolloServer. Inside, we'll create an instance of the ApolloServer class and pass it our typeDefs in its options object
async function startApolloServer(){
    const server = new ApolloServer({typeDefs});
    // Note: We're using shorthand property notation with implied keys, because we've named our constant with the matching key (typeDefs).
    const { url } = startStandaloneServer(server);// initialize server
    //The startStandaloneServer function returns a Promise, so we'll await the results of that call, and pull out the url property from the result.
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `); 
    
}
//TODO