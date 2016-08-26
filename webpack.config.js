'use strict';

//imports
var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

// define Webpack configuration object to be exported
var config = {
    //context: __dirname + '/app',
    entry: {       
        bundle: path.resolve(__dirname, 'app', 'app.js'),
        vendors: ['angular', 'angular-ui-router']
    },
    output: {
        path: path.resolve(__dirname, 'www', 'assets'),
        filename: '[name].js',
        publicPath: '/assets/'
        //libraryTarget: 'commonjs'   
    },
    resolve: {
        alias: {
            'npm': path.resolve(__dirname, 'node_modules'),
            'angular': path.resolve(__dirname, 'node_modules', 'angular', 'angular.js'),
            'angular-ui-router': path.resolve(__dirname, 'node_modules', 'angular-ui-router', 'release', 'angular-ui-router.js')
        }
    },
    module: {
        loaders: [
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'
            // },
            // {
            //     test: /\.(woff|woff2)$/,
            //     loader: 'url?limit=10000&mimetype=application/font-woff'
            // },
            // {
            //     test: /\.(eot|svg|ttf)$/,
            //     loader: 'file'
            // },
            {               
                test: /\.js?$/,
                include: path.resolve(__dirname, 'app'),
                exclude: [/node_modules/, /\.spec.js?$/],
                loader: 'babel-loader',                
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            }
        ],
        preLoaders: [
            // {
            //     test: /\.js?$/,
            //     exclude: /node_modules/,
            //     loader: 'jshint'
            // }
        ]
    },
     plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.bundle.js'
        })
     ]
};

module.exports = config;