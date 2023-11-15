import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <div>

        <Link to="/MessagePage">Message</Link>
      </div>
      <Link to="/Home">Home</Link>
      <Link to="/Explore">Explore</Link>
      <Link to="/Notification">Notification</Link>
      <Link to="/ProfilePage">Profile</Link>
      
    </div>
  )
}

export default Navbar
