import { NotificationContainer, NotificationManager } from 'react-notifications'

import BigHero from '../km-banners/BigHero.react'
import Menu from '../km-menus/Menu.react'
import PropTypes from 'prop-types'
import React from 'react'

class RestaurantPage extends React.Component {
  static propTypes = {
    restaurant: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }),
    menus: PropTypes.array.isRequired,
    AddToCart: PropTypes.func.isRequired,
  }

  addToCart = (menu) => {
    this.createNotification()
    this.props.AddToCart(menu)
  }

  renderMenuList = (menus) => (
    menus.map((menu, i) => <Menu key={i} menu={menu} AddToCart={this.addToCart} />)
  )

  createNotification = () => {
    NotificationManager.success('ADDED', '', 2000)
  }

  render () {
    const { restaurant, menus } = this.props
    return (
      <section>
        <BigHero
          background={restaurant.image}
          title={restaurant.name}
          subtitle={`@${restaurant.place}`}
        />
        <div className='section container'>
          <div className='columns is-multiline'>
            {this.renderMenuList(menus)}
          </div>
        </div>
        <NotificationContainer />
      </section>
    )
  }
}

export default RestaurantPage
