import React from "react";
import { BusinessProfile } from "../BusinessProfile";
import { BusinessProducts } from "../BusinessProducts";
import { BusinessEmployees } from "../BusinessEmployees";
import AddProduct from "../Addproduct"; // Component for adding new products

const SettingsContent = ({ selectedCategory, selectedBusiness }) => {
  const renderContent = () => {
    if (!selectedBusiness) {
      return <div>Please select a business to manage.</div>;
    }

    switch (selectedCategory) {
      case "Add New Products":
        return <AddProduct businessId={selectedBusiness.id} />;
      case "Edit Current Products":
        return <BusinessProducts businessId={selectedBusiness.id} />;
      case "Employee Management":
        return <BusinessEmployees businessId={selectedBusiness.id} />;
      case "Edit Profile":
        return <BusinessProfile />;
      default:
        return <div>Select a category</div>;
    }
  };

  return <div className="settings-content">{renderContent()}</div>;
};

export default SettingsContent;
