import React, { useState } from 'react';
import '../Styling/log_user.css'; // Make sure the path to the CSS file is correct
import login from '../Mock_DataBase/Log_function';
import { useUsers } from '../Context/UserContext';
import { FaGoogle } from "react-icons/fa";

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const { user, token } = await login(username, password);
    localStorage.setItem('token', token);

    if (token != null) {
      window.location.href = "http://localhost:3000/";
    } else {
      window.location.reload(true);
    }
  };

  return (
    <div className='log_main_div'>
      <form onSubmit={handleSubmit}>
        <div className="log_user">
          <a href='http://localhost:3000'>
            <img src={`${process.env.PUBLIC_URL}/Assets/logo.png`} id='logo_login' alt="Logo" />
          </a>
          <p id='head_log'>Log in to see our fullest extent!</p>
          <input
            type="text"
            placeholder="Username or Email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
         
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='pass_input'
          />
         
          <a href='http://localhost:3000/forgot_password' id='forgot_pw'>Forgot Password?</a>
          <div className='remember_me'>
            <input
              type='checkbox'
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <p>Remember Me</p>
          </div>
          <button type='submit' id='button_log' disabled={loading}>
            {loading ? 'Logging in...' : 'Done'}
          </button>
          <button className="google-login-button">
          <span alt="Google logo" className="google-logo"><FaGoogle /></span>
            Log in with Google
          </button> 
          {error && <div className="error-message">Error: {error}</div>}
          {success && <div className="success-message">{success}</div>}
        </div>
      </form>
    </div>
  );
}

export default LoginComponent;