/**
 * Created by tholo on 6/14/2017.
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    email: {
        type: String,
        Required: 'Kindly enter your email'
    },
    phone: {
        type: String,
        Required: 'Kindly enter your phone'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema);