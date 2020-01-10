module.exports = {
	// 入口
	entry:{
		// 可以有多个入口，也可以有一个，若只有一个就默认从这一个入口开始解析
		"main":"./main.js"
	},
	output:{
		filename:'./build.js'
	},
	//文件监听改动 自动产出build.js
	watch:true,
}