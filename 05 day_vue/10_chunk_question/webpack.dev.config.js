var path = require('path')
// html-webpack-plugin插件将html和js一起打包放入dist目录中
// npm i html-webpack-plugin -D 
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	// 入口
	entry:{
		// 可以有多个入口，也可以有一个，若只有一个就默认从这一个入口开始解析
		"main1":"./src/main1.js", 
		"main2":"./src/main2.js" 
	},
	output:{
		//相对转绝对
		path:path.resolve('./dist'),
		filename:'[name].js'
	},
	//文件监听改动 自动产出build.js
	watch:true,
}