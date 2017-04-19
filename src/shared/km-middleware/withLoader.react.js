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
        return <div className='is-loading' />
      } else {
        return <Component {...this.props} />
      }
    }
  }
}

export default withLoader
