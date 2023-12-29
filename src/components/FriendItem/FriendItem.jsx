import React from 'react'
import './FriendItem.css'

const FriendItem = ({avatar, name, isOnline}) => {
  return (
    <li className="item-friend">
    <span className={isOnline}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
    </li>
  )
}

export {FriendItem};