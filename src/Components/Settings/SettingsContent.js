import React from "react";
import UserUpdate from '../../Components/UserUpdate';

const SettingsContent = ({ selectedCategory }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "General":
        return <div>General Settings Form or Toggles</div>;
      case "Business":
        return <div>Manage your Business Settings here</div>;
      case "Clothing Items":
        return <div>Adjust Clothing Items Settings</div>;
      case "Employee Management":
        return <div>Manage Employee Settings</div>;
      case "Change Management":
        return <div>View and Approve Proposed Changes</div>;
      case "Notifications":
        return <div>Notification Preferences and Triggers</div>;
      case "Audit and Logs":
        return <div>Activity Logs and Audit Settings</div>;
      case "Preferences":
        return <div>Application Preferences (Theme, Timezone, etc.)</div>;
      case "Edit Profile":
        return <div><UserUpdate /></div>  
      default:
        return <div>Select a category to view settings</div>;
    }
  };

  return <div className="settings-content">{renderContent()}</div>;
};

export default SettingsContent;
