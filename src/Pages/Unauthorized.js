import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/unauthorized.css";
import Navbar from '../Components/Navbar';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div>
        <Navbar />
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <h2 className="unauthorized-subtitle">Unauthorized Access</h2>
        <p className="unauthorized-message">
          Sorry, you do not have permission to access this page.
        </p>
        <button className="unauthorized-button"><a href="http://localhost:3000/preview">Go Back Home</a></button>
      </div>
    </div>
    </div>
  );
};

export default Unauthorized;
