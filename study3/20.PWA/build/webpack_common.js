const path = require("path");
const HttpWebpackPlugun = require("html-webpack-plugin");       //会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
const CleanWebpackPlugin = require("clean-webpack-plugin");


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
    ],
    optimization:{      //splitChunks   代码分割
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports:true,
        splitChunks:{
            chunks: "all",                  //async：只对异步代码生效  initial：对同步代码做分割    all: 全部都分割--同步代码分割必须在cacheGroups进行配置
            // name: true,                     //打包生成文件的名字cacheGroups名字有效
            cacheGroups: {      //缓存组 符合组的代码都打包到一块
                vendors: {      //符合组  打包后生成默认为: 组名~入口名   
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,          //优先级 值越大优先级越高
                    filename:'vendors.js',  //配置代码分割后生成的文件名
                },
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
