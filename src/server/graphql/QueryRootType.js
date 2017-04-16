import {
    GraphQLBoolean,
    GraphQLObjectType,
} from 'graphql'

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: new GraphQLObjectType({
                name: 'test',
                fields: () => ({
                    test: { type: GraphQLBoolean }
                })
            }),
            resolve: async () => ({ test: true })
        }
    }
})

export default RootQueryType