import {
    GraphQLList,
    GraphQLObjectType,
} from 'graphql'

import Restaurant from './types/RestaurantType'

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    restaurants: {
      type: new GraphQLList(Restaurant),
      resolve: async () => ([
        { name: 'Chin Restaurant', image: 'https://source.unsplash.com/collection/622228/1280x960', place: 'Faculty of Engineer' },
        { name: 'Chin Restaurant', image: 'https://source.unsplash.com/collection/622228/1280x960', place: 'Faculty of Business' },
        { name: 'Chin Restaurant', image: 'https://source.unsplash.com/collection/622228/1280x960', place: 'Faculty of Business' }
      ])
    }
  }
})

export default RootQueryType
