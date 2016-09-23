'use strict';

var path = require('path');
var src = path.join(__dirname, 'src');
var dist = path.join(__dirname, 'dist');
var regexp = new RegExp(src + '\/(.*)\\.ts');

module.exports = {
    entry: src + '/main.ts',

    output: {
        filename: 'bundle.js',
        path: dist
    },

    module: {
        loaders: [
            {
                test: regexp,
                loader: 'ts-loader'
            }
        ]
    }
};
