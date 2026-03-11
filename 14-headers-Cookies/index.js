const express = require('express')
const app = express()
const port = 4000

//* cookie-parser
const cookiesParser = require('cookie-parser');

//* cookie-parser -> middleware tai
  app.use(cookiesParser())


app.get('/', (req, res) => {
  res.send('Server Is Running...')
})


//!  set headers
app.get("/headers",(req,res)=>{
     //* header name -> custom-header , header value ->  this is custom
    res.set("custom-header","This is custom headers")
})

//! cookie ->
//?  name,value,domain,path,expires,httponly,secure

//!  set cookies
app.get("/set-cookies",(req,res)=>{
    // cookie name = token , cookie value = jihad
   res.cookie('token','jihad',{
    httpOnly:true,
            // 15 minutes por cookie out
    expires: new Date(Date.now() + 900000), 
     secure:true
   })
   res.send("Set Cookie Successfully");
})


//!  get cookies 
app.get('/dashboard',(req,res)=>{
    //* req.cookies.token ; token -> set cookie name 
    const token = req.cookies.token;
    console.log(token);
    if(!token){
        return res.send("Cookies not get")
    }
    res.send("Welcome to dashboard");
}) 


//!  clear cookies
app.get('/clear-cookies',(req,res)=>{
    //* token -> cookies name
    res.clearCookie('token');
    res.send("Cookies clearer successfully")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
