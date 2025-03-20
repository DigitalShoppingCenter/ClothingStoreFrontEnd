import React from 'react';
import "../Styling/userdashboard.css"; // Ensure CSS is updated for new elements

const UserDashboard = ({ userData, onEditProfile,}) => {

  const activities = userData.activityLog?.slice(-5).reverse() || [];

  return (
    <div className="user-dashboard">
      <h3>Welcome, {userData.name}</h3>
      <div className="dashboard-actions">
        <button onClick={onEditProfile}><a href='http://localhost:3000/profile-settings'>Edit Profile</a></button>
      </div>
      <div className="activities-section">
        <h4>Recent Activities</h4>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity.description} - {new Date(activity.timestamp).toLocaleString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
