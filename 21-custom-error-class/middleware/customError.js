//! reusable error class

class CustomError extends Error{
    constructor(message,statusCode){
        // super day -> constructor function var value add
        super(message);
        this.statusCode = statusCode;
    }
}

// export 
module.exports = CustomError;