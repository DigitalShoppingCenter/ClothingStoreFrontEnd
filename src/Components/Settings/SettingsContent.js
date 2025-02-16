import React from "react";
import { BusinessGeneral } from "../BusinessGeneral";
import { BusinessProfile } from "../BusinessProfile";
import { BusinessProducts } from "../BusinessProducts";
import { BusinessEmployees } from "../BusinessEmployees";

const SettingsContent = ({ selectedCategory, userBusinesses }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "Business":
        return <BusinessGeneral />;
      case "Clothing Items":
        return <BusinessProducts />;
      case "Employee Management":
        return <BusinessEmployees />;
      case "Notifications":
        return <div>Notification Preferences</div>;
      case "Audit and Logs":
        return <div>Activity Logs</div>;
      case "Preferences":
        return <div>Application Preferences</div>;
      case "Edit Profile":
        return <BusinessProfile />;
      default:
        return <div>Select a category</div>;
    }
  };

  return (
    <div className="settings-content">
      {renderContent()}
    </div>
  );
};

export default SettingsContent;
