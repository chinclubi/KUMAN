import AssetsPlugin from 'assets-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

export default {
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?http://localhost:3000/build',
        path.join(__dirname, 'src/client/dev')
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
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { module: false }],
                        'react'
                    ],
                    plugins: [
                        'react-hot-loader/babel',
                        'transform-decorators-legacy'
                    ],
                    cacheDirectory: false
                },
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.join(__dirname, 'static'),
            prettyPrint: true
        })
    ]
}