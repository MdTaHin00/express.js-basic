const express = require("express");

const app = express();
const port = process.env.PORT || 5700 ;

app.get('/',(req,res)=>{
    res.send("hello")
    console.log("hello");
})

        //? using postRoutes  routes

//*  request post 
//!  routes folder postRoutes.js file require
const postIdDynamic = require("./routes/postRoutes.js");
//*  root path por -> user
//*  /user/post/:id
app.use('/user', postIdDynamic);



       //? using userRoutes  routes
//*  request  get
//!  routes folder userRoutes.js file require          
const userRoutes = require("./routes/userRoutes.js");
//*  search url
//*  /user/:name 
app.use('/',userRoutes);



// listen 
app.listen(port,()=>{
    console.log(`Express App listening on port ${port}`);
})