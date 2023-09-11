const gql = require("graphql-tag");

const typeDefs = gql`
    # Schema definitions go here
`;

"A track is a group of Modules that teaches about a specific topic"
type Track {
    # Fields go here
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

"Author of the complete Track or a Module"
type Author {
    id: ID!
    name: String!
    photo: String
}


module.exports = typeDefs;