import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'

import Restaurant from './types/RestaurantType'
import _ from 'lodash'
import query from '../sql/query'
import url from 'url'

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    restaurant: {
      type: Restaurant,
      args: { restaurantId: { type: GraphQLString } },
      resolve: async (parent, { restaurantId }) => {
        const result = await query(`SELECT * FROM restaurants WHERE id=${restaurantId}`)
        return _.head(result)
      }
    },
    restaurants: {
      type: new GraphQLList(Restaurant),
      resolve: async (parent, { limit = 12 }) => {
        const restaurants = await query(`SELECT * FROM restaurants LIMIT ${limit}`)
        _.transform(restaurants, (result, restaurant) => {
          restaurant.image = addSigToImgUrl(restaurant.image)
          result.push(restaurant)
        }, [])
        return restaurants
      }
    }
  }
})

const addSigToImgUrl = (imgUrl) => {
  imgUrl = url.parse(imgUrl, true, false)
  imgUrl.query['sig'] = Math.random()
  return url.format(imgUrl)
}

export default RootQueryType
