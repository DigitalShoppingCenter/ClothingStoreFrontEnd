import React, { useState, useEffect } from "react";
import usersDB from "../Mock_DataBase/Front_Database";
import "../Styling/profilepage.css";
import UserDashboard from "../Components/UserDashboard";
import Navbar from "../Components/Navbar"; // Make sure the path is correct

const ProfilePage = ({ loggedInUserId = 1 }) => {
  const [userData, setUserData] = useState(null);
  const [lastSeen, setLastSeen] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const user = usersDB.find(user => user.id === loggedInUserId);
    if (user) {
      setUserData(user);
      setLastSeen(new Date().toLocaleString());
    }

    const interval = setInterval(() => {
      setTimeSpent(prevTime => prevTime + 1);
    }, 60000); // Increment every minute

    return () => clearInterval(interval);
  }, [loggedInUserId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar />
    <div className="profile-page-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={userData.profileImage || "/Assets/default_avatar.png"} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>{userData.username}</h1>
          <p>{userData.bio || "No bio available"}</p>
          <p><strong>Role:</strong> {userData.role}</p>
          <p><strong>Last Seen:</strong> {lastSeen}</p>
          <p><strong>Time Spent on Profile:</strong> {timeSpent} minutes</p>
        </div>
      </div>
      <UserDashboard userData={userData} />
    </div>
    </div>
  );
};

export default ProfilePage;
