import PropTypes from 'prop-types'
import React from 'react'

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
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
                {restaurant.name}
              </h1>
              <h2 className='subtitle'>
                @{restaurant.place}
              </h2>
            </div>
          </div>
        </section>
        <div className='container'>
          RestaurantPage
        </div>
      </section>
    )
  }
}

export default RestaurantPage
