分离第三方库、自定义公共模块、webpack运行文件  
修改webpack.config.js新增一个入口文件vendor和CommonsChunkPlugin插件进行公共模块的提取  


1. 抽离webpack的运行文件   
修改webpack配置文件
~~~	
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:['vendor','runtime'],
			filename:'[name].js'
		})
	]
~~~


2. 抽离第三方库和自定义公共模块  
minChunks设为Infinity,修改webpack配置文件  
> Infinity  只有当入口文件(entry chunk) >= 3才生效，用来在第三方库中分离自定义的公共模块  

~~~
	plugins:[
		new webpack.optimize.CommonsChunkPlugin({
			name:['vendor','runtime'],
			filename:'[name].js'
		})
	]
~~~