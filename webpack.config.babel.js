'use strict';

import webpack from 'webpack';
import path from 'path';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export default {
    context: path.join(__dirname, 'js'),
    entry: {
        app: './index.js'
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['public']
            }
        },
        {
            reload: true
        })
    ]
}
