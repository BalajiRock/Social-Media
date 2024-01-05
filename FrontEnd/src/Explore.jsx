import {Link,useLocation} from 'react-router-dom'
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {Button, Breadcrumb, Card, Form, Container, Row, Col, Image,Nav,Navbar, Tab, Tabs, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
  return (
    <div>
      <header className="App-header">
			Explore madu
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


      <ul>
       
          {data.map((value, index) => (
            
              <div>
            <Row>



                  <div style={{padding:"20px",display:"-ms-flexbox",flex:"row"}}>

              <h3>{data[(index)%data.length].user_Name}</h3>
            {<img src={`http://localhost:3000/images/`+data[(index)%data.length].Post} alt="not able to load" style={{height:"300px" ,width:"300px",padding:"20px"}}/> }
              </div>
            <div>

              <h3>{data[(index+6)%data.length].user_Name}</h3>
            {<img src={`http://localhost:3000/images/`+data[(index+6)%data.length].Post} alt="not able to load" style={{height:"300px" ,width:"300px",padding:"20px"}}/> }
            </div>
            <div>

              <h3>{data[(index+3)%data.length].user_Name}</h3>
            {<img src={`http://localhost:3000/images/`+data[(index+3)%data.length].Post} alt="not able to load" style={{height:"300px" ,width:"300px",padding:"20px"}}/> }
            </div>



            </Row>
              </div>
          ))}
          
          </ul>
          </header>
    </div>
  )
}

export default Explore
