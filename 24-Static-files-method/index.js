const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//! middleware folder
app.use(express.static(path.join(process.cwd(),"public")))

app.get('/', (req, res) => {
    //*  path url call
    const pathUrl = path.join(process.cwd(),"public","index.html")
  res.send(pathUrl)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
