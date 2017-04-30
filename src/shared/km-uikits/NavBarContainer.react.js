import * as CartActions from '../km-modules/cart/cartActions'

import NavBar from './NavBar.react'
import PropTypes from 'prop-types'
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const enhance = compose(
  connect(
    ({ carts }) => ({ carts }),
    CartActions
  )
)

const NavBarContainer = (props) => (
  <NavBar {...props} />
)

NavBarContainer.propTypes = {
  carts: PropTypes.object.isRequired
}

export default enhance(NavBarContainer)
