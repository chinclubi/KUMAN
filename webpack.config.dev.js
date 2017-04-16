import AssetsPlugin from 'assets-webpack-plugin'
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
                options: {
                    babelrc: false,
                    presets: [
                        ['es2015', { modules: false }],
                        'react',
                    ],
                    plugins: [
                        'react-hot-loader/babel'
                    ],
                    cacheDirectory: true
                },
                include: path.resolve(__dirname, 'src')
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
        })
    ]
}