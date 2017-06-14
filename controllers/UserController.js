/**
 * Created by tholo on 6/14/2017.
 */

'use strict';


var mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
    User.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};




exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    console.log(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


// exports.read_a_task = function(req, res) {
//     User.findById(req.params.taskId, function(err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };
//
//
// exports.update_a_task = function(req, res) {
//     User.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };
//
//
// exports.delete_a_task = function(req, res) {
//
//
//     User.remove({
//         _id: req.params.taskId
//     }, function(err, task) {
//         if (err)
//             res.send(err);
//         res.json({ message: 'User successfully deleted' });
//     });
// };
