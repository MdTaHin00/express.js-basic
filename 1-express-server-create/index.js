//! express import -> require method
const express = require("express");

//* express() call new const app 
const app = express();

//* process.env.PORT -> dynamic port 
//! search -> localhost:3050
const port = process.env.PORT || 3050;


app.get('/', (req, res) => {
    // 3000 port a hello express text show
    res.send("Hello Express");
});


// code pora tai listen 
app.listen(port, () => {
    console.log(`Your server is listening on port ${port}`);
});



