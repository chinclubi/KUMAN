import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

import Navbar from '../km-uikits/Navbar.react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import styles from './MainPage.styl'

const AppQuery = gql`
query {
    user {
        test
    }
}
`
const enhance = compose(
    graphql(AppQuery)
)

class MainPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      user: PropTypes.shape({
        test: PropTypes.bool.isRequired
      }).isRequired,
    }).isRequired
  }

  render () {
    return (
      <div>
        <Navbar />
        <h1 className={styles.test}>
            KUMAN Simple query test {String(this.props.data.user.test)}
        </h1>
      </div>
    )
  }
}

export default enhance(MainPage)
