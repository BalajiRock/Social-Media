import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Post from './UpdateComponent';
import Posts from './Posts';
import {Button, Breadcrumb, Card, Form, Container, Row, Col, Image,Nav,Navbar, Tab, Tabs, NavItem} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notification() {
  const location = useLocation()
  return (
    <div>
      <header className='App-header'>
      <Container fluid>
      Notification
      
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

      

      </Container>
      <h1 style={{height:"600px"}}> No new notifications have been received </h1>
      
      </header>
    </div>
  )
}

export default Notification
