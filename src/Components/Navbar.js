import React from 'react';
import navbar from '../Styling/navbar.css'
import edlogo from '../Assets/edlogo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h3 id='edcorp'>E & D Corporation</h3>
        <h4 id='h4welcome'>Welcome, to the world's first ever online shopping mall</h4>
      <ul className="nav-links">
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="http://localhost:3000/shops">Shops</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="http://localhost:3000/login" id='log_regist_edit'>Log In</a></li>
        <li><a href="http://localhost:3000/register" id='log_regist_edit'>Register</a></li>
      </ul>
      <div>
      <a href='http://localhost:3000'><img src={edlogo} id='edlogo' /></a>
      
      </div>
    </nav>
  );
};

export default Navbar;
