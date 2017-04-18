import { GraphQLSchema } from 'graphql'
import QueryRootType from './QueryRootType'

export default new GraphQLSchema({
  query: QueryRootType
})
