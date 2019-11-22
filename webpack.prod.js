const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
     mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({    //这块uglifyjs 在生产环境下已经集成,(应该已经不需要配置,在生产环境下)
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});