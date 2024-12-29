import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Product_Register from './Pages/Product_Register';
import Log from './Pages/Log';
import Register from './Pages/Register';
import Forgot_password from './Pages/Forgot_password';
import ClothesBin from './Pages/ClothesBin';
import Juli from './Pages/Juli';
import Shops from './Pages/Shops';
import UserUpdate from './Pages/UserUpdate';
import ProductDetail from './Pages/ProductDetail';
import ShopDetails from './Components/ShopDetails';
import { UserProvider } from './Context/UserContext';
import UserProfile from './Components/UserProfile';
import ProfileSettings from './Components/ProfileSettings';
import Profile from './Pages/ProfilePage';
import Settings from "./Components/Settings/Settings";
import NotificationDropdown from './Components/NotificationDropdown';
import Map from '../src/Pages/MapPage';
import './App.css';
import ProfilePage from './Components/UserProfile';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
  
      <Router>
        <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product_register" element={<Product_Register />} />
          <Route path="/login" element={<Log />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<Forgot_password />} />
          <Route path="/clothesbin" element={<ClothesBin />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/user_update" element={<UserUpdate />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/shops/:shopName" element={<ShopDetails />} />
          <Route path="/profile-edit" element={<UserProfile />} />
          <Route path="/profile" element={<Profile />} />
           <Route path="/settings" element={<Settings />} />
           <Route path="/" element={<NotificationDropdown />} />
           <Route path="/map" element={<Map />} />
           </Routes>
        </UserProvider>
      </Router>

  );
}
