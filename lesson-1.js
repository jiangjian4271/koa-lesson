// 引入koa
import Koa from "koa"

// 创建koa实例
const app = new Koa();

// 中间件(简单的中间件路由)
app.use(async ctx => {
    if (ctx.req.url === '/') {
        ctx.body = "hello world"
    }
    if (ctx.req.url === '/test') {
        ctx.body = {
            code:0
        }
    }

})

app.listen(3000)