require('babel-register')({
  plugins: [
    [
      'css-modules-transform',
      {
        preprocessCss: 'css-modules-stylus',
        extensions: [ '.styl' ],
        generateScopedName: '[name]__[local]--[hash:base64:5]'
      }
    ]
  ]
})
require('babel-polyfill')
require('./src/server')
