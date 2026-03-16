const logger = require("./logger")

// error middleware function
const errorHandler =(err,req,res,next)=>{
    logger.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl}`);

    res.status(err.statusCode || 500).json({
        success:false,
        message:err.message || 'Internal server'
    })
}

//  export
module.exports = errorHandler;