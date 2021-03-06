import 'isomorphic-fetch'

import {
    ApolloClient,
    ApolloProvider,
    createNetworkInterface,
    renderToStringWithData,
} from 'react-apollo'

import AppComponent from '../../shared/km-core/App.react'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import createStore from '../../shared/km-store/createStore'
import fs from 'fs'
import path from 'path'

const handleRender = (req, res) => {
  const context = {}
  const client = new ApolloClient({
    ssrMode: true,
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:3000/graphql',
      opts: {
        credentials: 'same-origin'
      }
    })
  })
  const store = createStore(client)

  const app = (
    <ApolloProvider client={client} store={store}>
      <StaticRouter location={req.url} context={context}>
        <AppComponent />
      </StaticRouter>
    </ApolloProvider>
  )

  renderToStringWithData(app)
    .then((content) => {
      const assets = fs.readFileSync(path.join(process.cwd(), 'static', 'assets.json'))
      const initialState = { apollo: client.getInitialState() }
      const html = <Html content={content} state={initialState} assets={JSON.parse(assets)} />

      res.status(200)
      res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`)
      res.end()
    })
}

const Html = ({ content, state, assets }) => (
  <html>
    <head>
      <title>KUMAN</title>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:300,400,700' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.0/css/bulma.min.css' />
      <link rel='stylesheet' type='text/css' href='/notifications.css' />
      <script
        type='text/javascript'
        src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDy1WhMAzw7_3jTw-qVXgiRLZApm-9Ijc4&libraries=geometry,places,visualization'
      />
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
      <script dangerouslySetInnerHTML={{
        __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};`,
      }} />
      <script src={assets.main.js} />
    </body>
  </html>
)

Html.propTypes = {
  content: PropTypes.any.isRequired,
  state: PropTypes.object.isRequired,
  assets: PropTypes.object.isRequired
}

export default handleRender
