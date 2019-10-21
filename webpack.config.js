//开发环境的配置

const path = require('path')

//引入html-webpack-plugin插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //入口文件
    entry: path.join(__dirname,'./src/main.js'),
    //打包文件路径
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },

    // 插件配置
    plugins: [
        //html文件打包插件
        //inject注入
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //启用scss模块化处理
                test: /\.scss$/,
                loader: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|gif|bmp|jpg)$/,
                use: 'url-loader?limit=2048'
            },
            {
                test: /\.jsx?$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}