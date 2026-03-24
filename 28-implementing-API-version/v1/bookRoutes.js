const express = require('express');
const routes = express.Router();

const books=[
    {id:1,title:"The Great Gatsby",author:"F. Scott Fits"}
]


// get routes
routes.get("/",(req,res)=>{
    res.json({version:"v1",books})
})

module.exports = routes;