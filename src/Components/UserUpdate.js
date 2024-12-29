import React, { useState } from "react";
import Navbar from '../Components/Navbar';
import "../Styling/userprofile.css";

const ProfileEdit = ({ userData, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState({
    username: userData.username,
    password: userData.password,
    bio: userData.bio || "", // Add bio to the editable data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <div>
      <Navbar />
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <div className="profile-details">
        {/* Editable Username */}
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={editedData.username}
          onChange={handleChange}
          className="profile-input"
        />

        {/* Editable Password */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={editedData.password}
          onChange={handleChange}
          className="profile-input"
        />

        {/* Editable Bio */}
        <label>Bio:</label>
        <textarea
          name="bio"
          value={editedData.bio}
          onChange={handleChange}
          className="profile-textarea"
        />

        {/* Non-Editable Role */}
        <label>Role:</label>
        <p>{userData.role}</p>
      </div>

      <div className="profile-actions">
        <button className="save-button" onClick={() => onSave(editedData)}>
          Save
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProfileEdit;
