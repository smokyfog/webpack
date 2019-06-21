const path = require("path");
const HttpWebpackPlugun = require("html-webpack-plugin");       //会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");


module.exports = {
    entry: {
        main: './src/index.js',
    },
    module: {
        rules:[
             {
                 test: /\.js$/, 
                 exclude: /node_modules/, 
                 
                 use: [
                     {
                        loader: "babel-loader",
                     },
                     {
                        loader: "imports-loader?this=>window",
                     }
                 ]
             },
             {
                 test: /\.(jpg|png|gif)$/,
                 use: {
                     loader: 'url-loader',
                     options: {
                         //placeholder  占位符
                         name: '[name]_[hash].[ext]',
                         outputPath: 'images/',
                         limit: 2048        //小于2kb则把图片以base64的形式打包的js文件中
                     },
                 }
             },
             
        ]
    },
    plugins:[                               //plugin 可以在webpack运行到某个时刻的时候帮你做一些事情
        new HttpWebpackPlugun({             //会在打包之后运行
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../dist')
        }),    //会在打包之前运行  清理dist目录
        new webpack.ProvidePlugin({
            $ : 'jquery',       //如果一个模块中使用了$这个字符串。会自动引入jquery
            _ : 'lodash',
            _join : ['lodash', 'join'] //小技巧， 相当于使用  lodash.join  _.join
        })
    ],
    optimization:{      //splitChunks   代码分割
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports:true,
        splitChunks:{
            chunks: "all",                  //async：只对异步代码生效  initial：对同步代码做分割    all: 全部都分割--同步代码分割必须在cacheGroups进行配置
            // minSize: 30000,                 //大于30kb 才会做代码分割
            // // minSize: 50000,              //大于50kb 会尝试把代码进行多次分割
            // minChunks: 1,                   //当一个模块被至少用了多少次时才进行代码分割
            // maxAsyncRequests: 5,            //同时加载的模块数
            // maxInitialRequests: 3,          //入口文件进行加载的时候 最多进行的代码分割数
            // automaticNameDelimiter: '~',    //文件生成的时候连接符
            // name: true,                     //打包生成文件的名字cacheGroups名字有效
            cacheGroups: {      //缓存组 符合组的代码都打包到一块
                vendors: {      //符合组  打包后生成默认为: 组名~入口名   
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,          //优先级 值越大优先级越高
                    filename:'vendors.js',  //配置代码分割后生成的文件名
                },
            //     default: {      //不符合组 的代码分割
            //         // minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true,   //如果改代码已经被打包过了，则忽略打包，使用之前以打包的文件
            //         filename:'common.js'
            //     }
            }
        }
    },
    output: {
        // publicPath:'http://cdn.com.cn/',    //html引入相应的js时会在js前面增加http://cdn.com.cn/前缀
        path: path.resolve(__dirname, '../dist')
    },
    performance: {
        hints:false   
    },
}
