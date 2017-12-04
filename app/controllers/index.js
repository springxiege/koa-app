exports.index = async (ctx, next) => {
    await ctx.render('index', {
        title: '关于我 About Me'
    })
}

exports.string = async (req, next) => {
    ctx.body = 'koa2 string'
}

exports.json = async (req, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
}