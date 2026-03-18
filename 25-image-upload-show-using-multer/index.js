const express = require('express')
const app = express()
const port = 3000
const multer = require('multer')
const path = require('path')


//!  multer file storage
//*  image uploads code
const storage = multer.diskStorage({
    //* destination -> ja file image upload hova
    destination: "uploads/",
    filename: (req, file, cd) => {
        //* Date.now() -> unique name 
        //* path.extname(file.originalname) -> image path name
        cd(null, Date.now() + path.extname(file.originalname))
    }
})
// multer call kola
const upload = multer({ storage: storage })


//!  middleware 
//* aknay soto public folder ar file kas kolva
app.use(express.static("public"))


//? file show middleware
//* uploads folder image add tai ai code 
app.use("/uploads",express.static("uploads"))


app.get("/",(req,res)=>{
    res.sendFile(process.cwd() + "/public/index.html")
})

// upload -> const multer upload
//single -> default code 
// image -> public folder index file input name
app.post("/upload", upload.single('image'),(req, res) => {
   if(!req.file){
    return res.status(404).json({error:"file not found"})
   }
   res.status(202).json({
    message:"File Uploads SuccessFully",
    // req.file.filename -> upload file name 
    file:req.file.filename
   })
})
 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
