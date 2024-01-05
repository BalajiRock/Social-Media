import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Button, Breadcrumb, Card, Form, Container, Row, Col, Image,Nav,Navbar, Tab, Tabs, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




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
    <div style={{paddingTop:0,margin:0,height:"300px",width:"1000px"}}  >
    <header className="App-header" style={{paddingTop:0,margin:0}}>
      <input type="file" onChange={handleFile} style={{borderRadius:"10px"}}/>
    <div style={{ height:"600px",borderRadius:"20px",padding:0, margin:0}} >
      <Button onClick={handleUpload}>Upload</Button>
    <Card className ="mb-3" style={{color: "#000", alignSelf:"right"}}>
    <img src={data} alt="not able to load" style={{width:"150px", height:"150px",borderRadius:"20px",}}/>
         </Card>
    </div>

      
    </header>
    </div>
  )
}

export default UploadImage
