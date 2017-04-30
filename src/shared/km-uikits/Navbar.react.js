import PropTypes from 'prop-types'
import React from 'react'
import className from 'classnames'
import styles from './NavBar.styl'

const Navbar = (props) => {
  const menuLength = Object.keys(props.carts).length
  return (
    <nav className='nav has-shadow'>
      <div className='container'>
        <div className='nav-left'>
          <a href='/' className='nav-item'>
            <img src='/logo.png' />
          </a>
        </div>
        <div className='nav-right nav-menu'>
          <a className={className('nav-item', 'is-tab', { [styles['cart__not-empty']]: menuLength > 0 })}>
            <span className='icon is-danger' style={{ marginRight: '8px' }}>
              <i className='fa fa-shopping-cart' />
            </span>
            <span>{menuLength}</span>
          </a>
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
  carts: PropTypes.object.isRequired
}

export default Navbar
