import React, { useState, useEffect } from 'react';

export const BusinessProfile=()=>{
const [editing, setEditing] = useState(false);
const [editedBusiness, setEditedBusiness] = useState({});
const [business, setBusiness] = useState(null);


const handleEditChange = (e) => {
    setEditedBusiness({ ...editedBusiness, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    alert('Mock save successful');
    setBusiness(editedBusiness);
    setEditing(false);
  };

 return(
    <div className="business-page-container">
    <h2>Business Management Dashboard</h2>

    {true ? (
      <div className="edit-business-form">
        <h3>Edit Business Information</h3>
        <input
          type="text"
          name="name"
          value={editedBusiness.name}
          onChange={handleEditChange}
          placeholder="Business Name"
        />
        <input
          type="text"
          name="description"
          value={editedBusiness.description}
          onChange={handleEditChange}
          placeholder="Business Description"
        />
        <button onClick={handleSaveChanges} className="save-button">
          Save Changes
        </button>
        <button onClick={() => setEditing(false)} className="cancel-button">
          Cancel
        </button>
      </div>
    ) : (
      <div className="business-info">
        <h3>{business.name}</h3>
        <p>{business.description}</p>
        <button onClick={() => setEditing(true)} className="edit-button">
          Edit Business
        </button>
      </div>
    )}
    </div>
 )}
