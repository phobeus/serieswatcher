var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "js/bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        },
        {
            test: /\.html$/,
            use: 'raw-loader'
        },
        {
            test: /\.jpe?g$|\.gif$|\.png$/i,
            loader: "file-loader?name=assets/img/[name].[ext]"
        },
        {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            use: "file-loader?name=assets/[name].[ext]"
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html"
        })
    ]
};