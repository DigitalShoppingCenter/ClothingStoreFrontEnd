import React, { useState } from 'react';
import '../Styling/register_user.css';
import RegisterFormBusiness from './RegisterFormBusiness'; 
import { FaGoogle } from "react-icons/fa";

function RegisterFormUser() {
  const [selectedForm, setSelectedForm] = useState('User');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    username: '',
    phoneNumber: '',
    email: '',
    createPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedForm(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
  };

  const renderUserForm = () => (
    <div className="form-section">
      <input
        type="text"
        name="firstName"
        placeholder="Firstname"
        required
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Lastname"
        required
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        required
        value={formData.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Set Username"
        required
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder='Phone Number (example - "0691234567")'
        pattern="^(0(6[8-9]|[7-9][0-9]|[0-5][0-9]|[2-5][0-9]))[0-9]{7}$"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="createPassword"
        placeholder="Create a Password"
        required
        value={formData.createPassword}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="register_main_div">
      <div className="register_user">
        <a href="http://localhost:3000">
          <img src="Assets/logo.png" id="logo_ed" alt="logo" />
        </a>
        <h5 id="h_register">- Establish a New Profile -</h5>

        <div id='underline_regist1'></div>

        {/* Select dropdown to choose between User and Business */}
        <p id="regist_b_u">Please fill the registration form!</p>

        {/* Conditionally render the User or Business form */}
        {selectedForm === 'User' && renderUserForm()}

        <button id="button_register" type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Done'}
        </button>

        {error && <p id="error">{error}</p>}
        {success && <p id="success">{success}</p>}

        <p id="own_account">
          Own an existing account?{' '}
          <a href="http://localhost:3000/login" id="login_register_style">
            Log In
          </a>
        </p>
        <button className="google-login-button">
          <span alt="Google logo" className="google-logo"><FaGoogle /></span>
            Sign Up with Google
          </button> 
      </div>
    </form>
  );
}

export default RegisterFormUser;
