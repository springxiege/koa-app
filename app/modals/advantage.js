var mongoose = require('mongoose')
var AdvantageSchema = require('../schemas/advantage')
var Advantage = mongoose.model('advantage', AdvantageSchema, 'advantage')

module.exports = Advantage