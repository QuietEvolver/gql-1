const gql = require("graphql-tag");

const typeDefs = gql`
    # Schema definitions go here
        
    type Query {
        # Fields go here 
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        # Fields go here
        id: ID!
        "Thr track's title"
        title: String!
        "The track's main author"
        author: Author!
        "Thr track's main illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }

    "Author of the complete Track or a Module"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }
`;

module.exports = typeDefs;