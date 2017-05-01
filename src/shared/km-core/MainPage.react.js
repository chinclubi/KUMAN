import React, { Component } from 'react'

import CheckOutPage from '../km-checkout/CheckOutPageContainer.react'
import Footer from '../km-footer/Footer.react'
import Navbar from '../km-uikits/NavBarContainer.react'
import PropTypes from 'prop-types'
import RestaurantList from '../km-homepage/RestaurantListContainer.react'
import RestaurantPage from '../km-restaurants/RestaurantPageContainer.react'
import { Route } from 'react-router-dom'
import SuccessPage from '../km-success/SuccessPageContainer.react'

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
        <Route exact path={`${match.url}`} component={RestaurantList} />
        <Route exact path={`${match.url}:restaurantId`} component={RestaurantPage} />
        <Route exact path={`${match.url}:restaurantId/success`} component={SuccessPage} />
        <Route exact path={`${match.url}:restaurantId/checkout`} component={CheckOutPage} />
        <Footer />
      </div>
    )
  }
}

export default MainPage
