'use strict';

import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export default {
    context: __dirname + '/js',
    entry: './index.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'app.js'
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['public']
            }
        })
    ]
}
