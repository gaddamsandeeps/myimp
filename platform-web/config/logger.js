/**
 * logger.js
 */
var log4js = require('log4js'),
    loggerProps = config.logger,
    logger;

log4js.configure({
    appenders: [{
        type: loggerProps.logAppender,
        filename: loggerProps.logFilename,
        category: loggerProps.Category,
        maxLogSize: loggerProps.maxLogSize,
        backups: loggerProps.backups
    }]
});

logger = log4js.getLogger(loggerProps.Category);
logger.setLevel(loggerProps.logLevel);

exports.logger = function(name) {
    logger = log4js.getLogger(name);
    return logger;
};
