import PropTypes from 'prop-types'
import React from 'react'

const Menu = ({ menu: { id, name, price, thumbnail }, AddToCart }) => (
  <div className='column is-one-third'>
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <figure className='image is-128x128'>
            <img src={thumbnail} alt='Image' />
          </figure>
        </div>
        <div className='media-content'>
          <div className='content'>
            <p>
              <strong>{name}</strong>
              <br />
              {price} bath
            </p>
          </div>
          <nav className='level'>
            <div className='level-left'>
              <a className='level-item' onClick={() => AddToCart({ id, name, thumbnail, price })}>
                <span className='icon'>
                  <i className='fa fa-cart-plus' />
                </span>
                <span>ADD</span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </div>
)

Menu.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired
  }).isRequired,
  AddToCart: PropTypes.func.isRequired
}

export default Menu
