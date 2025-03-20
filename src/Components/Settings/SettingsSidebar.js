import React from "react";

const SettingsSidebar = ({ categories, selectedCategory, onSelectCategory, userBusinesses = [], selectedBusiness, setSelectedBusiness }) => {
  return (
    <div className="settings-sidebar">
      {/* Business Selection Dropdown */}
      {userBusinesses.length > 0 ? (
        <div className="business-selector">
          <label>Select Business:</label>
          <select
            value={selectedBusiness?.id || ""}
            onChange={(e) => {
              const business = userBusinesses.find(b => b.id === parseInt(e.target.value));
              setSelectedBusiness(business);
            }}
          >
            <option value="" disabled>Select a business</option>
            {userBusinesses.map((business) => (
              <option key={business.id} value={business.id}>{business.name}</option>
            ))}
          </select>
        </div>
      ) : (
        <p>No businesses found.</p>
      )}

      {/* Show Settings only if a business is selected */}
      {selectedBusiness && (
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={`category-item ${selectedCategory === category ? "active" : ""}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SettingsSidebar;
