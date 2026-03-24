const express = require('express')
const app = express()
const port = 3000
//!  node cache require
const nodeCache = require('node-cache')

//! cache vale
const cache = new nodeCache({stdTTL:100, checkperiod:120})

//! cache middleware
const cacheMiddleware = (req,res,next)=>{
    const key = req.originalUrl;
    const cachedData = cache.get(key)

    if(cachedData){
        console.log("Data Cached successfully");
        return res.json(cachedData);
    }
    console.log("First Time request,so no caches");
    next();
}

app.get('/', (req, res) => {
  res.send('Caching Server running !')
})

//! cacheMiddleware use
app.get("/data", cacheMiddleware , (req,res)=>{
  const userData ={
    name:"tahin",
    age:"21",
    email:"matainhassan@gmail.com"
  }

  //?  set the cache to temp memory
  cache.set(req.originalUrl,userData)
  res.json(userData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
