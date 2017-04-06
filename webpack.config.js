const path = require('path')
const webpack = require('webpack')

const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const data = {
    routes: [
        '/',
    ],
}

module.exports = {
    entry: './index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
        libraryTarget: 'umd',
    },

    plugins: [
        new StaticSiteGeneratorPlugin({
            paths: data.routes,
        }),

        new OpenBrowserPlugin({
            url: 'http://localhost:8080',
        }),
    ],

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
        }],
    },
}
