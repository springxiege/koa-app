exports.index = async (ctx, next) => {
    await ctx.render('admin', {
        title: '后台管理'
    })
}