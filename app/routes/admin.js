const router = require('koa-router')()
const Admin = require('../controllers/admin');
router.prefix('/admin')

router.get('/', Admin.index)
router.get('/users', Admin.users);
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router
