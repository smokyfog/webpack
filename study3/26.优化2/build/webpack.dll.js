const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode:'production',
    entry : {
        // vendors : [ 'lodash', 'react', 'react-dom'],     //打包写到一个文件中
        vendors : [ 'lodash'],  //拆分为多个文件
        react : ['react', "react-dom"],
        jquery: ['jquery']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dll'),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, "../dll/[name].manifest.json")
        })
    ]
}