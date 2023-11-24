import React, { useEffect, useState } from 'react'
import axios from 'axios';




function UploadImage(props) {
    const [file,setfile] = useState();
    const [data,setdata] = useState([]);
    const handleFile = (e) =>{
        setfile(e.target.files[0])
      }
    const UserName  = props.UserName
    useEffect(()=>{
      axios.post('http://localhost:3000/GetProfilePicture',UserName)
      .then(res => {
          console.log(res.data)
          setdata(`http://localhost:3000/images/`+res.data[0].Profile_Picture)
          // console.log(res.data[0])
          // console.log(data)
          
          // console.log(res.data.length)
        })
        .catch(err =>console.log(err))
    },[])


    const handleUpload =()=>{
        const formData = new FormData();
        formData.append('image',file);
        formData.append('UserName',UserName)
        // console.log(file)
        axios.post('http://localhost:3000/uploadImage',formData)
        .then(res =>{
          if(res.data.message === "Image uploaded successfully."){
            console.log("succeded")
            alert("Uploaded")
          }
          else{
            console.log("failed")
            alert("failed to upload")
          }

        })
        .catch(err => console.log("error",err));
    }

  return (
    <div >
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload}>Upload</button>
      <h1> Hello! {UserName}</h1>
      {}
      <img src={data} alt="not able to load" style={{height:"300px"}}/>
    </div>
  )
}

export default UploadImage
