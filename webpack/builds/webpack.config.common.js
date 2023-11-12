"use strict";

const path = require("path");
const root = path.join(__dirname, "..", "..");
const merge = require("webpack-merge");

module.exports = (env) => {
    let config = {
        entry: {
            main: path.join(root, "src", "main"),
        },
        output: {
            filename: "bundle.js",
            path: path.join(root, "dist"),
        },
        resolve: {
            extensions: [".ts", ".js", ".json"],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                },
                {
                    test: /\.html$/,
                    use: `file-loader?name=[name].[ext]`,
                },
            ],
        },
    };

    // Addons
    const addons = getAddons(env);
    addons.forEach((addon) => {
        config = merge.merge(
            config,
            require(path.join(root, "webpack", "addons", `webpack.${addon}`))
        );
    });

    return config;
};

function getAddons(env) {
    if (!env || !env.addons) return [];
    if (typeof env.addons === "string") return env.addons.split(",");
    return env.addons;
}
