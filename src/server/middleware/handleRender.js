import 'isomorphic-fetch'

import {
    ApolloClient,
    ApolloProvider,
    createNetworkInterface,
    renderToStringWithData,
} from 'react-apollo'

import AppComponent from '../../shared/core/App.react'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
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
    const app = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={context}>
                <AppComponent />
            </StaticRouter>
        </ApolloProvider>
    )

    renderToStringWithData(app)
        .then((content) => {
            const assets =  fs.readFileSync(path.join(process.cwd(), 'static', 'assets.json'))
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
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' />
        </head>
        <body>
            <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
            <script dangerouslySetInnerHTML={{
                __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};`,
            }} />
            <script src={assets.main.js} />
        </body>
    </html>
)

export default handleRender