// var webpack = require('webpack');

module.exports = {
    entry: './app/source/main.js',

    output: {
        filename: "app/dist/main.js"
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'typescript-loader'
            }
        ]
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};
