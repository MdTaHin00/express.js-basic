const express = require("express");
const app = express();
const port = 4000;

//!  cookie-parser -> pnm install get cookie show tai
const cookieParser = require('cookie-parser');

// path
const path = require('path')

// default middleware
app.use(express.json());
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Server is running...')
})

//! create array
app.get("/api/profile",(req,res)=>{
    const user=[
        {
            id:1,
            name:'user 1',
            description:'user number 1'
        },
        {
            id:2,
            name:'user 2',
            description:'user number 2'
        },
        {
            id:3,
            name:'user 3',
            description:'user number 3'
        },
    ]
    res.status(200).json(user)
})

//! cookie ->
//?  name,value,domain,path,expires,httponly,secure
//*httponly -> localhost kas hoy

//!  set cookie
app.get("/set-cookie",(req,res)=>{
    //* cookie name -> custom-cookie
    //*  cookie value -> 123xyz
  res.cookie('customCookie','123xyz',{
     maxAge:60000,
     httpOnly:true,
     secure:true
  })
  res.send("cookie set successFully")
})

//!  get cookies
app.get("/get-cookie",(req,res)=>{
    // customCookie -> cookie name
    const cookie = req.cookies.customCookie;
    res.send(`Custom Cookie is: ${cookie}`)
})

//! delete cookie 
app.get("delete-cookie",(req,res)=>{
    res.clearCookie('customCookie');
    res.send('Cookie deleted successful')
})

//!  profile html page
app.get('/profile',(req,res)=>{
     const cookie = req.cookies.customCookie;
     if(!cookie){
        return res.status(404).json({message:"Un Authorized access?"})
     }
    const filePath = path.join(process.cwd(),'public','profile.html')
    res.sendFile(filePath)    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

