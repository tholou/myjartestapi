/**
 * Created by tholo on 6/14/2017.
 */

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('MYJAR Test RESTful API server started on: ' + port);