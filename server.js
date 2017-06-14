/**
 * Created by tholo on 6/14/2017.
 */

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./models/UserModel'),
    bodyParser = require('body-parser');
    ev = require('express-validation');




mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/UserRoutes');
routes(app);
app.use(function(req, res, next) {
    res.status(404).send({url: req.originalUrl + ' not found'});
    next();// move onto next middleware
});
// error handler
app.use(function (err, req, res, next) {
    // specific for validation errors
    if (err instanceof ev.ValidationError){
        // assign options
        ev.options({
            status: 422,
            statusText: 'Unprocessable Entity'
        });
        return res.status(err.status).json(err);
    } else {
        res.status(500)
            .json({
                status: err.status,
                message: err.message
            });
    }
});

app.listen(port);

console.log('MYJAR Test RESTful API server started on: ' + port);