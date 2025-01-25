import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "../Styling/userdashboard.css";

const UserDashboard = ({ loggedInUserId = 1 }) => {
  const [profileUpdates, setProfileUpdates] = useState([]);
  const [profileVisits, setProfileVisits] = useState([]);
  const [activityCounts, setActivityCounts] = useState({ edits: 0, posts: 0, interactions: 0 });
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    // Mock fetch profile updates
    setProfileUpdates([
      { date: "2025-01-01", description: "Updated bio" },
      { date: "2025-01-02", description: "Changed profile picture" },
      { date: "2025-01-03", description: "Updated email" }
    ]);

    // Mock fetch profile visits
    setProfileVisits([
      { date: "2025-01-01", count: 5 },
      { date: "2025-01-02", count: 8 },
      { date: "2025-01-03", count: 6 },
      { date: "2025-01-04", count: 10 },
      { date: "2025-01-05", count: 12 }
    ]);

    // Mock activity counts
    setActivityCounts({ edits: 5, posts: 10, interactions: 15 });

    // Mock time spent on profile
    setTimeSpent(120); // 120 minutes
  }, [loggedInUserId]);

  const profileVisitsData = {
    labels: profileVisits.map((visit) => visit.date),
    datasets: [
      {
        label: "Profile Visits",
        data: profileVisits.map((visit) => visit.count),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }
    ]
  };

  const activityCountsData = {
    labels: ["Edits", "Posts", "Interactions"],
    datasets: [
      {
        data: [activityCounts.edits, activityCounts.posts, activityCounts.interactions],
        backgroundColor: ["#4CAF50", "#FF6384", "#36A2EB"]
      }
    ]
  };

  return (
    <div className="user-dashboard-container">
      <h1>User Dashboard</h1>

      <div className="dashboard-summary">
        <div className="summary-item">
          <h3>Total Time Spent</h3>
          <p>{timeSpent} minutes</p>
        </div>
        <div className="summary-item">
          <h3>Total Posts</h3>
          <p>{activityCounts.posts}</p>
        </div>
        <div className="summary-item">
          <h3>Total Interactions</h3>
          <p>{activityCounts.interactions}</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-item">
          <h3>Profile Visits (Last 14 Days)</h3>
          <Line data={profileVisitsData} />
        </div>

        <div className="chart-item">
          <h3>Activity Counts</h3>
          <Pie data={activityCountsData} />
        </div>
      </div>

      <div className="recent-updates">
        <h3>Recent Profile Updates</h3>
        <ul>
          {profileUpdates.map((update, index) => (
            <li key={index}>{`${update.date}: ${update.description}`}</li>
          ))}
        </ul>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/profile">View Profile</a></li>
          <li><a href="/settings">Edit Profile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;