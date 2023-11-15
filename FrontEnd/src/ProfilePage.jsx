import React from 'react'
import {Link} from 'react-router-dom'

function ProfilePage() {
  return (
    <div>
      <div>
      Profile Page
      <Link to="/Home">Home</Link>
      <Link to="/Explore">Explore</Link>
      <Link to="/Notification">Notification</Link>
      <Link to="/ProfilePage">Profile</Link>
      </div>
      <div className="profile">
        profile Image 
        bio 
      </div>

    </div>
  )
}

export default ProfilePage
