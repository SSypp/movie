//生产环境的配置

//开发环境的配置

const path = require('path')

//引入html-webpack-plugin插件
const htmlWebpackPlugin = require('html-webpack-plugin')

//导入每次删除文件的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    //入口文件
    entry: {
        app:path.join(__dirname,'./src/main.js'),
        vendors1:['jquery']
    },
    //打包文件路径
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'js/bundle.js'
    },

    // 插件配置
    plugins: [
        //html文件打包插件
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace:true,
                removeComments:true,
                removeAttributeQuotes:true
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors1',
            filename:'js/vendors.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new ExtractTextPlugin("css/styles.css"),
        new OptimizeCssAssetsPlugin()
    ],

    module:{
        rules:[
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath:'../'
                }),

            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath:'../'
                })
            },
            {
                test: /\.(png|gif|bmp|jpg)$/,
                use: 'url-loader?limit=5000&name=image/[hash:8]-[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}