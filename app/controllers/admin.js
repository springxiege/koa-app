const Homepages = require('../modals/homepages');
const Advantage = require('../modals/advantage');
const Experiences = require('../modals/experiences');
const Projects = require('../modals/projects');
const User = require('../modals/users');
const moment = require('moment')
exports.index = async (ctx, next) => {
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
    await ctx.render('admin/admin', {
        title: '后台管理',
        advantage: advantageData,
        homepages: homepagesData,
        experiences: experiencesData,
        projects: projectsData
    })
}

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