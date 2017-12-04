var mongoose = require('mongoose')
var ProjectsSchema = require('../schemas/projects')
var Projects = mongoose.model('Projects', ProjectsSchema, 'projects')

module.exports = Projects