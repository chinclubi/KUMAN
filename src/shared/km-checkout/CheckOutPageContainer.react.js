import CheckOutPage from './CheckOutPage.react'
import PropTypes from 'prop-types'
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const enhance = compose(
  connect(
    ({ carts }) => ({ carts })
  )
)

const CheckOutPageContainer = ({ carts }) => (
  <CheckOutPage carts={carts} />
)

CheckOutPageContainer.propTypes = {
  carts: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default enhance(CheckOutPageContainer)
