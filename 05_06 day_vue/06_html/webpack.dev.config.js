var path = require('path')
// html-webpack-plugin插件将html和js一起打包放入dist目录中
// npm i html-webpack-plugin -D 
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	// 入口
	entry:{
		// 可以有多个入口，也可以有一个，若只有一个就默认从这一个入口开始解析
		"main":"./src/main.js"
	},
	output:{
		//相对转绝对
		path:path.resolve('./dist'),
		filename:'./build.js'
	},
	// 声明模块 包含各个loader
	// 下载并配置 npm i css-loader style-loader -D
	// npm i url-loader file-loader -D
	module:{
		loaders:[
			// style-loader css-loader
			//遇到后缀为.css文件，webpack先用css-loader加载器去解析这个文件
			//最后计算完的css,将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签
			//webpack在打包过程中，遇到后缀为css的文件，就会使用style-loader和css-loader去加载这个文件
			{
				test:/\.css$/,
				loader: "style-loader!css-loader"
			},
			//对于图片大小小于limit设置大小的图片，使用base64编码，可以减少一次图片的网络请求；对于较大的图片使用base64就不太适合，
			//编码和html混在一起。一方面可读性差，另一方面加大了html页面大小，反而加大了html页面的大小，加大了下载页面的大小，得不偿失，
			//因此设置一个合理的limit时非常有必要的
			// npm i url-loader file-loader -D
			{
				test:/\.(jpg|png|jpeg|gif|svg)$/,
				loader:'url-loader?limit=40000'
			},
			// npm i less-loader -D
			{
				test:/\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
		]
	},
	plugins:[
		//插件
		new HtmlWebpackPlugin({
			//参照物输入到dist文件目录下
			template:'./src/index.html'
		})
	],
	//文件监听改动 自动产出build.js
	watch:true,
}