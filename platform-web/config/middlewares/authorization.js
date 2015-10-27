/**
 * Generic require login routing middleware
 */
var jwt = require('jsonwebtoken');


exports.verifyKey = function(req, res, next) {
    // check header or url parameters or post parameters for key
    var key = req.body.api_key || req.query.api_key || req.headers['x-access-key'];
   
    // decode key
    if (key) {
        // verifies secret and checks exp
        jwt.verify(key, 'secretkey', function(err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate key.'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {
        // if there is no key
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No key provided.'
        });
    }
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        next();
    }
};
