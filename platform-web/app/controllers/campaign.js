/** 
 * campaign Controller
 * Module dependencies.
 */
var campaign = require('campaign'),
    log = logger.logger("campaign-controller"),
    validator = require('validator');

exports.getCampaignById = function(req, res, next) {
    log.debug("getCampaignById : id is " + req.params.id);

    var id = req.params.id;

    if (!validator.isNumeric(id)) {
        res.status(404);
        res.json({
            param: 'id',
            msg: 'Campaign Id should not be empty and to be numeric',
            value: id
        });
    } else {
        campaign.getCampaignById(id, function(resp) {
            res.json(resp);
        });
    }
};


exports.getSimplePoolEntries = function(req, res, next) {
    log.debug("getSimplePoolEntries begin ");

    var campaignId = req.query.campaignid;
    var offset = req.query.offset;
    var limit = req.query.limit;
    var poolName = req.query.poolname;

    if (!validator.isNumeric(offset)) {
        res.json({
            param: 'offset',
            msg: 'Offset should not be empty and to be numeric',
            value: offset
        });
    } else if (!validator.isNumeric(limit)) {
        res.json({
            param: 'limit',
            msg: 'Limit should not be empty and to be numeric',
            value: limit
        });
    } else if (!validator.isNumeric(campaignId)) {
        res.json({
            param: 'campaignId',
            msg: 'Campaign Id should not be empty and to be numeric',
            value: campaignId
        });
    } else {
        var params = req.query;

        campaign.getSamplePoolEntries(campaignId, offset, limit, poolName, function(resp) {
            res.json(resp);
        });
    }
};
