import { gql, graphql } from 'react-apollo'

import BigHero from '../km-banners/BigHero.react'
import PropTypes from 'prop-types'
import React from 'react'
import Restaurant from '../km-restaurants/Restaurant.react'
import { compose } from 'recompose'
import withLoader from '../km-middleware/withLoader.react'

const RestaurantListQuery = gql`
  query {
    restaurants {
      id
      name
      image
      place
    }
  }
`
const enhance = compose(
  graphql(RestaurantListQuery),
  withLoader
)

const RestaurantListContainer = (props) => (
  <section>
    <BigHero />
    <div className='section container'>
      <div className='columns is-multiline'>
        {props.data.restaurants.map(
          (restaurant, i) => <Restaurant key={i} restaurant={restaurant} />
        )}
      </div>
    </div>
  </section>
)

RestaurantListContainer.propTypes = {
  data: PropTypes.shape({
    restaurants: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }))
  })
}

export default enhance(RestaurantListContainer)
