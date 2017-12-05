const router = require('koa-router')()
const Index = require('../controllers/index');

router.get('/', Index.index)

router.get('/string', Index.string)

router.get('/json', Index.json)

module.exports = router
