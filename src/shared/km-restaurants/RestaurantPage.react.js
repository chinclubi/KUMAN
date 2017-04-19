import BigHero from '../km-banners/BigHero.react'
import PropTypes from 'prop-types'
import React from 'react'
import className from 'classnames'
import styles from './RestaurantPage.styl'

class RestaurantPage extends React.Component {
  static propTypes = {
    restaurant: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  }

  render () {
    const { restaurant } = this.props
    return (
      <section>
        <BigHero
          background={restaurant.image}
          title={restaurant.name}
          subtitle={`@${restaurant.place}`}
        />
        <div className='container'>
          RestaurantPage
        </div>
      </section>
    )
  }
}

export default RestaurantPage
