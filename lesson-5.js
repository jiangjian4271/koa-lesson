// 引入koa
// import Koa from "koa"
const Koa = require('koa');
// 引入路由
// import Router from 'koa-router'
const Router = require('koa-router');
// 引入数据解析模版
// import bodyParser from 'koa-bodyparser'
// 引入 koa-better-body
// import body from 'koa-better-body'

// // 引入自定义中间件
// import mid1 from './middleware/mid1'
// import mid2 from './middleware/mid2'
// import mid3 from './middleware/mid3'

// 实例化koa
const app = new Koa();
// 实例化路由
const router = new Router();

// // 使用自定义中间件
// app.use(mid1());
// app.use(mid2());
// app.use(mid3());

router.get('/', async ctx => {
    ctx.body = "hello world!";
})

// router.get('/list', mid1(), async ctx => {
//     ctx.body = [1, 2, 3];
// })

// 使用路由
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000)