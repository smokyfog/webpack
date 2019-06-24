const merge = require('webpack-merge');
const commonConfig = require("./webpack_common");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var prodConfig = {
    mode:'production',      //production（压缩）或者development（不压缩）模式
    // devtool:'cheap-module-source-map',    //具体内容看webpack笔记
    plugins: [
        new MiniCssExtractPlugin({      //css代码分割
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
        })
    ],
    optimization: { //代码压缩
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    module:{
        rules:[
            {
                 test:/\.scss$/,
                 use:[
                     MiniCssExtractPlugin.loader,
                     {
                         loader: 'css-loader',
                         options: {
                             importLoaders: 2
                         }
                     },
                     'sass-loader',
                     'postcss-loader'
                 ]
             },
             {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    output : {
        filename: '[name].[contenthash].js',                  
        chunkFilename: '[name].[contenthash].chunk.js',
    }
}


module.exports = merge(commonConfig,prodConfig)