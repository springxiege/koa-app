const router = require('koa-router')()
const User = require('../controllers/users');
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/list', User.list);
router.post('/signin', User.signin);
router.post('/signup', User.signup);
router.get('/logout', User.logout)
module.exports = router
