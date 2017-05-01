import * as CartActions from '../km-modules/cart/cartActions'

import { gql, graphql } from 'react-apollo'

import PropTypes from 'prop-types'
import React from 'react'
import SuccessPage from './SuccessPage.react'
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

const SuccessPageContainer = ({ data: { restaurant } }) => (
  <SuccessPage restaurant={restaurant} />
)

SuccessPageContainer.propTypes = {
  data: PropTypes.shape({
    restaurant: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired
    })
  })
}

export default enhance(SuccessPageContainer)
