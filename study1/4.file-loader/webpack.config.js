const path = require("path");

module.exports = {
    mode:'production',      //production（压缩）或者development（不压缩）模式
    entry: {
        main: './src/index.js'
    },
    module: {
        rules:[
             {
                 test: /\.jpg$/,
                 use: {
                     loader: 'file-loader'
                 }
             }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}