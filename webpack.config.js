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

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: regexp,
                loader: 'ts-loader'
            },
            {
                test: (/\.html$/),
                loader: `file-loader?name=[name].[ext]`
            }
        ]
    }
};
