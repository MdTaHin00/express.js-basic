const express = require('express')
const app = express()
const port = 3000

//!  middleware function
app.get('/', (req, res,next) => {
    const error = new Error("Something went wrong to error!");
    error.status= 500;
    // next -> porl code call kola
    next(error);
})

//!  error middleware function
const errorMiddleware =(err,req,res,next)=>{
    // err.status -> opel error
    res.status(err.status || 500).json({
        success:false,
        // err.message -> opel error
        message:err.message || "Internal Server error",
    })
}

//!  use the middleware 
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
