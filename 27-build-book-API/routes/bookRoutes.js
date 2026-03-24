const express = require('express');

const router = express.Router();

const books=[
    {id:1,title:"The Great Gatsby",author:"F. Scott Frtzgerald"},
    {id:2,title:"1989",author:"George Orwell"},
    {id:3,title:"To a kill",author:"Harper Lee"}
];

router.get("/",(req,res)=>{
    res.status(200).json(books);
})


//! add a new book
router.post("/",(req,res)=>{
    // postman thaka -> title,author data reached
    const{title,author} = req.body

    // const newBook = {id:books.length + 1 ,title:title , author:author }
    //* another wey
    // ...req,body -> all key value add 
     const newBook ={id:books.length + 1 , ...req.body}
    books.push(newBook)
    res.status(200).json({message:"SuccessFully Data Add"})
})


//! a update method 
router.patch("/:id",(req,res)=>{
    const {id} = req.params;
    const findBookIndex = books.findIndex(book => book.id === parseInt(id))

    if(!findBookIndex !== -1){
        //update
        books[findBookIndex] = {...books[findBookIndex],...req.body};
        res.status(200).json(books[findBookIndex]);
    }else{
        res.status(404).json({message:"Book Not Found"})
    }

})

//!  delete a data
router.delete("/:id",(req,res)=>{
    const{id}= req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.status(200).json({message:"Book Delete Successfully"});
})


module.exports = router