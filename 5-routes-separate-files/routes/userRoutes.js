const express = require("express");

//! Router Formate -> tai Router function
//*  Router() -> function
const router = express.Router();

router.get("/user/:name",(req,res)=>{
    const userName = req.params.name;
    res.send(`User Name : ${userName}`)
})


//*  require tai module.exports
module.exports = router;