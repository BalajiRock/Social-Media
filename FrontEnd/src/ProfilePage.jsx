import {Link,useLocation} from 'react-router-dom'
import UploadImage from './UploadImage'
import React, { useState,useEffect } from 'react'
import axios from 'axios';
// import {} from 'react-router-dom';




function ProfilePage(props) {
  const location = useLocation();


  const [file,setfile] = useState();
  const [data,setdata] = useState([]);
  const [userposts,setUserPosts] = useState([]);
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
    // console.log(file)
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
  // setError(validation(values));
  axios.post('http://localhost:3000/Biodetails',UserDetails)
  .then(res =>alert("Details uploaded"))
  .catch(err => console.log(err));
}

useEffect(()=>{
  axios.post('http://localhost:3000/GetUserPosts',location.state.name)
  .then(res => {
      console.log("res==================",res.data)
      setUserPosts(res.data)
      console.log(res.data[0])
      console.log(data)
      
      console.log(res.data.length)
    })
    .catch(err =>console.log(err))
},[])

  
  return (
    <div>
      <div>
      <h2>Hello! {location.state.name} </h2>
      Profile Page
      <Link 
   to={'/Home'}  
   state={{id: 1, name: location.state.name, shirt: 'green'}}>Home</Link>
      <Link to="/Explore">Explore</Link>
      <Link to="/Notification">Notification</Link>
      <Link to="/ProfilePage">Profile</Link>
      </div>
      <div className="profile">
        profile Image 
        bio 
      </div>
      {/* <button onClick={handleClick}>Upload Profile Picture</button> */}
<UploadImage UserName={location.state.name}/>

    <input type="text" name='Bio' value={UserDetails.Bio} onChange={handleInput} placeholder='Bio' />
    <input type="text" name='Education' value={UserDetails.Education} onChange={handleInput} placeholder='Education' />
    <input type="text" name='Location' value={UserDetails.Location} onChange={handleInput} placeholder='Location' />
    <button onClick={handleSubmit}>Upload details</button>
    <input type="file" onChange={handleFile}/>
    <button onClick={handlePost}>Post</button>
    {userposts.map((value, index) => (
            <div>
            {<img src={`http://localhost:3000/images/`+value.Post} alt="not able to load" style={{height:"300px" ,width:"300px"}}/>}
            {console.log("VALUES",value.PostId)}
              {/* <Post comments={"e.comments"} likes={10}    /> */}
            </div>
          ))}
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
//             <button onClick={this.UploadMadu}>Upload Profile Picture</button>
//         </div>
       
//         );
//   }
// }
// export default ProfilePage;
