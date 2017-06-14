/**
 * Created by tholo on 6/14/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    others: {
        type: Array
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function(next) {
    var user = this;

    // only encrypt the phone if it has been modified (or is new)
    if (!user.isModified('phone')) return next();

    user.phone= cryptr.encrypt(user.phone);
    next();

});
module.exports = mongoose.model('Users', UserSchema);