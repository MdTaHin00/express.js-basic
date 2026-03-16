
//!  error middleware 
const errorHandler =(err,req,res,next)=>{
    
    const statusCode = err.statusCode || 500 ;
    const message = err.message || "Interval Server Error!";

    res.status(statusCode).json({
        success:false,
        message:message
    })
}


// require method tai 
module.exports = errorHandler