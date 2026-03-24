const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    // uploads/ -> ja file image upload hova
    destination:"uploads/",
    filename:(req,file,cd)=>{
        // Date.now()-> random file name
        // path.extname(file.originalname) -> ja image add tar ext name 
        cd(null,Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage:storage})

//!  export upload 
module.exports = upload