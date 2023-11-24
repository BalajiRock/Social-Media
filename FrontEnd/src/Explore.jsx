import {Link,useLocation} from 'react-router-dom'
import React, { useEffect,useState } from 'react'
import axios from 'axios';


function Explore() {
const [data,setdata] = useState([]);
useEffect(()=>{
    console.log("called")
    axios.get('http://localhost:3000/GetAllPosts')
    .then(res => {
      setdata(res.data)
      console.log(res.data[0])
      console.log(res.data.length)
      console.log(data)
    })
    .catch(err =>console.log(err))
},[])


  const location = useLocation();
  console.log(location.state)
  return (
    <div>
      Explore
      {/* <Link 
   to={'/Home'}  
   state={{id: 1, name: location., shirt: 'green'}}>Home</Link> */}
      <Link to="/Explore">Explore</Link>
      <Link to="/Notification">Notification</Link>
      <Link to="/ProfilePage">Profile</Link>
      <h1></h1>
      <ul>
          {data.map((value, index) => (
            <div>
              <h3>{value.user_Name}</h3>
            {<img src={`http://localhost:3000/images/`+value.Post} alt="not able to load" style={{height:"300px" ,width:"300px"}}/>}
            <button>like</button>
            {console.log("VALUES",value.PostId)}
              {/* <Post comments={"e.comments"} likes={10}    /> */}
            </div>
          ))}
          </ul>

    </div>
  )
}

export default Explore
