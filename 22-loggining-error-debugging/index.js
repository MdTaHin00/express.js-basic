const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const port = 3000

app.get('/', (req, res,next) => {
    const error = new Error("Error on Home Page");
    next(error);
})


//?  use the middleware
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
