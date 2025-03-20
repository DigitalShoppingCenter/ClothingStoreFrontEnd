import React, { useState } from 'react';
import '../Styling/register_user.css';
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function RegisterFormUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    username: '',
    phoneNumber: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
    role: '2' // Default role as "0" (User)
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for standard registration submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "dateOfBirth", "username", "phoneNumber", "email", "createPassword", "confirmPassword"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill in all fields. Missing: ${field}`);
        setLoading(false);
        return;
      }
    }

    // Ensure passwords match
    if (formData.createPassword !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Map role to the appropriate integer value
    const roleMap = {
      '0': 0, // BusinessOwner
      '1': 1, // Admin
      '2': 2  // User
    };

    const requestBody = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.createPassword,
      role: roleMap[formData.role]
      // You can add additional fields (like dateOfBirth, username, phoneNumber) if your backend requires them
    };

    try {
      const response = await fetch('https://urchin-app-lpasr.ondigitalocean.app/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "An error occurred while registering.");
      }

      setSuccess("User registered successfully!");
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        username: '',
        phoneNumber: '',
        email: '',
        createPassword: '',
        confirmPassword: '',
        role: '2'
      });

      // Redirect to login page after successful registration
      window.location.href = "http://localhost:3000/login";
    } catch (err) {
      setError(err.message || "An error occurred while registering.");
      setLoading(false);
    }
  };

  // Google Registration Handlers
  const handleGoogleRegisterSuccess = async (credentialResponse) => {
    console.log("Google registration success:", credentialResponse.credential);
    setLoading(true);
    setError(null);
    try {
      // Send the Google credential to your backend registration endpoint
      const response = await fetch('https://urchin-app-lpasr.ondigitalocean.app/api/GoogleRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: credentialResponse.credential })
      });

      if (!response.ok) {
        throw new Error("Google registration failed on the server.");
      }

      const data = await response.json();

      // Optionally decode token for debugging
      const decoded = jwtDecode(data.token || data);
      console.log("Decoded token:", decoded);

      // Store token if you want to automatically log the user in
      localStorage.setItem('token', JSON.stringify(data));

      // Redirect to preview or your desired page after registration
      window.location.href = 'http://localhost:3000/preview';
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGoogleRegisterError = () => {
    setError("Google registration failed. Please try again.");
  };

  return (
    <form onSubmit={handleSubmit} className="register_main_div">
      <div className="register_user">
        <a href="http://localhost:3000">
          <img src="Assets/logo.png" id="logo_ed" alt="logo" />
        </a>
        <h5 id="h_register">- Establish a New Profile -</h5>
        <div id='underline_regist1'></div>
        <p id="regist_b_u">Please fill the registration form!</p>

        {/* Input Fields */}
        <div className="form-section">
          <input type="text" name="firstName" placeholder="Firstname" required value={formData.firstName} onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Lastname" required value={formData.lastName} onChange={handleInputChange} />
          <input type="date" name="dateOfBirth" required value={formData.dateOfBirth} onChange={handleInputChange} />
          <input type="text" name="username" placeholder="Set Username" required value={formData.username} onChange={handleInputChange} />
          <input type="tel" name="phoneNumber" placeholder='Phone Number (example - "0691234567")' pattern="^\d{10}$" required value={formData.phoneNumber} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} />
          <input type="password" name="createPassword" placeholder="Create a Password" required value={formData.createPassword} onChange={handleInputChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required value={formData.confirmPassword} onChange={handleInputChange} />
        </div>

        {/* Submit Button for Standard Registration */}
        <button id="button_register" type="submit" disabled={loading || Object.values(formData).some(field => !field)}>
          {loading ? 'Registering...' : 'Done'}
        </button>

        {/* Google Registration Section */}
        <div className="google-login-container">
          <GoogleLogin
            onSuccess={handleGoogleRegisterSuccess}
            onError={handleGoogleRegisterError}
          />
        </div>

        {/* Error and Success Messages */}
        {error && <p id="error">{error}</p>}
        {success && <p id="success">{success}</p>}
      </div>
    </form>
  );
}

export default RegisterFormUser;