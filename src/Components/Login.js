import React, { useState } from 'react';
import log_user from '../Styling/log_user.css'
import logo from '../Assets/logo.png'

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  console.log(username, password, rememberMe);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('https://hostname:portnumber/apiv1/controller/apiendpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          rememberMe,    
        }),
      });

      if (!response.ok) {
        throw new Error('Network response failed');
      }

      const result = await response.json();
      console.log('Server Response:', result);
      setSuccess('Login successful!'); 
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }

    if(success!=null)
      {
          window.location.href="http://localhost:3000";
      }

  };

  return (
    <div className='log_main_div'>
      <form onSubmit={handleSubmit}>
        <div className="log_user">
        <a href='http://localhost:3000'><img src={logo} id='logo_login'/></a>
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
          {error && <div className="error-message">Error: {error}</div>}
          {success && <div className="success-message">{success}</div>}
        </div>
      </form>
    </div>
    
  );
};

export default LoginComponent;
