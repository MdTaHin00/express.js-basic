const express = require("express");
const app = express();
const port = process.env.PORT || 3700;
   
 //!   built in middleware
 //*  express.json(), express.urlencoded() and 
 //* express.static()
  

 //!  default middleware -> express.json()
 //* json data passed kola
  app.use(express.json())

 //! file submission related code -> express.urlencoded()
  app.use(express.urlencoded({extended:true}));

 //!  html file code run kola -> express.static()
 // static('public')  -> folder thaka file code run
 // root path -> localhost:3800/app.html 
  app.use(express.static('./public'))


app.get("/",(req,res)=>{
    res.send('Welcome new Build in Middleware page');
})
// new blog  post route
app.post("/blog",(req,res)=>{
    // postman thaka data body received
   console.log(req.body);
   res.send('Blog create successfully')
})
app.listen(port,()=>{
    console.log(`Express server is  running ${port}`);
})