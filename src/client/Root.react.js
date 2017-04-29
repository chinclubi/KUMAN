import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'

import AppComponent from '../shared/km-core/App.react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import createStore from '../shared/km-store/createStore'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
    opts: {
      credentials: 'same-origin'
    }
  }),
  ssrForceFetchDelay: 100
})
const store = createStore(client, window.__APOLLO_STATE__)

const Root = () => (
  <ApolloProvider client={client} store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </ApolloProvider>
)

export default Root
