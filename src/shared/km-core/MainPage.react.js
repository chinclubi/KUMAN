import React, { Component } from 'react'

import BigHero from '../km-banners/BigHero.react'
import Footer from '../km-footer/Footer.react'
import Navbar from '../km-uikits/Navbar.react'
import PropTypes from 'prop-types'
import RestaurantList from '../km-homepage/RestaurantListContainer.react'
import RestaurantPage from '../km-restaurants/RestaurantPage.react'
import { Route } from 'react-router-dom'

class MainPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string
    })
  }

  render () {
    const { match } = this.props
    return (
      <div>
        <Navbar />
        <BigHero />
        <Route exact path={`${match.url}`} component={RestaurantList} />
        <Route path={`${match.url}:restaurantId`} render={() => <RestaurantPage />} />
        <Footer />
      </div>
    )
  }
}

export default MainPage
