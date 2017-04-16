import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

import { compose } from 'recompose'

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

class App extends Component {
    render() {
        return <div>Hello KUMAN 3 query test = {this.props.data.user.test}</div>
    }
}

export default enhance(App)