const router = require('koa-router')()
const Index = require('../controllers/index');

router.get('/', Index.index)

router.get('/list', Index.list)

router.get('/detail/:id', Index.detail)

router.get('/about', Index.about)

router.get('/photos', Index.photos)

// router.get('/signin', Index.login)

router.get('/resume', Index.resume)

router.get('/string', Index.string)

router.get('/json', Index.json)

module.exports = router
