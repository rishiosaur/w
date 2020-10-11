import { ApolloServer } from 'apollo-server-micro'
import resolvers from '../../src/api/resolvers'
import typeDefs from '../../src/api/typedefs'

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: true,
	introspection: true,
})

export const config = {
	api: {
		bodyParser: false,
	},
}

export default server.createHandler({ path: '/api/graphql' })
