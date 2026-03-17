const {createLogger,format,transports} = require('winston')

const logger = createLogger({
    level:"error",
    format:format.combine(format.timestamp(),format.json()),
    transports:[
        // errors.log file error data transfer hova
        new transports.File({filename:'errors.log'}),
         // error data console hova
        new transports.Console()
    ]
})


//exports 
module.exports = logger ;