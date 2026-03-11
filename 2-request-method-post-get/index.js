const express = require('express')

const app = express()

//! search -> localhost:5050
const port = process.env.PORT || 5050

//* middleware to parse JSON request bodies
app.use(express.json());

//? post request 
//* get request  root page 
app.get('/', (req, res) => {
  res.send('Request Method POST & GET')
})
//*  get request  about page
app.get('/about', (req, res) => {
  res.send("This is about page")
  //* postman thaka json data console
  console.log(req.body);
})

//?  post request
//* post request contact page 
app.post("/contact", (req, res) => {
  res.send("Contact page message received")
})


//!   route params for id 
app.post('/contact/post/:id', (req, res) => {
  //* dynamic id params 
  const postId = req.params.id;
  console.log(`Contact Page Post Id No ${postId}`);
  res.send(`Contact Page Post Id No ${postId}`)
})


//!  route params for title 
app.get('/about/admin-name/:name', (req, res) => {
  //* dynamic params title 
  const adminName = req.params.name;
  console.log(`About Page Admin Name ${adminName}`);
  res.send(`Admin Name : ${adminName}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
