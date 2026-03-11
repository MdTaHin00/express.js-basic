const express = require("express");

const app = express();
const port = process.env.PORT || 3600;

//* default middleware
// array json convat
app.use(express.json());


      //*  using blogs route

//? routes folder blogRoutes file require
  const blogsRoute = require("./routes/blogRoutes.js")
    // /blogs  path a -> blogs array show 
  app.use("/blogs",blogsRoute)/



// get root path code 
app.get('/',(req,res)=>{
    res.send('Blog Server is running...');
})




app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})