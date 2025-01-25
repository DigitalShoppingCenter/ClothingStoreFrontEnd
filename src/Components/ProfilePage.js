// ProfilePage.js
import React, { useState, useEffect } from "react";
import usersDB from "../Mock_DataBase/Front_Database";
import "../Styling/profilepage.css";
import UserDashboard from "./UserDashboard";


const ProfilePage = ({ loggedInUserId = 1 }) => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // Active tab state
  const [activities, setActivities] = useState([]); // Activity logs state
  const [lastSeen, setLastSeen] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    // Mock fetch user data
    const user = usersDB.find((user) => user.id === loggedInUserId);
    if (user) {
      setUserData(user);
    }

    // Mock fetch activity logs
    const mockActivities = [
      "Updated bio",
      "Changed profile picture",
      "Updated email",
      "Changed password"
    ];
    setActivities(mockActivities);

    // Mock online status and last seen
    setIsOnline(true);
    setLastSeen(new Date().toLocaleString());

    // Mock time spent on profile
    const interval = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 60000); // Increment every minute

    return () => clearInterval(interval);
  }, [loggedInUserId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={userData.profileImage || "/Assets/default_avatar.png"}/>
        </div>
        <div className="profile-info">
          <h1>{userData.username}</h1>
          <p>{userData.bio || "No bio available"}</p>
          <p><strong>Role:</strong> {userData.role}</p>
          <p><strong>Status:</strong> {isOnline ? "Online" : `Last seen: ${lastSeen}`}</p>
          <p><strong>Time spent on profile:</strong> {timeSpent} minutes</p>
        </div>
      </div>

      <div className="profile-tabs">
        <button className={activeTab === "overview" ? "active" : ""} onClick={() => handleTabChange("overview")}>Overview</button>
        <button className={activeTab === "logs" ? "active" : ""} onClick={() => handleTabChange("logs")}>Activity Logs</button>
      </div>

      <div className="profile-content">
        {activeTab === "overview" && <UserDashboard userData={userData} />}
        {activeTab === "logs" && (
          <div>
            <h2>Activity Logs</h2>
            <ul>
              {activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
