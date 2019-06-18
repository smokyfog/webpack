const path = require("path");
const UglifyPlugin = require("webpack/lib/optimize/UgilfyJsPlugin");
module.exports = function (env = {}, argv){
    const plugins = {},
    const isProduction = env['prodiction'];
    
    //在生产环境中才压缩
    if(production){
        plugins.push(
            //压缩输出的ja代码
            new UglifyPlugin()
        )
    }
    return{
        plugins: plugins,
        //在生成环境中不输出Source Map
        devtool: isProduction ? undefined: 'source-map',
    };
}
