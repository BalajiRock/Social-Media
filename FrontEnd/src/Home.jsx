import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, Outlet, useLocation } from 'react-router-dom'
import {Button, Breadcrumb, Card, Form, Container, Row, Col, Image,Nav,Navbar, Tab, Tabs, NavItem} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
	const location = useLocation();
	var color = "Primary"
	const [data, setdata] = useState([]);
	const [likes, setLikes] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:3000/GetPosts')
			.then(res => {
				setdata(res.data)
			})
			.catch(err => console.log(err))

	}, [])
	useEffect(() => {
		console.log("called")
		axios.get('http://localhost:3000/Getlikes')
			.then(res => {
				setLikes(res.data[0])
			})
			.catch(err => console.log(err))
		console.log("ended")

	}, [])
	var liked = true
	const addLike = (e) => {
		if (liked == true) {
			axios.post('http://localhost:3000/RemoveLike', [e.target.name, location.state.name])
				.catch(err => console.log(err));
			liked = false
			color = "danger"
		}
		else {
			axios.post('http://localhost:3000/AddLike', [e.target.name, location.state.name])
			.then(res => alert("Liked"))
			.catch(err => console.log(err));
			liked = true
			color = "primary"
		}
	}

	return (
		<div >
			<header className="App-header">
			HOME madu
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

			<div></div>
			{/* <h2>Hello! {location.state.name} </h2> */}
			<ul>
				{data.map((value, index) => (
					<div>
						{console.log(value)}
						<h3>{value.user_Name}</h3>
						{<img src={`http://localhost:3000/images/` + value.Post} alt="not able to load" style={{ height: "300px", width: "300px" }} />}
						<div style={{display:"flex"}}>

						<Button name={value.postid} value={value.postid} onClick={addLike} style={{color:color}} >
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
						</Button><h5 style={{padding:"8px",paddingLeft:"20px"}}>{likes.map((like) => {

							if (like.postid == value.postid)
							return (like.like_count)
						else {
							return ''
						}
						
					})}</h5>
					</div>
					</div>
				))}
			</ul>
			</header>
		</div>
	)
}

export default Home
