/**
 * Created by tholo on 6/14/2017.
 */

'use strict';
module.exports = function(app) {
    var user = require('../controllers/UserController');
    var validation = require('../validations/UserValidation');
    var validate = require('express-validation');


    // Users Routes
    app.route('/users')
        .get(user.list_all_users)
        .post(validate(validation.createUser), user.create_a_user);


    /*app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);*/
};