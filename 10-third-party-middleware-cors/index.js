const express = require("express");
const app = express();
const port = process.env.PORT || 3750;

// cors require
const cors = require('cors')

//* third party middleware tai first work
//? const morgan = require('morgan') <- ata

 //! third party middleware ->
 //* combined, common, dev, short, tiny
//? call -> app.use(morgan('combined'));


//!  cors -> frontend & backend connection
// aka dik origin:['http://localhost:3750/','ww.codebd.com']
app.use(cors({
    origin:['http://localhost:3750/'], // main url
    credentials:true,
    allowedHeaders:['content-type','Authorization'],
    // ki ki method kas kolva
    methods:['GET','POST','PUT','DELETE']
}))



app.get("/",(req,res)=>{
    res.send('Welcome on you page');
})


app.listen(port,()=>{
    console.log(`Express server is  running ${port}`);
})