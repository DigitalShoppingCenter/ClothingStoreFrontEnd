import React, { useState, useEffect } from "react";
import ProfileView from "./ProfileView";
import ProfileEdit from "./UserUpdate";
import usersDB from "../Mock_DataBase/Front_Database";
import "../Styling/userprofile.css";

const ProfilePage = ({ loggedInUserId = 1 }) => {
  const [userData, setUserData] = useState(null); // User data
  const [isEditing, setIsEditing] = useState(false); // Editing mode state

  useEffect(() => {
    // Fetch user from mock database
    const user = usersDB.find((user) => user.id === loggedInUserId);
    if (user) setUserData(user);
  }, [loggedInUserId]);

  const handleSave = (updatedData) => {
    setUserData(updatedData); // Update state with new data
    setIsEditing(false); // Exit editing mode
    console.log("Saved user data:", updatedData);
  };

  const handleEdit = () => setIsEditing(true); // Switch to editing mode
  const handleCancel = () => setIsEditing(false); // Exit editing mode

  if (!userData) return <div>Loading user profile...</div>;

  return (
    <div className="profile-page-container">
      {isEditing ? (
        <ProfileEdit
          userData={userData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <ProfileView userData={userData} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default ProfilePage;
