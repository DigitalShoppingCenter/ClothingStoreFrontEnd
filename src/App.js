// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product_Register from './Pages/Product_Register';
import Log from './Pages/Log';
import Register from './Pages/Register';
import Forgot_password from './Pages/Forgot_password';
import { UserProvider } from './Context/UserContext';
import Profile from './Pages/ProfilePage';
import Settings from "./Components/Settings/Settings";
import NotificationDropdown from './Components/NotificationDropdown';
import Map from '../src/Pages/MapPage';
import ShopList from './Pages/ShopList';
import ShopDetailPage from './Pages/ShopDetailsPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import RegisterBusinessForm from './Components/RegisterFormBusiness';
import SettingsContent from './Components/Settings/SettingsContent';
import Unauthorized from './Pages/Unauthorized';
import ShopProductsPage from './Pages/ShopProductsPage';
import ComingSoon from './Pages/ComingSoon';
import UserSettingsPage from './Pages/UserSettings';

export default function App() {

  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/preview" element={<Home />} />
          <Route path="/product_register" element={<Product_Register />} />
          <Route path="/login" element={<Log />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<Forgot_password />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<NotificationDropdown />} />
          <Route path="/map" element={<Map />} />
          <Route path='/shops' element={<ShopList />} />
          <Route path="/:slug" element={<ShopDetailPage />} />
          <Route path="/:slug/:productSlug" element={<ProductDetailsPage />} />
          <Route path="/create-shop" element={<RegisterBusinessForm />} />
          <Route path="/business/:businessId/settings" element={<SettingsContent />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/:shopSlug/products" element={<ShopProductsPage />} />
          <Route path='/profile-settings' element={<UserSettingsPage />} />

        </Routes>
      </UserProvider>
    </Router>
  );
}
