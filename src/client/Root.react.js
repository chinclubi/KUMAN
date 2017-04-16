import {
    ApolloClient,
    ApolloProvider,
    createNetworkInterface,
} from 'react-apollo'

import AppComponent from '../shared/core/App.react'
import React from 'react'

const client = new ApolloClient({
    initialState: window.__APOLLO_STATE__,
    networkInterface: createNetworkInterface({
        uri: '/graphql',
        opts: {
            credentials: 'same-origin'
        }}),
    ssrForceFetchDelay: 100
})

const Root =() => (
    <ApolloProvider client={client}>
        <AppComponent />
    </ApolloProvider>
)

export default Root