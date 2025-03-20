import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";
import Navbar from "../Navbar";
import "../../Styling/settings.css";

const Settings = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [userBusinesses, setUserBusinesses] = useState([]); // Ensure it's always an array
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
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
        
        // Ensure `businesses` field exists and is an array
        const businesses = Array.isArray(decodedToken.businesses) ? decodedToken.businesses : [];
        setUserBusinesses(businesses);
        setIsOwner(decodedToken.role === "owner");

        // Automatically select first business if available
        if (businesses.length > 0) {
          setSelectedBusiness(businesses[0]);
        }
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
        <SettingsSidebar
          categories={["Edit Business Profile", "Add New Products", "Edit Current Products", "Employee Management", "Edit Profile"]}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          userBusinesses={userBusinesses} // Pass as array
          selectedBusiness={selectedBusiness}
          setSelectedBusiness={setSelectedBusiness}
        />
        <SettingsContent
          selectedCategory={selectedCategory}
          selectedBusiness={selectedBusiness}
        />
      </div>
    </div>
  );
};

export default Settings;
