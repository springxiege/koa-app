const User = require('../modals/users');
const moment = require('moment');
exports.signin = async (ctx, next) => {
    const user = await ctx.request.body.user;
    const {name, password} = user;
    const $user = await User.findOne({name}, (error, user) => {
        if(error) console.log(error);
        return user;
    });
    if(!$user) {
        await ctx.redirect('/admin/list')
    }
    const match = await $user.comparePassword(password);
    if (!match) {
        console.log('password is not matched')
    } else {
        ctx.session.user = $user;
        await ctx.redirect('/')
    }
    // console.log(isMatch)
    
}

exports.signup = async (ctx, next) => {
    const user = await ctx.request.body.user;
    const $user = await new User(user);

    await $user.save((error, user) => {
        if(error) console.log(error);
        return next();
    });
    await ctx.redirect('/users/list')
}

exports.logout = async (ctx, next) => {
    await delete ctx.session.user;
    await delete ctx.state.user;
    await ctx.redirect('/');
}

exports.list = async (ctx, next) => {
    const users = await User.fetch((error, users) => {
        if(error) console.log(error);
        return users || [];
    })
    await ctx.render('adminlist', {
        title: '用户列表',
        users,
        moment
    })
}