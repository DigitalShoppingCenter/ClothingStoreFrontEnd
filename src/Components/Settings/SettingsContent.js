import React from "react";
import { BusinessGeneral } from "../BusinessGeneral";
import { BusinessProfile } from "../BusinessProfile";
import { BusinessProducts } from "../BusinessProducts";
import { BusinessEmployees } from "../BusinessEmployees";

const SettingsContent = ({ selectedCategory, loggedInUserId }) => {
  const renderContent = () => {
    switch (selectedCategory) {
      case "Business":
        return <div><BusinessGeneral /><div>Manage your Business Settings here</div></div>;
      case "Clothing Items":
        return <div><BusinessProducts /></div>;
      case "Employee Management":
        return <div><BusinessEmployees /></div>;
      case "Change Management":
        return <div>View and Approve Proposed Changes</div>;
      case "Notifications":
        return <div>Notification Preferences and Triggers</div>;
      case "Audit and Logs":
        return <div>Activity Logs and Audit Settings</div>;
      case "Preferences":
        return <div>Application Preferences (Theme, Timezone, etc.)</div>;
      case "Edit Profile":
        // return <div><UserUpdate loggedInUserId={loggedInUserId} /></div>;
        return <div><BusinessProfile /></div>;
      default:
        return <div>Select a category to view settings</div>;
    }
  };

  return <div className="settings-content">{renderContent()}</div>;
};

export default SettingsContent;