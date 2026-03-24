const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const winston = require('winston')

//! middleware 
// dev -> davdepensory kas kola
app.use(morgan("dev"));

//? winston create
const logger = winston.createLogger({
   level:"info",
   format:winston.format.json(),
   transports:[
    new winston.transports.File({
      filename:'error.log',
      level:"error"
    }),
    new winston.transports.File({
      filename:'combined.log'
    })
   ]
})

app.get('/', (req, res) => {
  logger.info("From Not route")
  res.send('Performance Optimization Server...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//* optional code
// logger.info("Server started successfully")
// logger.error("Server failed")