import Detail from './Detail.react'
import Map from './GoogleMap.react'
import OrderList from './OrderList.react'
import PropTypes from 'prop-types'
import React from 'react'
import Summary from './Summary.react'
import styles from './CheckOutPage.styl'

const MapContainer = <div className={styles.km__map} />

const CheckOutPage = (props) => (
  <section>
    <Map
      containerElement={MapContainer}
      mapElement={MapContainer}
    >
      <div className={styles.km__point} />
    </Map>
    <div className='section container'>
      <h3 className='title' style={{ textAlign: 'center' }}>
        <strong>CHECK OUT</strong>
      </h3>
      <div className='tile is-ancestor'>
        <div className='tile is-6 is-vertical is-parent'>
          <div className='tile is-child box'>
            <p className='title'>MY ORDERS</p>
            <OrderList carts={props.carts} />
          </div>
        </div>
        <div className='tile is-vertical is-parent'>
          <div className='tile is-child box'>
            <p className='title'>SUMMARY</p>
            <Summary carts={props.carts} />
          </div>
          <div className='tile is-child box'>
            <p className='title'>DETAIL</p>
            <Detail />
          </div>
        </div>
      </div>
    </div>
  </section>
)

CheckOutPage.propTypes = {
  carts: PropTypes.object.isRequired
}

export default CheckOutPage
