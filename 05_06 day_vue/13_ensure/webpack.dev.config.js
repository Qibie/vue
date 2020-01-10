var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const packagejson = require('./package.json');
module.exports = {
    // 入口
    entry: {
        // 可以有多个入口，也可以有一个，若只有一个就默认从这一个入口开始解析
        "main": "./src/main.js",
        //获取生产环境依赖的库
        "util": Object.keys(packagejson.dependencies)
    },
    output: {
        //相对转绝对
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    //文件监听改动 自动产出build.js
    watch: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].js'
        }),
        new HtmlWebpackPlugin({
            //chunks主要用於多入口文件，當你有多個入口文件的時候，它會編譯生成多個打包後的文件，chunks能選擇你要使用的那些js文件
            chunks:['common','util','main'],
            //參照物
            template:"./src/index.html",
            //inject:true body head false
            inject:true
        })
    ]
}