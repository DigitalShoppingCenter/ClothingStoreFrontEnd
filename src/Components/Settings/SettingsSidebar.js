import React from "react";

const SettingsSidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="settings-sidebar">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsSidebar;
