var path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const packagejson = require('./package.json');
module.exports = {
	// 入口
	entry:{
		// 可以有多个入口，也可以有一个，若只有一个就默认从这一个入口开始解析
		"main1":"./src/main1.js", 
		"main2":"./src/main2.js", 
		//获取生产环境依赖的库
		"vendor":Object.keys(packagejson.dependencies)
	},
	output:{
		//相对转绝对
		path:path.resolve('./dist'),
		filename:'[name].js'
	},
	//文件监听改动 自动产出build.js
	watch:true,
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:['vendor','runtime'],
			filename:'[name].js',
			//用来在第三方库中分离自定义的公共模块
			minChunks:Infinity
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'[name].js',
			//从main1.js和main2.js中抽离common chunk
			chunks:['main1','main2']
		})
	]
}