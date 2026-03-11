const express = require('express');
const app = express();
const port = 3000;
const path = require("path")

app.get('/', (req, res) => {
  res.send('Server is running...')
})

//! json data response
app.get('/api/user',(req,res)=>{
    //* data make
    const user={
        id:1,
        name:"jihad",
        email:"jihad@gmail.com"
    }
    //? sending json response object hoya
    res.status(200).json({
      success:true,
      message:"User created SuccessFully",
      user:user
    })
})


//!  html element response
app.get("/html",(req,res)=>{
   res.send("<h1>Welcome to express</h1>")
})


//!  file response 
app.get("/file",(req,res)=>{
 //* path 
 const filePath = path.join(process.cwd(), 'public','example.html')
 //* file data -> res.sendFile()
 res.sendFile(filePath)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})