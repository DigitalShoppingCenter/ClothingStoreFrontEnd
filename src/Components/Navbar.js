import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import '../Styling/navbar.css';
import { verifyToken } from '../Mock_DataBase/Generate_Token';

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = verifyToken(token);
      setLoggedUser(userData);
    }
  }, []);

  const toggleDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDropdownVisible(prevVisible => !prevVisible);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  const redirectToLogin = () => {
    window.location.href = "/login";
  };

  const redirectToRegister = () => {
    window.location.href = "/register";
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className='navbar_container'>
      <nav className="navbar">
        <div className="logo-container">
          <a href='/'>
            <img src={`${process.env.PUBLIC_URL}/Assets/edlogo.png`} alt="E & D Corporation Logo" />
          </a>
          <h3>E & D Corporation</h3>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="/shops" onClick={() => setIsMenuOpen(false)}>Shops</a></li>
          <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          {loggedUser ? (
            <li className="user-menu" ref={dropdownRef}>
              <button className="user-menu-button" onClick={toggleDropdown}>
                <FaUser className="user-icon" />
                <span>{loggedUser.username}</span>
                <FaCaretDown className={`caret-icon ${isDropdownVisible ? 'rotate' : ''}`} />
              </button>
              {isDropdownVisible && (
                <div className="dropdown-menu">
                  <a href="/user_update" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                    <span className="dropdown-icon">👤</span>
                    Edit Profile
                  </a>
                  <button onClick={handleLogout} className="dropdown-item logout-button">
                    <span className="dropdown-icon">🚪</span>
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <div className="auth-buttons">
              <button onClick={redirectToLogin} className="login-button">Login</button>
              <button onClick={redirectToRegister} className="register-button">Register</button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;