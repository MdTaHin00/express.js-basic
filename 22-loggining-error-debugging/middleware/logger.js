const {createLogger,transports,format} = require('winston')


const logger = createLogger({
    level:"error",
    format:format.combine(format.timestamp(),format.json()),
    transports:[
        //* error.log -> new file add & error value add hova
     new transports.File({filename:"error.log"}),
     // console value show
     new transports.Console()
    ]
})  


module.exports = logger;