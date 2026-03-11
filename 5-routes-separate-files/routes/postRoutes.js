const express = require("express");

//! Router Formate -> tai Router function
//*  Router() -> function
const router = express.Router();


router.post("/post/:id",(req,res)=>{
    const PostIn = req.params.id;
    console.log(`Post Id Number No ${PostIn}`);
    res.send(`Post Id Number No ${PostIn}`);
})


//*  require tai module.exports
module.exports = router ;