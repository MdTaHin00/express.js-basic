const CustomError = require("./customError")


//?  error middleware 
const errorHandler = (err,req,res,next)=>{
    // instanceof -> CustomError class data 
    if(err instanceof CustomError){
      return res.status(err.statusCode).json({
        success:false,
        message:err.message
      })
    }

    //! default error
    res.status(500).json({
        success:false,
        message:"Internal Server Error!"
    })
}

// export 
module.exports = errorHandler;