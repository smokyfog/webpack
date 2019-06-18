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
                     loader: 'file-loader',
                     options: {
                         //placeholder  占位符
                         name: '[name]_[hash].[ext]',
                         outputPath: 'images/'
                     },
                     
                 }
             }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}