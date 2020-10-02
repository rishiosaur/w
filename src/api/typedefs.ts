import { gql } from "apollo-server-micro";

const typeDefs = gql`
type Query {
    rishi: Rishi!
}

type Rishi {
    name: String!
    age: String!
    birthday: String!
    mood: String!
}

`

export default typeDefs