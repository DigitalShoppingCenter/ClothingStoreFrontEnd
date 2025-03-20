import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '../Components/Navbar';
import '../Styling/sd-shopdetail.css';
import ShopInformation from '../Components/ShopInformation';
import ShopMap from '../Components/ShopMap';
import Footer from '../Components/Footer';

const ShopDetailsPage = () => {
  const { businessId } = useParams();
  const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Retrieve token and log it for debugging
    const storedToken = localStorage.getItem('token');
    console.log("Raw token from localStorage:", storedToken);

    if (!storedToken) {
      setError("Unauthorized access. Please log in.");
      setLoading(false);
      return;
    }

    // Parse the token if it's stored as a JSON string
    let token;
    try {
      const parsedData = JSON.parse(storedToken);
      token = parsedData.token || parsedData; // Some apps store `{ token: "..." }`
    } catch (error) {
      token = storedToken; // If parsing fails, assume it's stored as plain string
    }

    console.log("Final token used for request:", token);

    const apiUrl = `https://urchin-app-lpasr.ondigitalocean.app/api/business/${businessId}`;
    console.log("Fetching shop from:", apiUrl);

    fetch(apiUrl, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        console.log("API Response Status:", response.status);
        if (!response.ok) {
            return response.text().then(text => { throw new Error(`Failed to fetch shop: ${response.status} - ${text}`); });
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetched Shop Data:", data);
        setShop(data);
        setLoading(false);
    })
    .catch(error => {
        console.error('Fetch error:', error.message);
        setError(error.message);
        setLoading(false);
    });
  }, [businessId]);

  if (loading) return <p>Loading shop details...</p>;
  if (error) return <p className="sd-error-message">{error}</p>;
  if (!shop) return <p className="sd-error-message">Shop not found.</p>;

  return (
    <div>
      <Navbar />
      <div className="sd-shop-details-page">
        <div
          className="sd-shop-hero"
          style={{ backgroundImage: `url(${shop.coverImage || '/default-cover.jpg'})` }}
        >
          <div className="sd-shop-hero-content">
            <img
              src={shop.logoImage || '/default-logo.jpg'}
              alt={`${shop.name} Logo`}
              className="sd-shop-logo"
            />
            <p className="sd-shop-is-now">Shop is now: {shop.currently || 'Unknown'}</p>
          </div>
        </div>

        <ShopInformation businessId={shop.id} />
        <ShopMap lat={shop.latitude} lng={shop.longitude} />
        <Footer />
      </div>
    </div>
  );
};

export default ShopDetailsPage;
