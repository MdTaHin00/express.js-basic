const express = require('express')
const app = express()
const port = 3000
//! compression require
const compression = require('compression')

//! middleware
app.use(compression())

app.get('/', (req, res) => {
  res.send('compression server running...')
})

app.get("/larger-data",(req,res)=>{
    const mydata = "This my data";
    // mydata -> 500 bar repeat hva
    const largerData = {message:mydata.repeat(100)}
  res.json(largerData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
