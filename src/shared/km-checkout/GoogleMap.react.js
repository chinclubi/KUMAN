import {
  GoogleMap,
  withGoogleMap,
} from 'react-google-maps'

import PropType from 'prop-types'
import React from 'react'
import { compose } from 'recompose'

const enhance = compose(
  withGoogleMap
)

const Map = (props) => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom}
  >
    {props.children}
  </GoogleMap>
)

Map.defaultProps = {
  center: { lat: 13.8470335, lng: 100.5696114 },
  zoom: 18
}

Map.propTypes = {
  center: PropType.object.isRequired,
  zoom: PropType.number.isRequired,
  children: PropType.any
}

export default enhance(Map)
