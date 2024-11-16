import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product_Register from './Pages/Product_Register';
import Log from './Pages/Log';
import Register from './Pages/Register';
import Forgot_password from './Pages/Forgot_password';
import ClothesBin from './Pages/ClothesBin';
import Juli from './Pages/Juli';
import Shops from './Pages/Shops';
import UserUpdate from './Pages/UserUpdate';
import ProductDetail from './Components/ProductDetail';
import './App.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_register" element={<Product_Register />} />
        <Route path="/login" element={<Log />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<Forgot_password />} />
        <Route path="/clothesbin" element={<ClothesBin />} />
        <Route path="/juli" element={<Juli />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/user_update" element={<UserUpdate />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
