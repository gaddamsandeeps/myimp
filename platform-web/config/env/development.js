module.exports = {
    app: {
        description: "Development environment is up..."
    },
    restUrl: {
        host: 'http://mcstage.atfingertips.com/', // here only the domain name        
        //port: '443',        
        contentType: {
            "Content-Type": "application/json"
        }
    },
    db: {
        'secret': 'secretkey',
        'url': 'mongodb://sgaddam:sgaddam@ds047672.mongolab.com:47672/imp'
    },
    logger: {
        logAppender: "file",
        logFilename: "c:/temp/IMP.log",
        logCategory: "IMP",
        logLevel: "DEBUG",
        maxLogSize: "75MB",
        backups: 10
    }
};
