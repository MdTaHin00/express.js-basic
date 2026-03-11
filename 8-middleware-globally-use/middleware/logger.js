
//*  activity logger middleware

//  middleware function 3 var hoy

const activeLogger = (req,res,next)=>{
    // present time & string code 
    const timeStamp = new Date().toISOString();
    console.log(`[${timeStamp}] ${req.method} ${req.url}`);
    // next function call diya next code run 
    next();
}

//* require import -> module.exports

module.exports = activeLogger;
