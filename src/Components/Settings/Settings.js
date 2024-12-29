import React, { useState } from "react";
import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";
import SetttingsStyle from '../../Styling/settings.css';
import Navbar from "../../Components/Navbar";

const Settings = () => {
  const [selectedCategory, setSelectedCategory] = useState("General");

  const categories = [
    "General",
    "Business",
    "Clothing Items",
    "Employee Management",
    "Change Management",
    "Notifications",
    "Audit and Logs",
    "Preferences",
    "Edit Profile",
  ];

  return (
    <div>
        <Navbar /> <br></br>
    <div className="settings-container">
      <SettingsSidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <SettingsContent selectedCategory={selectedCategory} />
    </div>
    </div>
  );
};

export default Settings;
