exports.index = async (ctx, next) => {
    const advantage = [
        '四年以上Web前端开发的相关经验',
        '熟悉WEB开发相关的Html5、JavaScript、Ajax、DIV+CSS、JQuery等常用语言',
        '良好的沟通与表达能力、思路清晰，较强的动手能力与逻辑分析能力',
        '有解决问题和钻研新技术的兴趣和能力。喜欢挑战新技术和挑战自我',
        '能使用react相关技术搭建spa应用',
        '能使用vue构建项目'
    ];
    const homepages = [
        { title: '我的主页', url: 'http://www.blacklove.cn'},
        { title: '我的github地址', url: 'http://www.github.com/springxiege'},
        { title: '我的个人博客地址(github)', url: 'http://springxiege.github.io'},
        { title: '我的个人博客地址(oschina)', url: 'http://springxiege.gitee.io'}
    ];
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
        advantage,
        homepages,
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