import React, { useState } from 'react';
import { useUsers } from '../Context/UserContext';

const ProfileSettings = () => {
  const { currentUser, setCurrentUser } = useUsers();
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [profilePicture, setProfilePicture] = useState(currentUser?.profilePicture || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentUser({ ...currentUser, bio, profilePicture });
    // Here you would typically send an API request to update the user data on the server
  };

  if (!currentUser) {
    return <p>Please log in to access profile settings</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Profile Picture URL:
        <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
      </label>
      <label>
        Bio:
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileSettings;

