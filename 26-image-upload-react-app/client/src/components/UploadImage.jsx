import React from 'react'
import { useState } from 'react'

import axios from 'axios';

function UploadImage() {

    const [file,setFile] = useState(null)
    const [imageUrl,setImageUrl] = useState("")

    const handelFileChange=(e)=>{
        // file details
        setFile(e.target.files[0])
    }


    const handelUpload = async()=>{
        if(!file){
            alert("Please Choose your file")
            return
        }
        //* ai file data 
        const fromData = new FormData();
        //* image -> image upload tai
        fromData.append("image",file);

        try{
            // axios -> axios npm import
            // post -> post method tai
            // http://localhost:3000/upload -> ai path thaka image asva
          const response = await axios.post("http://localhost:3000/upload",fromData);
          if(response.status === 201){
            alert("Uploaded file successfully")
            setImageUrl(response.data.imageUrl)
          }
        }catch(error){
         console.log("Upload Image Failed",error);
        }
    }

    return (
        <div>
            <h1>Upload Image</h1>
            <div>
                <input type="file" onChange={handelFileChange} />
                <button onClick={handelUpload}>Upload</button>
            </div>
            <div>
                {imageUrl && <img src={imageUrl}/>}
            </div>
        </div>
    )
}

export default UploadImage
