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
        return <h1>KUMAN Simple query test {String(this.props.data.user.test)}</h1>
    }
}

export default enhance(App)
