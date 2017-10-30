import {makeExecutableSchema,addMockFunctionsToSchema} from 'graphql-tools';
import {resolvers} from './resolvers'

const typeDefs = `
type Hero {
    id : ID!
    name : String
    role : [String]
}

type Query {
    heroes : [Hero]
}
`

const schema = makeExecutableSchema({typeDefs,resolvers});
// addMockFunctionsToSchema({schema})
export {schema};