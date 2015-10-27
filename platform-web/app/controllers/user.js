/** 
 * Main Controller
 * Module dependencies.
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

exports.signin = function(req, res, next) {
    var user = {
        name: 'name',
        password: 'password',
        admin: false
    };

    var token = jwt.sign(user, 'secretkey', {
        expiresInMinutes: 1440 // expires in 24 hours
    });

    // return the information including token as JSON
    res.json({
        success: true,
        message: 'Token expires in expires in 24 hours!',
        key: token
    });
};
