 
 const fs = require('fs');
 const path = require('path')
 
 // path join and new file create code run
 const loggerPath = path.join(process.cwd(),'logger.txt');


 const activityLogger = (req,res,next) => {
     const timeStamp = new Date().toISOString();
     const loggerMessage = `[${timeStamp}] ${req.method} ${req.url} \n`;
     console.log(loggerMessage);

     fs.appendFile(loggerPath,loggerMessage,(err)=>{
        if(err){
            console.log("Error writing ti log",err);
        }
     })

     next();

 }

 //* require method 
 
 module.exports  = activityLogger ;