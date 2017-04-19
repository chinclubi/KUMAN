import PropTypes from 'prop-types'
import React from 'react'

const Menu = ({ menu: { name, price, thumbnail } }) => (
  <div className='column'>
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
              <a className='level-item'>
                <span className='icon'>
                  <i className='fa fa-cart-plus' />
                </span>
                <span>ADD</span>
              </a>
              <a className='level-item'>
                <span className='icon'>
                  <i className='fa fa-heart' />
                </span>
                <span>FAVORITE</span>
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
  }).isRequired
}

export default Menu
