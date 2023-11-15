import React from 'react'
import {Link} from 'react-router-dom'

function Notification() {
  return (
    <div>
        Notification
      <Link to="/Home">Home</Link>
      <Link to="/Explore">Explore</Link>
      <Link to="/Notification">Notification</Link>
      <Link to="/ProfilePage">Profile</Link>
    </div>
  )
}

export default Notification
