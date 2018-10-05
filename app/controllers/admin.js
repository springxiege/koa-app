const Homepages = require('../modals/homepages');
const Advantage = require('../modals/advantage');
const Experiences = require('../modals/experiences');
const Projects = require('../modals/projects');
const User = require('../modals/users');
const moment = require('moment')

// sign in
exports.signin = async (ctx, next) => {
    await ctx.render('admin/signin', {
        title: 'Sign In'
    })
}

// the center of admin
exports.index = async (ctx, next) => {
    await ctx.render('admin/index', {
        title: 'Admin Center'
    })
}

// resume
exports.resume = async (ctx, next) => {
    const homepagesData = await Homepages.fetch(function (err, homepages) {
        if (err) {
            console.log(err)
        }
        return homepages || [];
    });
    const advantageData = await Advantage.fetch((err, advantage) => {
        if (err) {
            console.error(err);
        }
        return advantage || [];
    });
    const experiencesData = await Experiences.fetch((err, experiences) => {
        if (err) { console.error(err) }
        return experiences || [];
    });
    const projectsData = await Projects.fetch((err, projects) => {
        if (err) { console.error(err) }
        return projects || [];
    });
    await ctx.render('admin/resume', {
        title: '后台管理',
        advantage: advantageData,
        homepages: homepagesData,
        experiences: experiencesData,
        projects: projectsData
    })
}

// user list
exports.users = async (ctx, next) => {
    const users = await User.fetch((error, users) => {
        if (error) console.log(error);
        return users || [];
    })
    await ctx.render('admin/adminlist', {
        title: '用户列表',
        users,
        moment
    })
}

// delete the user
exports.deleteUser = async (ctx, next) => {
    const id = ctx.params.id;
    await User.remove({_id: id}, (error, user) => {
        if(error){
            console.log(error);
            ctx.body = {
                success: false
            }
        }else {
            ctx.body = {
                success: true
            }
        }
    })
}

// blogs
exports.blogs = async (ctx, next) => {
    await ctx.render('admin/blogs', {
        title: 'Blog System'
    })
}

// midwire for verify the role of users
exports.auth = async (ctx, next) => {
    const user = await ctx.state.user;
    console.log(user)
    if(user && user.role > 50){
        await next()
    }else {
        ctx.redirect('/')
    }
}