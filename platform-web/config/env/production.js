module.exports = {
    app: {
        description: "Production environment is up..."
    },
    restUrl: {
        host: 'http://mcstage.atfingertips.com/', // here only the domain name        
        //port: '443',        
        contentType: {
            "Content-Type": "application/json"
        }
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
