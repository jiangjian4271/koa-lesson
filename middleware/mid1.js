// 导出一个函数
export default () => {
    // 需返回一个异步函数
    return async (ctx, next) => {
        // 写代码
        console.log('mid1-start');
        await next();// 执行下一步
        // 写代码
        console.log('mid1-end');
    }
}