import React, { useState } from "react";
import AvatarStyle from '../Styling/AvatarSelection.css';

const AvatarSelection = () => {
  // State to store the selected image preview
  const [avatar, setAvatar] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="avatar-container">
      {/* Display the avatar or a placeholder if no image is selected */}
      <img
        id="avatar"
        src={avatar || "https://via.placeholder.com/100"} // Default image if none selected
        alt="Avatar"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "2px solid #ccc",
          objectFit: "cover",
        }}
      />
      <br />
      {/* Label for the file input */}
      <label htmlFor="img" className="btn-file" style={buttonStyles}>
        Select Avatar
      </label>
      <input
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }} // Hide the file input
        onChange={handleImageChange}
      /><br></br>
      <button type="submit" className="btn" style={buttonStyles}>
        Done
      </button>
    </div>
  );
};

// Styles for the buttons
const buttonStyles = {
  padding: "8px 16px",
  backgroundColor: "lightgreen",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

export default AvatarSelection;
