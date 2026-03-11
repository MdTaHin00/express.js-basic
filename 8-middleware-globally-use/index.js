const express = require("express");
const activeLogger = require("./middleware/logger");
const app = express();
const port = process.env.PORT || 3800 ;

   //!   middleware use globally

// middleware folder logger file require
// middleware code all page run hoy
app.use(activeLogger);



app.get('/',(req,res)=>{
  res.send("hello middleware");    
})
app.get("/about",(req,res)=>{
  res.send("About Page")
})


app.listen(port,()=>{
    console.log(`Express App is Running ${port}`);
})