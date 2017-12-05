const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;
const UserSchema = mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    password: String,
    // 0: nomal user
    // 1: verified user
    // 2: professonal user
    // >10: admin
    // >50: super admin
    role: {
        type: Number,
        default: 0
    },
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
});

UserSchema.pre('save', function (next) {
    var user = this;
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else {
        this.meta.updateAt = Date.now()
    };
    bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
        if(error) return next(error);
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error) return next(error);
            user.password = hash;
            next();
        })
    });
});

UserSchema.methods = {
    comparePassword: function(_password) {
        console.log(_password, this.password)
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, this.password, function (error, isMatch) {
                console.log(error)
                if (error) {
                    console.log(error)
                    reject(error);
                };
                resolve(isMatch);
            })
        });
    }
}

UserSchema.statics = {
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById: function (id, cb) {
        return this
            .findOne({ _id: id })
            .exec(cb)
    }
}

module.exports = UserSchema;