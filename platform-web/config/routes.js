/** 
 * Routes
 * Module dependencies.
 */
var campaignController = require('../app/controllers/campaign');
var userController = require('../app/controllers/user');

exports.init = function(app, auth) {
    console.log('Initializing Routes');
    var apiRoutePrefix = '/api/' + config.version;

    app.all('/api/*', auth.verifyKey);

    // Campaign Routes    
    app.get(apiRoutePrefix + '/campaign/:id', campaignController.getCampaignById);
    app.get(apiRoutePrefix + '/social/entry/getSimplePoolEntries', campaignController.getSimplePoolEntries);
    app.get('/signin', userController.signin);
};
