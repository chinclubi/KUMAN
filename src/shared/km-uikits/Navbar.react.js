import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import className from 'classnames'
import styles from './NavBar.styl'

const Navbar = ({ carts, location: { pathname } }) => {
  const menuLength = Object.keys(carts).length
  return (
    <nav className='nav has-shadow'>
      <div className='container'>
        <div className='nav-left'>
          <Link to='/' className='nav-item'>
            <img src='/logo.png' />
          </Link>
        </div>
        <div className='nav-right nav-menu'>
          { menuLength === 0 ? (
            <div className='nav-item is-tab'>
              <span className='icon is-danger' style={{ marginRight: '8px' }}>
                <i className='fa fa-shopping-cart' />
              </span>
              <span>0</span>
            </div>
          ) : (
            <Link to={`${pathname}/checkout`} className={className('nav-item', 'is-tab', styles['cart__not-empty'])}>
              <span className='icon is-danger' style={{ marginRight: '8px' }}>
                <i className='fa fa-shopping-cart' />
              </span>
              <span>{menuLength}</span>
            </Link>
          )}
          <a className='nav-item is-tab'>
            <span className='icon is-danger' style={{ marginRight: '8px' }}>
              <i className='fa fa-user' />
            </span>
            <span>Profile</span>
          </a>
          <a className='nav-item is-tab'>
            Logout
          </a>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  carts: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired
}

export default Navbar
