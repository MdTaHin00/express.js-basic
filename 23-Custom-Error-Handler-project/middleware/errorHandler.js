const logger = require("../utils/logger");


// error middleware function
const errorHandler = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // log error details (optional code)
    // logger function akan thaka data transfer
    logger.error({
      status:statusCode,
      message:message,
      method:req.method,
      url:req.originalUrl,
      stack:err.stack
    })

    // show error data 
    res.status(statusCode).json({
        success:false,
        error:{
            status:statusCode,
            message:message
        }
    })
}

module.exports = errorHandler;