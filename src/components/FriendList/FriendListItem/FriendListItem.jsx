import React from "react";
import "./FriendListItem.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="friend-item">
      <img src={avatar} alt={`${name}'s Avatar`} width="48" />
      <p className="friend-name">{name}</p>
      <p className={`friend-status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
