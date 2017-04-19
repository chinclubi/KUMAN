import PropTypes from 'prop-types'
import React from 'react'

const RestaurantItem = ({ restaurant }) => {
  return (
    <div className='column is-one-third'>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src={restaurant.image} alt='Image' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>{restaurant.name}</p>
              <p className='subtitle is-6'>@{restaurant.place}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

RestaurantItem.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired
  })
}

export default RestaurantItem