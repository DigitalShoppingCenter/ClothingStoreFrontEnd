import React from 'react';
import MockShops from '../Mock_DataBase/Mock_Shops'; // Confirm this is the correct path
import '../Styling/shopinformation.css'

const ShopInformation = ({ businessId }) => {
    console.log('Business ID:', businessId); // Check what businessId is received
    console.log('Business ID Type:', typeof businessId); // Log the type of businessId

    // Ensure businessId is treated as a number
    const shop = MockShops.find(shop => shop.businessId === Number(businessId));
    console.log('Found Shop:', shop); // See what shop data is found
    console.log('All Shops:', MockShops); // Log all data to inspect

    if (!shop) {
      return <p>Shop not found!</p>; // Enhanced error message
    }
  
    return (
      <div className="shop-infotmation">
        <p>Description: {shop.description}</p>
        <p>Address: {shop.address}</p>
        <p>Opening Hours: {shop.hours}</p>
        <p>Contact Email: {shop.contact.email}</p>
        <p>Contact Phone: {shop.contact.phone}</p>
        <p>Instagram: <a href={shop.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p>Facebook: <a href={shop.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></p>
      </div>
    );
};

export default ShopInformation;
