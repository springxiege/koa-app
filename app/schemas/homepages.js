const mongoose = require('mongoose')
const Schema = mongoose.Schema

var HomepagesSchema = new Schema({
    title: String,
    url: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

HomepagesSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    }
    else {
        this.meta.updateAt = Date.now()
    }

    next()
})

HomepagesSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    }
}

module.exports = HomepagesSchema