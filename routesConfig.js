const index = require('./app/routes/index')
const users = require('./app/routes/users')
const admin = require('./app/routes/admin')
module.exports = app => {
    app.use(index.routes(), index.allowedMethods())
    app.use(users.routes(), users.allowedMethods())
    app.use(admin.routes(), admin.allowedMethods())
}