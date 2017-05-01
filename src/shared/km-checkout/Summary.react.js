import PropTypes from 'prop-types'
import React from 'react'
import _reduce from 'lodash/reduce'

const Summary = (props) => {
  const subtotal = _reduce(props.carts, (result, value) => result + Number(value.price), 0)
  const total = subtotal + 40
  return (
    <div className='content'>
      <div className='columns is-multiline'>
        <div className='column is-9'>
          <h4>SUBTOTAL</h4>
        </div>
        <div className='column is-3'>
          <h4>฿{Number(subtotal).toFixed(2)}</h4>
        </div>
        <div className='column is-9'>
          <h4>DELIVERY CHARGE</h4>
        </div>
        <div className='column is-3'>
          <h4>฿{Number(40).toFixed(2)}</h4>
        </div>
        <div className='column is-9'>
          <h4>YOUR TOTAL</h4>
        </div>
        <div className='column is-3'>
          <h2>
            <strong>฿{Number(total).toFixed(2)}</strong>
          </h2>
        </div>
      </div>
    </div>
  )
}

Summary.propTypes = {
  carts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired
}

export default Summary
