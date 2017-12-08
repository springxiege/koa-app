const router = require('koa-router')();
const Admin = require('../controllers/admin');
router.prefix('/admin');

router.get('/', Admin.auth, Admin.index);
router.get('/resume', Admin.auth, Admin.resume);
router.get('/users', Admin.auth, Admin.users);
router.delete('/users/:id', Admin.auth, Admin.deleteUser);
router.get('/blogs', Admin.auth, Admin.blogs);

// router.get('/bar', function (ctx, next) {
//     ctx.body = 'this is a users/bar response'
// })

module.exports = router;
