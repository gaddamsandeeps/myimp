/**
 * Module dependencies.
 */
var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

module.exports = function(app) {
    console.log('Initializing Express');

    // function to give access for cross domain control
    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    //Setting the fav icon and static folder
    //app.use(favicon(config.root + '/public/img/icons/favicon.ico'));
    var pbc = app.get("root") + '/public';
    app.use(express.static(pbc));

    //Don't use logger for test env
    if (app.get('env') === 'development') {
        app.locals.pretty = true;
        app.use(logger('dev'));
    }

    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cookieParser());

    //Set views path, template engine and default layout
    app.set('views', pbc + '/views');
    app.engine('html', require('ejs').renderFile);

    //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
    app.use(function(err, req, res, next) {
        //Treat as 404
        if (~err.message.indexOf('not found')) return next();
        //Error page
        res.status(500).render('500.html', {
            error: err.stack
        });
    });

    //Assume 404 since no middleware responded
    app.use(function(err, req, res, next) {
        res.status(404).render('404.html', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
};
