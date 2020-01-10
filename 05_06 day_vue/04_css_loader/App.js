import imgSrc from './my.jpg'

var app = {
	data(){
		return {
			imgSrc:imgSrc
		}
	},
	template:`
		<div>
			<img :src="imgSrc" alt="我的女朋友" />
		</div>
	`
};
// 通过export来导出
export default app;

// 声明并导出
// 作为一整个对象key导出
export var num1 = 2;

// 声明再导出
var num2 = 3;
export {num2};

export function add(num1, num2) {
	console.log(num1 + num2);
}