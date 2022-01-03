// 引入koa
import Koa from "koa"
// 引入路由
import Router from 'koa-router'
// 引入数据解析模版
// import bodyParser from 'koa-bodyparser'
// 引入 koa-better-body
import body from 'koa-better-body'


// 实例化koa
const app = new Koa();

// 实例化路由
const router = new Router();

// // 使用 bodyParser 中间件
// app.use(bodyParser());

// 使用 koa-better-body 中间件
app.use(body());

// router.get('/from', async ctx => {
//     ctx.body = ctx.query
// })

// router.post('/from', async ctx => {
//     ctx.body = ctx.request.body
// })

// koa-better-body post 请求
router.post('/form', async ctx => {
    ctx.body = ctx.request.fields
})

// koa-better-body get 请求
router.get('/form', async ctx => {
    ctx.body = ctx.query
})

// 使用路由
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000)