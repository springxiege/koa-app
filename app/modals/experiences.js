var mongoose = require('mongoose')
var ExperiencesSchema = require('../schemas/experiences')
var Experiences = mongoose.model('Experiences', ExperiencesSchema, 'experiences')

module.exports = Experiences