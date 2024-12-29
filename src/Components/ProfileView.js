import React from "react";
import "../Styling/userprofile.css";

const ProfileView = ({ userData, onEdit }) => {
  return (
    <div className="profile-view-container">
      <h2>Your Profile</h2>
      <div className="profile-details">
        <div>
          <label>Username:</label>
          <p>{userData.username}</p>
        </div>
        <div>
          <label>Password:</label>
          <p>*******</p> {/* Password is hidden */}
        </div>
        <div>
          <label>Role:</label>
          <p>{userData.role}</p>
        </div>
        <div>
          <label>Bio:</label>
          <p>{userData.bio || "No bio available"}</p>
        </div>
      </div>

      <div className="profile-actions">
        <button className="edit-button" onClick={onEdit}>
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
