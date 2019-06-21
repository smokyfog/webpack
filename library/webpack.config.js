const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // externals: {
    //     lodash:{
    //         root: '_',
    //         commonjs: 'lodash'
    //     }
    // },
    externals: 'lodash',       //表示lodash再打包代码的时候不打包的库中，让使用者在业务代码中引入，避免重复引入
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        library:'library',      //在script中引入的话会在全局注入一个library全局变量
        libraryTarget: 'umd',   //任何引入形式都可以   //libraryTarget指支持什么形式的引入形式
        // libraryTarget: 'window',     //注入到windows里面
    }
}