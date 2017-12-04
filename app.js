const Koa = require('koa')
const app = new Koa()
// const views = require('koa-views')
const koaNunjucks = require('koa-nunjucks-2')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path');
const routesConfig = require('./routesConfig');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
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

// routes
routesConfig(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
