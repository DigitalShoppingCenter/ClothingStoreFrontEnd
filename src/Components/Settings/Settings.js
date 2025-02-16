import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";
import Navbar from "../Navbar";
import "../../Styling/settings.css"

const Settings = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [isOwner, setIsOwner] = useState(false);
  const [userBusinesses, setUserBusinesses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const validateUser = () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        const decodedToken = jwtDecode(token);
        if (decodedToken.role !== "owner") {
          navigate("/unauthorized");
          return;
        }
        setUserBusinesses(decodedToken.businesses || []);
        setIsOwner(true);
      } catch (error) {
        console.error("Error validating user:", error);
        navigate("/login");
      }
    };
    validateUser();
  }, [navigate]);

  return (
    <div className="settings-layout">
      <Navbar />
      <div className="settings-wrapper">
        <SettingsSidebar categories={['Business', 'Clothing Items', 'Employee Management', 'Notifications', 'Audit and Logs', 'Preferences', 'Edit Profile']}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <SettingsContent selectedCategory={selectedCategory} userBusinesses={userBusinesses} />
      </div>
    </div>
  );
};

export default Settings;
