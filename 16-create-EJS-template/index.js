const express = require('express')
const app = express()
const port = 3000
const path = require('express')


//!  set EJS as the template engine
// view engine -> default code 
// ejs -> ja engine use tar name 
app.set('view engine','ejs')

//! set views directory (folder containing)
app.set('views',path.json(process.cwd(),'views'))


app.get('/', (req, res) => {
  //? server render
  //* dynamic data create
  res.render("index",{title:"Home Page",message:"Welcome to EJS"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
