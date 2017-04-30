import Map from './GoogleMap.react'
import React from 'react'
import styles from './CheckOutPage.styl'

const MapContainer = <div className={styles.km__map} />

const CheckOutPage = (props) => {
  return (
    <section className='hero is-primary is-medium'>
      <Map
        containerElement={MapContainer}
        mapElement={MapContainer}
      >
        <div className={styles.km__point} />
      </Map>
    </section>
  )
}

export default CheckOutPage
