const express = require('express');
const app = express();
const port = process.env.PORT || 6200 ;


        //! query method 

//*  value call -> search?category=phone
//? multiple value call -> 
//*  search?category=phone & checkNum=4
app.get('/search',(req,res)=>{
    //* object value tai {}
    //* category -> url ver name 
    const {category,checkNum} = req.query;
    res.send(`Category Product : ${category} and Product Number : ${checkNum}`);
    console.log(`Category Product : ${category} and Product Number : ${checkNum}`);
})


      //!   dynamic route
app.get("/posts/:id",(req,res)=>{
    const postId = req.params.id;
    res.send(`Post Id Number : ${postId}`)
    console.log(`Post Id Number : ${postId}`);
})      



// create server listen for read
app.listen(port,()=>{
    console.log(`Express App listening on port ${port}`);
})

