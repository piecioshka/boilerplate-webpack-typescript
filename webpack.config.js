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
    }
};
