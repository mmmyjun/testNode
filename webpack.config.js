const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 访问内置的插件
const path = require('path');

module.exports = {
    mode: 'development',
    ports: 4000, //
    entry: '/1.js',
    output: {
        filename: './dist/my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
};