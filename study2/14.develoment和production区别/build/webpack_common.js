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
                 loader: "babel-loader"
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
    plugins:[                               //plugin 可以在webpack运行到某个时刻的时候帮你做一些事情
        new HttpWebpackPlugun({             //会在打包之后运行
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'],{
            root: path.resolve(__dirname, '../dist')
        }),    //会在打包之前运行  清理dist目录
    ],
    output: {
        // publicPath:'http://cdn.com.cn/',    //html引入相应的js时会在js前面增加http://cdn.com.cn/前缀
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    performance: {
        hints:false   
    },
}
