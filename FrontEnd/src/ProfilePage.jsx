import {Link,useLocation} from 'react-router-dom'
import UploadImage from './UploadImage'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Button, Breadcrumb, Card, Form, Container, Row, Col, Image,Nav,Navbar, Tab, Tabs, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfilePage(props) {
  const location = useLocation();
  const [file,setfile] = useState();
  const [data,setdata] = useState([]);
  const [userInfo,setUserInfo] = useState([])
  const [userposts,setUserPosts] = useState([]);
  // const []
  const [UserDetails, setUserDetails] = useState({
    Bio: '',
    Location: '',
    Education:'',
    UserName:location.state.name

})
const handleInput = (event)=>{
  setUserDetails(prev=>({...prev,[event.target.name]:[event.target.value]}))  
}
  const handleFile = (e) =>{
      setfile(e.target.files[0])
    }
  console.log(location)
  

  const handlePost =()=>{
    const formData = new FormData();
    formData.append('image',file);
    formData.append('UserName',location.state.name)
    axios.post('http://localhost:3000/PostImage',formData)
    .then(res =>{
      if(res.data.message === "Image uploaded successfully."){
        console.log("succeded")
        alert("posted")
        alert("uploaded")
      }
      else{
        console.log("failed")
        alert("failed to Post")
      }

    })
    .catch(err => console.log("error",err));
}

const handleSubmit =(event)=>{
  event.preventDefault();
  axios.post('http://localhost:3000/Biodetails',UserDetails)
  .then(res =>alert("Details uploaded"))
  .catch(err => console.log(err));
}

useEffect(()=>{
  axios.post('http://localhost:3000/GetUserPosts',location.state.name)
  .then(res => {
    setUserPosts(res.data)
  })
  .catch(err =>console.log(err))
},[])
useEffect(()=>{
  axios.post('http://localhost:3000/GetUserinfo',location.state.name)
  .then(res => {
    setUserInfo(res.data[0])
  })
  .catch(err =>console.log(err))
},[])

  
  return (
    <div>
      <header className="App-header">
      <div>
      Profile Page
      <Nav className="me-auto" variant="tabs" defaultActiveKey="/Home">
			
			<Nav.Item>
			<Link to={'/Home'} style={{position:"relative",padding:"20px",textDecoration:"None"}}  state={{ name: location.state.name, }}>Home</Link>
			</Nav.Item>
			<Nav.Item>
			<Link to={'/Explore'} style={{position:"relative",padding:"20px",textDecoration:"None"}}  state={{ name: location.state.name, }}>Explore</Link>
			</Nav.Item>
			<Nav.Item>
			<Link to={'/Notification'} style={{position:"relative",padding:"20px",textDecoration:"None"}}  state={{ name: location.state.name, }}>Notification</Link>
			</Nav.Item>
			<Nav.Item>
			<Link to={'/ProfilePage'} style={{position:"relative",padding:"20px",textDecoration:"None"}}  state={{ name: location.state.name, }}>My Profile</Link>
			</Nav.Item>
			<Nav.Item>
			<Link to={'/MessagePage'} style={{position:"relative",paddingLeft:"670px",textDecoration:"None"}}  state={{ name: location.state.name, }}>Message</Link>
			</Nav.Item>
      <Button style={{backgroundColor:"white",paddingInline:"20px",marginInline:"20px"}}>

			<Nav.Item>
			<Link to={'/'} style={{position:"relative",padding:"20px",textDecoration:"None"}}  state={{ name: location.state.name, }}>Logout</Link>
			</Nav.Item>
      </Button>
			</Nav> 


      <h2>Hello! {location.state.name} </h2>
      </div>
<UploadImage UserName={location.state.name}/>
<div>Bio : {userInfo.Bio}</div>
<div>Education : {userInfo.Education}</div>
<div>Location : {userInfo.Location}</div>

    <input type="text" name='Bio' value={UserDetails.Bio} onChange={handleInput} placeholder='Bio' style={{margin:"7px",borderRadius:"8px"}} />
    <input type="text" name='Education' value={UserDetails.Education} onChange={handleInput} placeholder='Education' style={{margin:"7px",borderRadius:"8px"}} />
    <input type="text" name='Location' value={UserDetails.Location} onChange={handleInput} placeholder='Location' style={{margin:"7px",borderRadius:"8px"}} />
    <Button onClick={handleSubmit}>Upload details</Button>
    <input type="file" onChange={handleFile} style={{margin:"7px",borderRadius:"8px"}} />
    <Button onClick={handlePost}>Post</Button>
    {userposts.map((value, index) => (
            <div>
            {<img src={`http://localhost:3000/images/`+value.Post} alt="not able to load" style={{height:"300px" ,width:"300px"}}/>}
            {console.log("VALUES",value.PostId)}
            </div>
          ))}
          </header>
    </div>
  )
}

export default ProfilePage


// class ProfilePage extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   likes: props.likes,
//     //   comments: props.comments,
//     //   liked : false
//     //   // post :
//     // };
//   }
//   handleFile = () =>{
//             // setfile(e.target.files[0])
//             console.log("Upload madu")
//         }
//   handleUpload =()=>{
//             console.log("Upload madu")
//         }

//   UploadMadu = () =>{
//     <>
//     console.log("called madu")
//     {/* // <UploadImage/> */}
//     </>
//   }      
//   render() {
//     return (
//       <div>
//             <div>
//             Profile Page
//             <Link to="/Home">Home</Link>
//             <Link to="/Explore">Explore</Link>
//             <Link to="/Notification">Notification</Link>
//             <Link to="/ProfilePage">Profile</Link>
//             </div>
//             <div className="profile">
//               profile Image 
//               bio 
//             </div>
//             <Button onClick={this.UploadMadu}>Upload Profile Picture</Button>
//         </div>
       
//         );
//   }
// }
// export default ProfilePage;
