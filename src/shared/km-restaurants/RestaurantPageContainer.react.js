import * as CartActions from '../km-modules/cart/cartActions'

import { gql, graphql } from 'react-apollo'

import PropTypes from 'prop-types'
import React from 'react'
import RestaurantPage from './RestaurantPage.react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
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
      id
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
  withLoader,
  connect(
    ({ carts }) => ({ carts }),
    CartActions
  )
)

const RestaurantPageContainer = ({ data: { restaurant, menus }, match, Add }) => (
  <RestaurantPage restaurant={restaurant} menus={menus} AddToCart={Add} />
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
  }),
  Add: PropTypes.func.isRequired
}

export default enhance(RestaurantPageContainer)
