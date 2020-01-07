// esModule的模块导入
import Vue from './vue.js'
import * as obj from './App.js'

console.log(obj.num1);
// console.log(num2);
// add(num1, num2);

new Vue({
	el:'#app',
	components:{
		App: obj.default
	},
	template:'<App />'
});