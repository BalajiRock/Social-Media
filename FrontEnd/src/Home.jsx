import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {Link, Outlet,useLocation} from 'react-router-dom'
import Post from './UpdateComponent';
import Posts from './Posts';
function Home() {
  const location = useLocation();
  console.log(location.state)
//   const [posts,setposts] = useState([]);
  
  
  
//   useEffect(()=>{
//     console.log("called")
//     axios.get('http://localhost:3000/GetPosts')
//     .then(res => {
//       setposts([...posts, res.data])
//       // for (var i =0 ;i<res.data.length;i++)
//       // {
//       //   setposts([...posts, res.data[i]])
//       // }
//       // console.log(res.data)
//         console.log(res.data,posts)
//       // setTimeout(()=>{

//       // },3000)
//     })
//     .catch(err =>console.log(err))
// },[])


const [data,setdata] = useState([]);
const [likes,setLikes] = useState([

]);
var obj
// const handleFile = (e) =>{
//     setfile(e.target.files[0])
//   }
// const UserName  = props.UserName
useEffect(()=>{
    console.log("called")
    axios.get('http://localhost:3000/GetPosts')
    .then(res => {
      setdata(res.data)
      console.log(res.data[0])
      console.log(res.data.length)
      console.log(data)
    })
    .catch(err =>console.log(err))
    
},[])
useEffect(()=>{
    console.log("called")
    axios.get('http://localhost:3000/Getlikes')
    .then(res => {
      // setLikes(res.data[0])

      console.log("result ::::::::::::::::::::::::::::::",res.data[0])
      // console.log(res.data.length)
      // console.log(data)
    })
    .catch(err =>console.log(err))
    console.log("ended")
    
},[])
var liked = false
const addLike=(e)=>{
  console.log("called")
console.log(e.target.name)
if (liked == true)
{
  axios.post('http://localhost:3000/RemoveLike',[e.target.name,location.state.name])
  .then(res =>alert("Details uploaded"))
  .catch(err => console.log(err));
  liked = false
}
else{
  console.log(e.target.name)

  axios.post('http://localhost:3000/AddLike',[e.target.name,location.state.name])
  .then(res =>alert("Details uploaded"))
  .catch(err => console.log(err));
  liked = true
}


}

  
  return (
    <div >
      HOME madu
      <div>
        <h1>scam:{obj}</h1>
      <Link to="/MessagePage">Message</Link>
      </div>
      <Link to="/Home">Home</Link>
      <Link to="/Explore">Explore</Link>
      <Link to={'/Notification'} state={{id: 1, name: location.state.name, shirt: 'green'}}>Notification</Link>
      {/* <Link to="/ProfilePage">Profile</Link> */}
      {/* <Link to={'/ProfilePage'} state= {}}} >Profile</Link> */}
      <Link 
   to={'/ProfilePage'}  
   state={{id: 1, name: location.state.name, shirt: 'green'}}>My Profile</Link>
      <div></div>
      <h2>Hello! {location.state.name} </h2>


        {console.log(data)}

          <ul>
          {data.map((value, index) => (
            <div>
              {console.log(value)}
              <h3>{value.user_Name}</h3>
            {<img src={`http://localhost:3000/images/`+value.Post} alt="not able to load" style={{height:"300px" ,width:"300px"}}/>}
              <button name={value.postid} value={value.postid} onClick={addLike}>Like</button>:{likes}
            {/* {console.log("VALUES",value.PostId)} */}
              {/* <Post comments={"e.comments"} likes={10}    /> */}
            </div>
          ))}
          </ul>

        {/* // })} */}
      <div id='homepage' >
      </div>
    </div>
  )
}

export default Home
