/**
 * Created by rahulguha on 2/18/15.
 */

var config = require(__dirname + '/config/config.json')
var port = config.port || 8080;
var express = require('express');
var app     = express();

app.use(function(req, res, next){
    getRequest(req,res)

    next();  // BE SURE TO CALL next() !!
});


var getRequest = function(req, res){
    console.log(req.url);
    console.log(req.protocol);
    console.log(req.query);
    console.log(req.headers);
    console.log(req.ip);
    console.log(req.path);
}

app.listen(port);
console.log('Magic happens on port ' + port);

