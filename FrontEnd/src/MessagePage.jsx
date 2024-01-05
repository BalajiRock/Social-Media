import React from 'react'
import {Link} from 'react-router-dom'
import FriendsList from './GetFriends';
import Friend from './UpdateFriends';
import { useLocation } from 'react-router-dom';
function MessagePage() {
  const location = useLocation()
  return (
    <div>
        Message Page
        <div>
        <Link to={'/Home'} state={{ name: location.state.name, }}>Home</Link>
        </div>
        {FriendsList.map((e) => {
          return (
            <Friend UserID={e.UserID}  />
          );
        })}
    </div>
  )
}

export default MessagePage
