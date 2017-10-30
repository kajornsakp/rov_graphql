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
    heroWithName(name : String!) : Hero
    heroWithRole(role : String!) : [Hero]
}
`

const schema = makeExecutableSchema({typeDefs,resolvers});
// addMockFunctionsToSchema({schema})
export {schema};