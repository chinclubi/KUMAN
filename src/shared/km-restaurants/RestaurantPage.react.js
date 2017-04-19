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
    menus: PropTypes.array.isRequired
  }

  renderMenuList = (menus) => (
    menus.map((menu, i) => <Menu key={i} menu={menu} />)
  )

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
      </section>
    )
  }
}

export default RestaurantPage
