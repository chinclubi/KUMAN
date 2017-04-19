import {
    GraphQLList,
    GraphQLObjectType,
} from 'graphql'

import Restaurant from './types/RestaurantType'
import _ from 'lodash'
import query from '../sql/query'
import url from 'url'

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    restaurants: {
      type: new GraphQLList(Restaurant),
      resolve: async (parent, { limit = 12 }) => {
        const restaurants = await query(`SELECT * FROM restaurants LIMIT ${limit}`)
        _.transform(restaurants, (result, restaurant) => {
          const imgUrl = url.parse(restaurant.image, true, false)
          imgUrl.query['sig'] = Math.random()
          restaurant.image = url.format(imgUrl)
          result.push(restaurant)
        }, [])
        return restaurants
      }
    }
  }
})

export default RootQueryType
