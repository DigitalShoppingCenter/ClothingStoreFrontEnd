import React, { useState } from 'react';
import usersDB from '../Mock_DataBase/Front_Database'; // Adjust the path as necessary
import "../Styling/usersettings.css";
import Navbar from '../Components/Navbar';

const SettingsPage = ({ userId = 1 }) => {
  const user = usersDB.find(user => user.id === userId) || {};

  const [username, setUsername] = useState(user.username || '');
  const [bio, setBio] = useState(user.bio || '');
  const [email, setEmail] = useState(user.email || '');
  const [birthday, setBirthday] = useState(user.birthday || '');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(user.profileImage || '');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(user.profileImage || '');
  const [wordCount, setWordCount] = useState(user.bio ? user.bio.split(/\s+/).filter(Boolean).length : 0);

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setProfileImage(file);
      setImagePreviewUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleBioChange = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean);  // Split and filter out empty strings for accurate word count
    if (words.length <= 100) {
      setBio(words.join(" "));
      setWordCount(words.length);
    } else {
      alert('Bio cannot exceed 100 words.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      username,
      bio,
      email,
      birthday,
      password: password ? password : user.password,
      profileImage: imagePreviewUrl
    };
    console.log('Updated User:', updatedUser);
    alert('Profile updated successfully!');
  };

  return (
    <div>
        <Navbar />
    <div className="settings-container">
      <form onSubmit={handleSubmit}>
        <label id='label-profile-picture'>
          Profile Image:
          <input type="file" id='profile-picture-input' onChange={handleImageChange} />
          {imagePreviewUrl && (
            <img src={imagePreviewUrl} alt="Profile Preview" style={{ width: '100px', height: '100px', position: "relative", left: "460px", bottom: "90px" }} />
          )}
        </label>
        <label>
        Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password :
          <input type="password" placeholder="Leave blank if you don't want to change your password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
        Bio:
          <textarea value={bio} onChange={handleBioChange} />
          <div className="word-count">
            {wordCount}/100
          </div>
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Birthday:
          <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
    </div>
  );
};

export default SettingsPage;
