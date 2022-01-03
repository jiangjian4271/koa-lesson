// 引入koa
import Koa from "koa"
// 引入路由
import Router from 'koa-router'
// 创建koa实例
const app = new Koa();

// 实例化路由
const router = new Router();

// 路由
router.get('/', async ctx => {
    // 返回信息
    ctx.body = "Hello world!"
})

router.get('/list', async ctx => {
    ctx.body = [1, 2, 3]
})

// 动态路由接口
router.get('/list/:name', async ctx => {
    ctx.body = {
        name: ctx.params.name,
        time: Date.now()
    }
})

router.post('/list', async ctx => {
    ctx.body = {
        code: 0,
        list: [1, 2, 3, 4],
    }
})

// 分组路由
const group = new Router({
    prefix: '/group',
})

// 访问路径：http://localhost:3000/group
group.get('/', async ctx => {
    ctx.body = 'group'
})

//访问路径：http://localhost:3000/group/list
group.get('/list', async ctx => {
    ctx.body = [3, 7, 8]
})

//访问路径：http://localhost:3000/group/address
group.get('/address', async ctx => {
    ctx.body = [6, 7, 8]
})

// 嵌套路由
const sub = new Router({
    prefix: '/sub',
})

// 访问路径：http://localhost:3000/nest/sub/froms/11111
sub.get('/froms/:uid', async ctx => {
    ctx.body = {
        code: 0,
        uid: ctx.params.uid,
        time: Date.now()
    }
})

// 访问路径：http://localhost:3000/nest/sub/froms
sub.get('/froms', async ctx => {
    ctx.body = {
        code: 0,
        forms: true,
    }
})

const nest = new Router();
nest.use("/nest", sub.routes());

// 一个接口实现多个中间件
const db = new Router(); db.get('/db/:id', async (ctx, next) => {
    // mongoose
    ctx.user = 'test'
    next();
}, async (ctx, next) => {
    // log
    ctx.time = Date.now();
    next();
}, async ctx => {
    ctx.body = {
        user: ctx.user,
        time: ctx.time
    };
})

// 重定向
// 访问路径：http://localhost:3000/find
const proxy = new Router();
proxy.get('/find', async ctx => {
    ctx.redirect("/list");
})

// 使用路由
app.use(router.routes()).use(router.allowedMethods());
app.use(group.routes()).use(group.allowedMethods());
app.use(nest.routes()).use(nest.allowedMethods());
app.use(db.routes()).use(db.allowedMethods());
app.use(proxy.routes()).use(proxy.allowedMethods());


app.listen(3000)