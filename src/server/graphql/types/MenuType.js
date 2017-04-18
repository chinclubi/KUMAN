import {
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Menu',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    imagesUrl: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) }
  })
})
