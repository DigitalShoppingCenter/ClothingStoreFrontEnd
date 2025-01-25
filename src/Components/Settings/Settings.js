import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Ensure you have this installed: npm install jwt-decode
import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";
import Navbar from "../../Components/Navbar";
import "../../Styling/settings.css"; // Corrected the import name

const Settings = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [isOwner, setIsOwner] = useState(false);
  const [userBusinesses, setUserBusinesses] = useState([]);
  const navigate = useNavigate();

  const categories = [
    "Business",
    "Clothing Items",
    "Employee Management",
    "Notifications",
    "Audit and Logs",
    "Preferences",
    "Edit Profile",
  ];

  useEffect(() => {
    const validateUser = () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login"); // Redirect to login if no token
          return;
        }

        const decodedToken = jwtDecode(token);

        // Check if the user is an owner
        if (decodedToken.role !== "owner") {
          navigate("/unauthorized"); // Redirect if not an owner
          return;
        }

        // Set user businesses for further validation in SettingsContent
        setUserBusinesses(decodedToken.businesses || []);
        setIsOwner(true); // Grant access
      } catch (error) {
        console.error("Error validating user:", error);
        navigate("/login"); // Redirect to login on any error
      }
    };

    validateUser();
  }, [navigate]);

  if (!isOwner) {
    return <p>Validating access...</p>; // Display a loading message during validation
  }

  return (
    <div>
      <Navbar /> <br />
      <div className="settings-container">
        <SettingsSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <SettingsContent
          selectedCategory={selectedCategory}
          userBusinesses={userBusinesses}
        />
      </div>
    </div>
  );
};

export default Settings;
