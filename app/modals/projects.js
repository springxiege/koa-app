var mongoose = require('mongoose')
var ProjectsSchema = require('../schemas/projects')
var Project = mongoose.model('Project', ProjectsSchema)

module.exports = Project