import { gql } from 'apollo-server-micro'

const typeDefs = gql`
	type Query {
		rishi: Rishi!
	}

	type Rishi {
		name: String!
		age: String!
		birthday: String!
		mood: String!
		spotify: Spotify!
	}

	type Spotify {
		artists: String!
		album: String!
		name: String!
		playing: Boolean!
		url: String!
	}
`

export default typeDefs
