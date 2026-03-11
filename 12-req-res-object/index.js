const express = require("express");

const app = express();
const port = process.env.PORT || 3800;



app.get("/",(req,res)=>{
    res.send("Server is running...");
})

      //!  Request(req) 

app.get("/about",(req,res)=>{
   //?  request method
   console.log("Request Method ", req.method);
   //? request url 
   console.log(" Request Url ",req.url);
   //? params 
   //*  /about:id -> /about/2
   console.log("Params ",req.params);
   //?  url query 
   //*  /about?product=iphone&page=2
   console.log("Query ",req.query);
   
   //?  headers
   console.log("Headers ",req.headers);
})

 app.get("/text",(req,res)=>{
    res.send("This is a text file")
 })


      //!  Response(res)
app.get("/json",(req,res)=>{
    //?   json()
    res.json({message:"Hello a json code"})
})

app.get('/status',(req,res)=>{
    //?  status -> status code 
    res.status(404).send("Page not found");
})

app.get("/redirect",(req,res)=>{
    //? redirect -> transfer another file 
    res.redirect("/text")
})


app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})