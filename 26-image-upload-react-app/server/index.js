const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const cors = require('cors');
const upload = require('./src/multer.js');
const fs = require('fs');
const cloudinary = require('./src/cloudinaryConfig.js')


//! middleware 
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
  res.send("Image Upload Server")
})


// upload -> multer.js file export 
// image -> client folder UploadImage file name {fromData.append("image",file)}
app.post('/upload', upload.single("image") , async (req,res)=>{
        if(!req.file){
        res.status(404).json({error:"No File Found"})
    }
    try {
        // cloudinary -> src folder cloudinaryConfig.js require
        // uploader -> default value 
        // upload -> default value
        const result = await cloudinary.uploader.upload(req.file.path,{
            // uploads -> ja folder image add hov
            folder:"uploads"
        });
        // delete file from local storage after upload
        fs.unlinkSync(req.file.path);
        // image upload message
        res.status(200).json({message:"File Uploaded Successfully", imageURL:result.secure_url});

    } catch (error) {
        res.status(404).json({error:"Upload filed",error})
    }
    
})

app.listen(port,()=>{
    console.log(`The Server ${port} Running on port`);
    
})