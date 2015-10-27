/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    http = require('http'),
    path = require('path'),
    d = require('domain').create();
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load Configurations
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
//change to global scope
global.config = config;
global.logger = require('./config/logger');

var app = express();
app.set("root", path.join(__dirname, ''));
app.set("version", config.version);

var auth = require('./config/middlewares/authorization');

//Initialize Express
require('./config/express')(app);

//Initialize Routes
require('./config/routes').init(app, auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

d.on('error', function(err) {
    log.error("Caught with some error : " + err)
    console.log("Caught with some error : " + err);
})

//Start the app by listening on <port>
var port = config.port;
app.set('port', port);

d.run(function() {
    http.createServer(app).listen(app.get('port'), function() {
        console.log(config.appname + " " + config.app.description);
        console.log('Express server listening on port ' + app.get('port'));
    });
});

//expose app
module.exports = app;
