const express = require('express')
const CustomError = require('./utils/customError')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// CustomError class require
app.get("/about",(req,res,next)=>{
    next (new CustomError('About Page Not Found',404))
})


// unauthorized page
app.get('/unauthorized',(req,res,next)=>{
    next(new CustomError("unauthorized Access",401));
})

//* use the middleware
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
