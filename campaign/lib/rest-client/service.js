/**
 * Common rest service call
 */

var Client = require('node-rest-client').Client,
    client = new Client(),
    log = logger.logger("rest-service");

var urls = require("./urls");

// set content-type header and data as json in args parameter
exports.builbArgs = function(restService, params, headers, callback) {
    var args = {
        data: {}, //for post 
        parameters: {}, // query parameter
        path: {},
        headers: {}
    };

    var method = restService.method;
    args.path.childpath = restService.path;
    args.headers = headers;
    args.method = method;

    if (!params) {
        params = {};
    }

    if (method.toLowerCase() === 'get') {
        args.parameters = params;
    } else {
        //data passed to REST method (only useful in POST, PUT or Delete methods)
        args.data = params;
    }
    callback(args);
};

// registering remote methods
client.registerMethod("post", config.restUrl.host + '${childpath}', "POST");
client.registerMethod("get", config.restUrl.host + '${childpath}', "GET");
client.registerMethod("put", config.restUrl.host + '${childpath}', "PUT");
client.registerMethod("delete", config.restUrl.host + '${childpath}', "DELETE");

exports.makecall = function(args, callback) {
    client.methods[args.method.toLowerCase()](args, function(data, response) {
        callback(data);
    }).on('error', function(err) {
        log.error(err)
        callback(err);
    });
};

exports = module.exports.urls = urls;
