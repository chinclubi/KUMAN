const path = require('path')

module.exports = {
  module: {
    loaders: [
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
        include: path.resolve(__dirname, '../', 'src'),
        use: [
          'style',
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }
          },
          'stylus'
        ]
      }
    ]
  }
}