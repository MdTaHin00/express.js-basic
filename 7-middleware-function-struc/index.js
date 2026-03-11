const express = require("express");
const app = express();
const port = process.env.PORT || 3900 


app.get("/",(req,res)=>{
    res.send("Welcome to our server!");
})

//! middleware function structure
//* middleware function -> 3 var count kola
const middleware = (req,res,next)=>{
    console.log("middleware is executed !");

    // next var dia poral code run bojata hova
    next();
    // next function -> call kola middleware kas kola
}

//* middleware function use
app.get('/product', middleware , (req,res)=>{
    res.send("Products page...")
})

app.listen(port,()=>{
    console.log(`Express app listening on port ${port}`);
})