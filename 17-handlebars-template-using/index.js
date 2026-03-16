const express = require('express')
const app = express()
const port = 3000
 //! express-handlebars require
const exphbs = require('express-handlebars')
        
//? handlebars npm call -> tai main.hbs
//  handlebars npm call tai -> express handlebars package install

//?  configuration
app.engine('hbs',exphbs.engine({extname:'hbs',defaultLayout:false}))
//* views engine -> hbs file show hova
app.set('view engine','hbs')
//* layouts -> folder name
app.set('views','./layouts')


app.get('/', (req, res) => {
    // data create 
    const userData = {
        name:"jihad",
        email:"jihad@gmail.com",
        age:21,
        isAdmin:true,
        hobbies:['coding','reading']
    }
    //* render kola data transfer korta hoy
     // profile -> file name ja file data java
    res.render('profile',userData)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
