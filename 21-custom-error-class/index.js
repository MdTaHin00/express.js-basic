const express = require('express')
const CustomError = require('./middleware/customError')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server is Running..!')
})

        //!  custom error
//* customError file -> CustomError class require
app.get('/about',(req,res,next)=>{
    // CustomError class -> message , statusCode value
    next(new CustomError("About Page Not Found",404))
})

       //! default error
 app.get("/product",(req,res,next)=>{
    try{
      res.send("Product Page")
    }catch(error){
      next(error)
    }
 })      

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
