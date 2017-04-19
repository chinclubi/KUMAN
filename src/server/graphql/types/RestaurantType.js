import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Restaurant',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: new GraphQLNonNull(GraphQLString) },
    place: { type: new GraphQLNonNull(GraphQLString) }
  })
})
