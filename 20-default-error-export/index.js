const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const port = 3000
const fs = require('fs')

//?! global errorHandler middleware require
app.use(errorHandler)

//* middleware function 
app.get('/', (req, res,next) => {
  const error = new Error("Home Route error !")
   next(error)
})

// middleware about function
app.get("/about",(req,res,next)=>{
   fs.readFile('/xys.txt',(err,data)=>{
    if(err) next(err);
    res.send(data.toString())
   })
})

// middleware product function
app.get("/product",(req,res,next)=>{
     try{
        // error show tai esn
        res.sen("Product Page")
     }catch(error){
        next(error)
     }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
