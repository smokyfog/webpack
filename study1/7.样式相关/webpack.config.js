const path = require("path");

module.exports = {
    mode:'production',      //production（压缩）或者development（不压缩）模式
    entry: {
        main: './src/index.js'
    },
    module: {
        rules:[
             {
                 test: /\.(jpg|png|gif)$/,
                 use: {
                     loader: 'url-loader',
                     options: {
                         //placeholder  占位符
                         name: '[name]_[hash].[ext]',
                         outputPath: 'images/',
                         limit: 2048        //小于2kb则把图片打包的js文件中
                     },
                 }
             },
             {
                 test: /\.css$/,
                 use: ['style-loader','css-loader']
             },
             {
                 test: /\.scss$/,
                 use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,    //js直接引入之前都会一次从上至下走一遍loader
                                modules:true    //开启css模块化打包
                            }
                        },
                        'sass-loader',
                        'postcss-loader'
                    ]
             },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}