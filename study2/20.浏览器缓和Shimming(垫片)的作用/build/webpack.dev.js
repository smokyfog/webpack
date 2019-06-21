const webpack = require("webpack");
const merge = require('webpack-merge');
const commonConfig = require("./webpack_common");


const devConfig = {
    mode:'development',      //production（压缩）或者development（不压缩）模式
    devtool:'cheap-module-eval-source-map',    //具体内容看webpack笔记
    devServer: {
        contentBase: './dist',
        open: true,
        port: '8888',
        hot: true,           //热模块替换
        // hotOnly: true
    },
    plugins:[                               //plugin 可以在webpack运行到某个时刻的时候帮你做一些事情
        new webpack.HotModuleReplacementPlugin(),     //热模块替换
    ],
    module:{
        rules:[
            {
                 test:/\.scss$/,
                 use:[
                     'style-loader',
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
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output : {
        filename: '[name].js',                  
        chunkFilename: '[name].js',
    }
}


module.exports = merge(commonConfig,devConfig)