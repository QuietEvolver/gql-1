const { ApolloServer } = require("@apollo/server"); // The Apollo Server library helps us implement this server quickly, painlessly, and in a production-ready way.
const { startStandaloneServer } = require("@apollo/server/standalone"); // import the startStandaloneServer function from the @apollo/server/standalone package.
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = require("./schema"); // typeDefs from our schema.js file

// using the schema property. This property is another way of initializing an Apollo Server, which is useful for building federated subgraphs
const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }), 
    mocks,
  }),
});
// actually call the function at the bottom of the function declaration
ApolloServer();

const mock = {
    Track: () => 
    ({
        id: () => "track_01", 
        title: () => "Astro Kitty, Space Explorer", 
        author: () => 
        {
            return {
                name: "Grumpy Cat", 
                photo: " https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mtcf3c.jpg",
            };
        },
        thumbnail: () => 
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        length: () => 1210, 
        modulesCount: () => 6, 
    }),
};