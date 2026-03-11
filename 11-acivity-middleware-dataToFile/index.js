const express = require('express')
const app = express()
const port = process.env.PORT || 3750 ;

// activityLogger require 
const activityLogger = require('./middleware/logger.js');
// middleware use 
app.use(activityLogger);

app.get('/', (req, res) => {
  res.send('Activity Logger Application !')
})

app.get("/about",(req,res)=>{
    res.send("About Page");
})

app.get("/contact",(req,res)=>{
    res.send("Contact page");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})