'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CleanPlugin = require('./utils/clean-plugin');
const NodeUtils = require('./src/services/common/node-service');
const appConfig = require('./config/config');

const config = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new CleanPlugin({
            files: ['dist/*']
        }),
        new ExtractTextPlugin('css/bundle.css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(
                    process.env.NODE_ENV
                ),
                APP_CONFIG: JSON.stringify(
                    appConfig
                )
            }
        })
    ],
    module: {
        exprContextCritical: false, // Suppress "The request of a dependency is an expression"
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};

if (NodeUtils.isProduction()) {
    config.entry = './src/bootstrap';
} else {
    config.devtools = 'eval';
    config.entry = [
        `webpack-dev-server/client?http://localhost:${appConfig.example.port}`,
        'webpack/hot/only-dev-server',
        './src/bootstrap'
    ];
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;