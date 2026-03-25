const express = require('express')
const app = express()
// process.env.PORT -> .env file code thaka asva
//  PORT -> .env file var 
//! dotenv require 
 require('dotenv').config();

const port = process.env.PORT || 3000


//? another wey
// const dotenv = require('dotenv')
// dotenv.config();

//! dotenv code -> .env file a

//? dotenv code run
// console.log(process.env);
//? single data run 
console.log(process.env.BD_URL);
console.log(process.env.SECRET_KEY);
console.log(port);



app.get('/', (req, res) => {
  res.send('dotenv server running...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
