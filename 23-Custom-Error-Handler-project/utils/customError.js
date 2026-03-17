//? reusable class for error handler

//* Error build in function 
class CustomError extends Error{
    constructor(message,statusCode){
        // super -> constructor function var call
        super(message);
        this.statusCode = statusCode;
        //* error for debugging (option code)
          Error.captureStackTrace(this,this.constructor)
    }
}


//exports 
module.exports = CustomError;