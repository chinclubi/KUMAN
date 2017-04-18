import { graphiqlExpress, graphqlExpress } from 'graphql-server-express'

import bodyParser from 'body-parser'
import config from 'config'
import express from 'express'
import handleRender from './middleware/handleRender'
import path from 'path'
import schema from './graphql/schema'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import winston from 'winston'

const app = express()
const compiler = webpack(webpackConfig)

app.use(express.static(path.resolve(process.cwd(), 'static')))

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.use(handleRender)

app.listen(config.server.port, () => {
  winston.info('SERVER is listening to port', config.server.port)
})
