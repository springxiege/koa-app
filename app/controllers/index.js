// var mongoose = require('mongoose')
const Homepages = require('../modals/homepages');
const Advantage = require('../modals/advantage');
const Experiences = require('../modals/experiences');
const Projects = require('../modals/projects');

exports.index = async (ctx, next) => {
    const homepagesData = await Homepages.fetch(function (err, homepages) {
        if (err) {
            console.log(err)
        }
        return homepages;
    });
    const advantageData = await Advantage.fetch((err, advantage) => {
        if(err){
            console.error(err);
        }
        return advantage;
    });
    const experiencesData = await Experiences.fetch((err, experiences) => {
        if(err){console.error(err)}
        return experiences
    });
    const projectsData = await Projects.fetch((err, projects) => {
        if(err){console.error(err)}
        return projects
    });
    await ctx.render('index', {
        title: '关于我 About Me',
        advantage: advantageData,
        homepages: homepagesData,
        experiences: experiencesData,
        projects: projectsData
    });
}

exports.string = async (ctx, next) => {
    ctx.body = 'koa2 string'
}

exports.json = async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
}