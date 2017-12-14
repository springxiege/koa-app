var mongoose = require('mongoose')
var HomepagesSchema = require('../schemas/homepages')
var Homepage = mongoose.model('Homepage', HomepagesSchema)

module.exports = Homepage