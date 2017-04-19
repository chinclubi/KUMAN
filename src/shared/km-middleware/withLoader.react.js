import Loader from '../km-uikits/Loader.react'
import PropTypes from 'prop-types'
import React from 'react'

const withLoader = (Component) => {
  return class extends React.Component {
    static propTypes = {
      data: PropTypes.shape({
        loading: PropTypes.bool.isRequired
      })
    }
    render () {
      if (this.props.data.loading) {
        return (
          <div className='section container'>
            <Loader message='data fetching...' />
          </div>
        )
      } else {
        return <Component {...this.props} />
      }
    }
  }
}

export default withLoader
