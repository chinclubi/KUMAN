import { gql, graphql } from 'react-apollo'

import PropTypes from 'prop-types'
import React from 'react'
import RestaurantPage from './RestaurantPage.react'
import { compose } from 'recompose'
import withLoader from '../km-middleware/withLoader.react'

const RestaurantQuery = gql`
  query restaurant ($restaurantId: String) {
    restaurant (restaurantId: $restaurantId) {
      id
      name
      image
      place
    }
    menus (restaurantId: $restaurantId) {
      name
      price
      thumbnail
    }
  }
`
const enhance = compose(
  graphql(RestaurantQuery, {
    options: ({ match: { params } }) => ({
      variables: {
        restaurantId: params.restaurantId
      }
    })
  }),
  withLoader
)

const RestaurantPageContainer = ({ data: { restaurant, menus }, match }) => (
  <RestaurantPage restaurant={restaurant} menus={menus} />
)

RestaurantPageContainer.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  }),
  data: PropTypes.shape({
    restaurant: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired
    }),
    menus: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired
    }))
  })
}

export default enhance(RestaurantPageContainer)
