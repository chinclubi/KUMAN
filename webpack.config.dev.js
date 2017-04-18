import AssetsPlugin from 'assets-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(__dirname, 'src/client/client.dev.js')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.join(__dirname, 'static', 'build'),
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: [
            [ 'es2015', { modules: false } ],
            'react',
            'stage-2'
          ],
          plugins: [
            'react-hot-loader/babel'
          ],
          cacheDirectory: true
        }
      }, {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'static'),
      prettyPrint: true
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[id]-[name]-[contenthash].css'
    })
  ]
}
