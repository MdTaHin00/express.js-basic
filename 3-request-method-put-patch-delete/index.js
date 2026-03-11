const express = require("express");

const app = express();

const port = process.env.PORT || 6050 ;

//* root page 
app.get('/',(req,res)=>{
    res.send("Hello")
})


//!  request ->  put method
//*  put -> edit or update
//*  :id -> dynamic id 
app.put("/edit-post/:id",(req,res)=>{
  console.log("Editing post bt put request method");
  res.send("Editing post put SuccessFully")
})


//!  request  -> patch method
//*  patch  -> edit or update 
//*  :id  -> dynamic value
app.patch("/edit-post/:id",(req,res)=>{
    const editPost = req.params.id;
    console.log(`Editing no ${editPost} post ny patch request method`);
    res.send("Editing Patch Method SuccessFully")
})


//!  request -> delete method 
//* delete -> ay value delete
//*  :id -> dynamic value
app.delete("/delete/post/:id",(req,res)=>{
   const postId = req.params.id ;
   console.log(`Deleted  ${postId} No Post`);
   res.send(`Deleted ${postId} No Post`);
})


//  create server listen
app.listen(port,()=>{
    console.log(`${port} Server Reining`);
})