const express = require("express");

//! Router Formate -> tai Router function
//*  Router() -> function
const router = express.Router();

// array of object 
const blogs = [
    {
        "id": 1,
        "title": "1st Blog post",
        "description": "This is the 1st post description"
    },
    {
        "id": 2,
        "title": "2nd Blog post",
        "description": "This is the 2nd post description"
    },
    {
        "id": 3,
        "title": "3rd Blog post",
        "description": "This is the 3rd post description"
    },
]


// get root url blogs array 
router.get('/', (req, res) => {
    // all blogs array import
    res.send(blogs);
})



//!  dynamic a single id search blogs 
 router.get('/:id', (req, res) => {
    //* object kola id call
    const { id } = req.params;

    //* find blogs 
    // parseInt -> object id number convat
    const existingBlogs = blogs.find((blog) => blog.id === parseInt(id))

    //* blog na hola 
    if (!existingBlogs) {
        res.json("No Blog found");
    }
    res.send(existingBlogs)
})



  //!    add a new blogs  
  //*   add tai -> post method
   router.post("/add-post",(req,res)=>{
     // postman thaka -> object title,description call
     // postman thaka data -> req.body  add hoy
     const{title,description} = req.body;

     const newBlog = {id:blogs.length + 1, title:title , description:description}
     // array add kola 
     blogs.push(newBlog);

     res.json({
        message:"New Blog add successFully",
        blog:newBlog
     })
      
  })


//!  update a blogs 
//*  update tai -> put method
   router.put("/update-post/:id",(req,res)=>{
     // object hoy id call 
     const {id}= req.params;
    // postman thaka -> object title,description call
     const{title,description} = req.body;

    // a single blog 
     const blog = blogs.find((blog)=>blog.id === parseInt(id));
     // blog na hola 
     if(!blog){
        res.status(404).json({
            message:"No Blog Found",
        })
     }
     //* update method
     // blog.title my code =  title -> update create title
     blog.title = title  || blog.title;
     blog.description = description || blog.description
    })

//!  delete a single blog
//* delete tai -> delete method
router.delete("/delete-post/:id",(req,res)=>{
    // object hoy id call
    const {id} = req.params;
    //* delete method
    const blogIndex = blogs.findIndex((blog)=> blog.id === parseInt(id));

    if(blogIndex === -1){
        res.send(404).json({
            message:"Blog No Found"
        })
    }
    //* 1 splice slice call
    blogs.splice(blogIndex , 1)
    res.status(404).json({message:"blog delete success"})
})



//*  require tai module.exports
module.exports = router;