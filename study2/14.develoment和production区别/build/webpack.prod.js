const merge = require('webpack-merge');
const commonConfig = require("./webpack_common");

var prodConfig = {
    mode:'production',      //production（压缩）或者development（不压缩）模式
    devtool:'cheap-module-source-map',    //具体内容看webpack笔记
    output: {
        publicPath:'./',
    }
}


module.exports = merge(commonConfig,prodConfig)