import React from 'react'
import {Link} from 'react-router-dom'
import FriendsList from './GetFriends';
import Friend from './UpdateFriends';

function MessagePage() {
  return (
    <div>
        Message Page
        <div>
            <Link to='/Home' >back</Link>
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
