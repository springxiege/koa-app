const Koa = require('koa')
const app = new Koa()
const session = require("koa-session");
// const Store = require("koa-session2/libs/store");
// const views = require('koa-views')
const koaNunjucks = require('koa-nunjucks-2')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path');
const routesConfig = require('./routesConfig');
const mongoose = require('mongoose');

// Using `mongoose.connect`...
// connect db 
const dbUrl = 'mongodb://localhost/resume';
mongoose.Promise = global.Promise;  // 防止警告
const promise = mongoose.connect(dbUrl, {
  useMongoClient: true,
  /* other options */
});
promise.then(db => {
  db.on('error', console.error.bind(console, '连接错误:'));
  db.once('open', function () {
    console.log('连接成功');
  })
})

// error handler
onerror(app)
app.keys = ['blacklove'];
app.use(session({
  key: 'koa:sess',
  httpOnly: true,
  signed: true,
  rolling: true
}, app));
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json());
if ('development' === app.env){
  app.use(logger(':method :url :status'));
  mongoose.set('debug', true);
}

app.use(require('koa-static')(__dirname + '/public'))
app.use(koaNunjucks({
  ext: 'html',
  path: path.join(__dirname, 'app/views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}));
// app.use(views(__dirname + '/views', {
//   extension: 'nunjucks'
// }))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// auth user and add path to state
app.use(async (ctx, next) => {
  const user = ctx.session.user;
  ctx.state.path = ctx.path;
  if(user){
    ctx.state.user = user;
  }
  await next();
})
// routes
routesConfig(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
