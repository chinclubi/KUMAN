import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'

import Menu from './types/MenuType'
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
        const result = await query(`SELECT * FROM restaurants AS res WHERE res.id='${restaurantId}'`)
        return _.head(result)
      }
    },
    restaurants: {
      type: new GraphQLList(Restaurant),
      resolve: async (parent, { limit = 12 }) => {
        const restaurants = await query(`SELECT * FROM restaurants LIMIT ${limit}`)
        return transformImageUrl(restaurants, 'image')
      }
    },
    menus: {
      type: new GraphQLList(Menu),
      args: { restaurantId: { type: GraphQLString } },
      resolve: async (parent, { restaurantId }) => {
        const menus = await query(`SELECT * FROM menus AS m WHERE m.restaurantId='${restaurantId}'`)
        return transformImageUrl(menus, 'thumbnail')
      }
    }
  }
})

const transformImageUrl = (list, keyName) => (
  _.transform(list, (result, element) => {
    element[keyName] = addSigToImgUrl(element[keyName])
    result.push(element)
  }, [])
)

const addSigToImgUrl = (imgUrl) => {
  imgUrl = url.parse(imgUrl, true, false)
  imgUrl.query['sig'] = Math.floor(Math.random() * 100)
  return url.format(imgUrl)
}

export default RootQueryType
