import React from "react";
import './Profile.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="container">
      <div className="profile-main-info">
        <img
        className="profile-avatar"
          src={image || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
          alt="User avatar"
        />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-status-list">
        <li className="profile-status-item">
          <span className="profile-status-title">Followers</span>
          <span className="profile-status-info">{stats.followers}</span>
        </li>
        <li className="profile-status-item">
          <span className="profile-status-title">Views</span>
          <span className="profile-status-info">{stats.views}</span>
        </li>
        <li className="profile-status-item">
          <span className="profile-status-title">Likes</span>
          <span className="profile-status-info">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
