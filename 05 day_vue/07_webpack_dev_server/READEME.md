npm install webpack-dev-server@2.9.0 --save-dev  
在此项目中webpack使用3.12，最新webpack-dev-server有点问题，所以用2.9.0  
在package.json更改script下  
`"dev": "webpack-dev-server --open --hot --inline --config ./webpack.dev.config.js"`
常用的配置参数  
--open 自动打开浏览器  
--hot 热更新，不在刷新的情况下替换css样式
--inline 自动刷新  
--port 9999 指定端口  
--process 显示编译进度  