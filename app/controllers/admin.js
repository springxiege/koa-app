exports.index = async (ctx, next) => {
    await ctx.render('admin/admin', {
        title: '后台管理'
    })
}