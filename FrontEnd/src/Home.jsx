import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Post from './UpdateComponent';
import Posts from './Posts';

function Home() {
  return (
    <div >
      HOME madu
      <div>
        
      <Link to="/MessagePage">Message</Link>
      </div>
      <Link to="/Home">Home</Link>
      <Link to="/Explore">Explore</Link>
      <Link to="/Notification">Notification</Link>
      <Link to="/ProfilePage">Profile</Link>

      {Posts.map((e) => {
          return (
            <Post comments={e.comments} likes={e.likes} />
          );
        })}
      <div id='homepage' >
      </div>
    </div>
  )
}

export default Home
