const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const ejs = require('ejs')


//!  middleware 
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
// engine name call
app.set('view engine','ejs')

// root page
app.get('/', (req, res) => {res.render('index')})
// about page
app.get("/about",(req,res)=>{res.render('about')})
// contact page
app.get("/contact",(req,res)=>{res.render('contact')})
// service page 
app.get("/service",(req,res)=>{res.render('service')})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
