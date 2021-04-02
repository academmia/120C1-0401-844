
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type  Category {
        id: ID
        name: String
    }

    type  Query {
        getCategories: [Category]
        getCategory(name: String!): Category!
        getCategoryById(id: String!): Category!
    }`

