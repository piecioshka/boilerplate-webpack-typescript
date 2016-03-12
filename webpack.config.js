'use strict';

var path = require('path');
var sources = path.join(__dirname, 'app', 'scripts');
var dist = path.join(__dirname, 'app', 'dist');
var regexp = new RegExp(sources + '\/(.*)\\.ts');

module.exports = {
    entry: sources + '/main.js',

    output: {
        filename: dist + '/bundle.js'
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
