const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
    entry: './client/conditional-rendering/element-variables/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}
