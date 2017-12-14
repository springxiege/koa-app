var mongoose = require('mongoose')
var ExperiencesSchema = require('../schemas/experiences')
var Experience = mongoose.model('Experience', ExperiencesSchema)

module.exports = Experience