// dependencies
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/newMYJAR');
require('./models/UserModel');
var User = mongoose.model('Users');
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
var reqCount = function (a){
    var count = 0;
    var i;
    for (i in a) {
        if (a.hasOwnProperty(i)) {
            count++;
        }
    }
    return count;
};

var app = express();

// middleware
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(validator());

app.post('/api/users', function(req, res) {
    req.checkBody('email', "Email is required").notEmpty();
    req.checkBody('phone', "Phone is required").notEmpty();
    req.checkBody("email", "Enter a valid email address.").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    req.checkBody(
        "phone",
        "Enter a valid UK phone number.").isMobilePhone("en-GB");
    var errors = req.validationErrors();
    if (errors) {
        return res.send(errors);
    }else if (reqCount(req.body) > 10) {
        res.json({
            'status_code':404,
            'message': 'Bad request, User cant be created '
        });
    }
    else {
        // normal processing here
        var ninja = function (data) {
            var result = {};
            for (var key in data) {
                if (key !== 'email' && key !== 'phone') {
                    result[key] = data[key];
                }
            }
            return result;
        };
        console.log(ninja(req.body));
        var sepa = {
            email: req.body.email,
            phone: req.body.phone,
            others: ninja(req.body)
        };
        //return ;
        var new_user = new User(sepa);
        console.log(req.body);
        new_user.save(function(err, user) {
            if (err)
                res.send(err);
            res.json({
                'status_code':200,
                'message': 'User Created Successfully'
            });
        });
    }
});

app.get('/api/users', function(req, res) {
    User.find({}, function(err, user) {
        if (err)
            res.send(err);
        for (var i = 0; i<user.length; i++){
            user[i].phone = cryptr.decrypt(user[i].phone);
            user[i].phone = user[i].phone.substr(user[i].phone.length - 4);
        }
        res.json(user);
    });
});

app.get('/api/users/:userId', function(req, res) {
    req.checkParams('userId', "User ID is required").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        return res.send(errors);
    } else {
        // normal processing here
        User.findById(req.params.userId, function(err, user) {
            if (err)
                res.send(err);
            user.phone = cryptr.decrypt(user.phone);
            user.phone = user.phone.substr(user.phone.length - 4);
            res.json(user);
        });
    }
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);
console.log('MYJAR Test RESTful API server started on: ' + port);