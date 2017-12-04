var mongoose = require('mongoose')
var HomepagesSchema = require('../schemas/homepages')
var Homepages = mongoose.model('homepages', HomepagesSchema, 'homepages')

module.exports = Homepages