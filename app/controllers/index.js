// var mongoose = require('mongoose')
const Homepages = require('../modals/homepages');
const Advantage = require('../modals/advantage');


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
    const experience = [
        { title: '杭州十禾信息科技有限公司', content: '', stayed: '2016.11-至今'},
        { title: '杭州可乐视媒网络技术有限公司', content: '', stayed: '2015.10-2016.10'},
        { title: '杭州启博科技有限公司', content: '', stayed: '2014.04-2015.09'},
        { title: '浙江灵岩文化创意有限公司', content: '', stayed: '2013-2014'}
    ];
    const projects = [
        { title: '云智绘项目', content: ''},
        { title: 'AE系统(类CRM系统)', content: ''},
        { title: '云智准项目(淘宝钻展)', content: ''},
        { title: '云智投重构(使用React技术栈，淘宝直通车)', content: ''},
        { title: '云智投维护与扩展(淘宝直通车)', content: ''},
        { title: '小觅淘项目(我要联赢电商项目)', content: ''},
        { title: '微网页维护与扩展(我要联赢营销工具)', content: ''},
        { title: '富阳西灵隐寺众筹项目', content: ''},
        { title: '粉盟开发', content: ''},
        { title: '微分销维护与扩展', content: ''},
        { title: '启分销维护与扩展', content: ''}
    ];
    await ctx.render('index', {
        title: '关于我 About Me',
        advantage: advantageData,
        homepages: homepagesData,
        experience,
        projects
    })
}

exports.string = async (ctx, next) => {
    ctx.body = 'koa2 string'
}

exports.json = async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
}