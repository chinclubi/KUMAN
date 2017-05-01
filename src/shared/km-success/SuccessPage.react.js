import BigHero from '../km-banners/BigHero.react'
import PropTypes from 'prop-types'
import React from 'react'

class SuccessPage extends React.Component {
  static propTypes = {
    restaurant: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired,
    clearCart: PropTypes.func.isRequired,
  }

  componentDidMount () {
    this.props.clearCart()
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
        <div className='section container'>
          <div className='tile notification is-primary'>
            <span className='icon is-large'>
              <i className='fa fa-check-circle-o' />
            </span>
            <p className='title' style={{ paddingTop: '4px', paddingLeft: '10px' }}>Thank you! we have received your order.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default SuccessPage
