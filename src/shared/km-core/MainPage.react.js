import React, { Component } from 'react'

import BigHero from '../km-banners/BigHero.react'
import Footer from '../km-footer/Footer.react'
import Navbar from '../km-uikits/Navbar.react'
import RestaurantList from '../km-homepage/RestaurantListContainer.react'

class MainPage extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <BigHero />
        <RestaurantList />
        <Footer />
      </div>
    )
  }
}

export default MainPage
