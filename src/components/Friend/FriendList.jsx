import React from 'react'
import './FriendList.css'
import { FriendItem } from 'components/FriendItem/FriendItem';

const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
        {friends.map(friend => (
          
            <FriendItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline.toString()}
            />
          
        ))}
    </ul>
  )
}

export {FriendList}