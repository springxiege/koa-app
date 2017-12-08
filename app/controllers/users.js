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
        await ctx.redirect('/admin/users')
    }
    const match = await $user.comparePassword(password);
    if (!match) {
        console.log('password is not matched')
        await ctx.redirect('/')
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
    await ctx.redirect('/admin/users')
}

exports.logout = async (ctx, next) => {
    await delete ctx.session.user;
    await delete ctx.state.user;
    await ctx.redirect('/');
}

