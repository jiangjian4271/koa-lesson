// 引入koa
import Koa from "koa"
// 引入路由
import Router from 'koa-router'
// views 渲染模版中间件
import views from 'koa-views'
// 引入静态资源访问模版
import source from 'koa-static'

// 实例化koa
const app = new Koa();

// 实例化路由
const router = new Router();

// 初始化模版指向 views 目录
app.use(views('./views', {
    // 方法一
    // map: {
    //     ejs: 'ejs',
    //     html: 'underscore'
    // }
    // 方法二
    extension: 'ejs'
}))

// 指定静态资源访问目录
app.use(source('./static'))

// 路由
router.get('/', async ctx => {
    await ctx.render('index', {
        user: {
            name: '韩磊'
        },
        list: [1, 2, 3]
    })
})


// 使用路由
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000)