import React from 'react'

const Navbar = (props) => (
  <nav className='nav has-shadow'>
    <div className='container'>
      <div className='nav-left'>
        <a className='nav-item'>
          <img src='/logo.png' />
        </a>
      </div>
      <div className='nav-right nav-menu'>
        <a className='nav-item is-tab'>
          <span className='icon is-danger' style={{ marginRight: '8px' }}>
            <i className='fa fa-shopping-cart' />
          </span>
          <span>0</span>
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

export default Navbar
