const express = require('express')
const app = express()
const cors = require('cors')
//* PORT code a janno ata
// require('dotenv').config()  (comment code)
//* PORT-> .env file defend
const port = process.env.PORT || 3000

//!  middleware
app.use(express.json())
//*  cors() -> frontend connection kola 
app.use(cors())


//!  routes
const bookRoutes = require('./routes/bookRoutes.js')
// ata first path -> /books
app.use("/books",bookRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to book project!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
