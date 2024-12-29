import React, { useState, useEffect } from "react";
import usersDB from "../Mock_DataBase/Front_Database";
import "../Styling/profilepage.css";

const ProfilePage = ({ loggedInUserId = 1 }) => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(""); // Bio state
  const [profileImage, setProfileImage] = useState(null); // Profile Picture state

  useEffect(() => {
    const user = usersDB.find((user) => user.id === loggedInUserId);
    if (user) {
      setUserData(user);
      setBio(user.bio || "Add a short bio here...");
      setProfileImage(user.profileImage || "/Assets/default_avatar.png");
    }
  }, [loggedInUserId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSave = () => {
    const updatedUser = { ...userData, bio, profileImage };
    console.log("Updated User:", updatedUser);
    setUserData(updatedUser);
    setIsEditing(false);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page-container">
      {/* Header Section */}
      <div className="profile-header">
        <label htmlFor="profile-pic-upload" className="profile-pic-label">
          <img src={profileImage} alt="Profile" className="profile-picture" />
          <input
            type="file"
            id="profile-pic-upload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </label>
        <div className="profile-info">
          <h1>{userData.username}</h1>
          <p>{userData.role}</p>
          <textarea
            value={bio}
            onChange={handleBioChange}
            className="profile-bio"
            placeholder="Write your bio here..."
          />
          {isEditing && (
            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      </div>


      {/* Tabs Section */}
      <div className="profile-tabs">
        <button>Posts</button>
        <button>Activity Logs</button>
      </div>

      {/* Example Content */}
      <div className="profile-content">
        <p>Your recent posts or activities will appear here.</p>
      </div>
    </div>
  );
};

export default ProfilePage;
