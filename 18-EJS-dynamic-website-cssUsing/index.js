const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//!  middleware files  -> css file conn
// public -> folder name
app.use(express.static(path.join(process.cwd(),"public")))


//!  configure template engine 
 // ejs -> file exton name 
  app.set('view engine','ejs');
  // path.join(process.cwd(),'views') -> views folder name 
 app.set('views',path.join(process.cwd(),'views'));

//! simple array of object
const products=[
    {id:1,name:'iphone',description:'This is iphone',price:800},
    {id:2,name:'pen',description:'This is pen',price:5},
    {id:3,name:'book',description:'This is book',price:40},
    {id:4,name:'laptop',description:'This is laptop',price:200},
] 

app.get('/', (req, res) => {
    // index -> index page data java
  res.render('index',{title:"products list",products:products})
})


//! products search id 
app.get('/product/:id',(req,res)=>{
    const productId = req.params.id;

 //* products find
 const product = products.find(product => product.id === parseInt(productId))
  if(!product){
    res.status(404).send("Products No Found");
  } 

  //*  product file -> object hoy product transfer kola
  res.render('product',{product})

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
