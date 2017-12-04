const index = require('./app/routes/index')
const users = require('./app/routes/users')
module.exports = app => {
    app.use(index.routes(), index.allowedMethods())
    app.use(users.routes(), users.allowedMethods())
}