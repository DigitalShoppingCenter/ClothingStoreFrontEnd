import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaCaretDown } from "react-icons/fa";
import "../Styling/navbar.css";
import { verifyToken } from "../Mock_DataBase/Generate_Token";
import Notification from "../Components/NotificationDropdown";

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false); // State for "My Profile" submenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch user on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = verifyToken(token);
      setLoggedUser(userData);
    }
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownVisible((prev) => !prev);
    setIsSubmenuVisible(false); // Close submenu when toggling main dropdown
  };

  const toggleSubmenu = (e) => {
    e.stopPropagation();
    setIsSubmenuVisible((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownVisible(false);
        setIsSubmenuVisible(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="navbar_container">
      <nav className="navbar">
        <div className="logo-container">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/edlogo.png`}
              alt="E & D Corporation Logo"
            />
          </a>
          <h3>E & D Corporation</h3>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/shops">Shops</a></li>
          <li><a href="/map">Map</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>

          {loggedUser ? (
            <>
              {/* Notification Component */}
              <li>
                <Notification isLoggedIn={!loggedUser} />
              </li>

              {/* User Menu */}
              <li className="user-menu" ref={dropdownRef}>
                <button className="user-menu-button" onClick={toggleDropdown}>
                  <FaUser className="user-icon" />
                  <span>{loggedUser.username}</span>
                  <FaCaretDown
                    className={`caret-icon ${isDropdownVisible ? "rotate" : ""}`}
                  />
                </button>

                {isDropdownVisible && (
                  <div className="dropdown-menu">
                    {/* My Profile Submenu */}
                    <div className="dropdown-submenu">
                      <button
                        className="dropdown-item-dropdown-toggle"
                        onClick={toggleSubmenu}
                      >
                        <span className="dropdown-icon-myprofile">👤</span> My Profile
                        <FaCaretDown
                          className={`submenu-caret ${
                            isSubmenuVisible ? "rotate" : ""
                          }`}
                        />
                      </button>

                      {isSubmenuVisible && (
                        <div className="dropdown-submenu-content">
                          <a href="/profile" className="dropdown-item">
                           -  View Profile
                          </a>
                          <a href="/profile-edit" className="dropdown-item">
                           -  Edit Profile
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Settings */}
                    <a href="/settings" className="dropdown-item">
                      <span className="dropdown-icon">⚙️</span> Settings
                    </a>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="dropdown-item logout-button"
                    >
                      <span className="dropdown-icon">🚪</span> Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <div className="auth-buttons">
              <button
                onClick={() => (window.location.href = "/login")}
                className="login-button"
              >
                Login
              </button>
              <button
                onClick={() => (window.location.href = "/register")}
                className="register-button"
              >
                Register
              </button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
