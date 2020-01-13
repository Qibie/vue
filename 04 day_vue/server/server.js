const path = require('path');
//构建服务器架构，配置好art-template，路由
const Koa = require('koa');
const fs = require('fs');

//处理请求体数据
let app = new Koa();
// const cors = require('koa2-cors');
const Router = require('koa-router');
const router = new Router();
// 处理文字和文件的请求体数据
const formidable = require('koa-formidable')

var corsOptions = {
	origin: 'http://localhost:8070/',
	credentials: true,
	maxAge:'1728000',
	//这一项时为了跨域专门设置的
}

router.post('/upload', async(ctx,next)=>{
	console.log('上传成功')
	ctx.body = 'ok';
})
.get('/',async ctx=>{
	ctx.body = {
		token:'abc',
		msg:'ok'
	};
})
.post('/add',async ctx=>{
	ctx.req.on('data',data=>{
		console.log(data);
		console.log(data.toString());
	});
	ctx.body = 'post ok';
})
.get('/post', async ctx=>{
	console.log(ctx.params);
	ctx.body = {
		title:'我的vueRouter笔记',
		body:'vueRouter的钩子函数'
	}
})
.get('/user/:id', async ctx=>{
	console.log(ctx.params);

	if (ctx.params.id == '1') {
		ctx.body = '用户1';
	} else {
		ctx.body = '用户2';
	}
})

//对文件的操作
app.use(async(ctx,next)=>{
	var formidable = require('formidable');
	var form = new formidable.IncomingForm();
	form.uploadDir = path.resolve('./');
	form.keepExtensions = true;
	form.parse(ctx.req, function(err, fields, files){
		console.log(files);
	});

	form.onPart = function(part){
		part.addListener('data', function(data){
			 require('fs').appendFileSync('./4.mp3', data);
		});
	}

	await next();
});

app.use(async(ctx, next) =>{
	// console.dir(ctx);
	// head过时了
	// console.log(ctx.request.head.origin);
	console.log(ctx.request.headers.origin);
	ctx.response.set('Access-Control-Allow-Origin', '*');

	ctx.response.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	ctx.response.set("Access-Control-Allow-Headers", 'tokens');
	// ctx.response.set("Access-Control-Allow-Headers", "content-type,x-requested-with,Authorization, x-ui-request,lang");

	await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

//开启服务器
app.listen(8888,()=>{
	console.log('服务器启动在8888端口');
});