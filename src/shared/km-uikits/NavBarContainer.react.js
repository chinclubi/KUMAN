import * as CartActions from '../km-modules/cart/cartActions'

import NavBar from './NavBar.react'
import PropTypes from 'prop-types'
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const enhance = compose(
  withRouter,
  connect(
    ({ carts }) => ({ carts }),
    CartActions
  )
)

const NavBarContainer = ({ carts, location }) => {
  return <NavBar {...{ carts, location }} />
}

NavBarContainer.propTypes = {
  carts: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default enhance(NavBarContainer)
