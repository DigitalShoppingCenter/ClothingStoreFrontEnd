// ShopDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Styling/shopdetail.css';
import MockShops from '../Mock_DataBase/Mock_Shops';

const ShopDetailsPage = () => {
  const { slug } = useParams(); // Get shop slug from URL
  const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch shop details using the slug
  useEffect(() => {
    const fetchShopDetails = () => {
      const foundShop = MockShops.find((s) => s.slug === slug);
      if (foundShop) {
        setShop(foundShop);
        setFilteredProducts(foundShop.clothingItems);
        setLoading(false);
      } else {
        setError('Shop not found');
        setLoading(false);
      }
    };

    fetchShopDetails();
  }, [slug]);

  // Filter products based on selected category
  useEffect(() => {
    if (shop) {
      setFilteredProducts(
        selectedCategory === 'All'
          ? shop.clothingItems
          : shop.clothingItems.filter(
              (item) => item.category === selectedCategory
            )
      );
    }
  }, [selectedCategory, shop]);

  if (loading) {
    return <p>Loading shop details...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="shop-details-page">
        {/* Hero Section */}
        <div
          className="shop-hero"
          style={{ backgroundImage: `url(${shop.coverImage})` }}
        >
          <div className="shop-hero-content">
            <img
              src={shop.logoImage}
              alt={`${shop.name} Logo`}
              className="shop-logo"
            />
            <button
              className="view-on-map-btn"
              onClick={() => navigate(`/map?shop=${shop.slug}`)}
            >
              View on Map
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="shop-categories-section">
          <div className="shop-categories">
            <span
              className={`category-tag ${
                selectedCategory === 'All' ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory('All')}
            >
              All ({shop.clothingItems.length})
            </span>
            {shop.categories.map((category, index) => (
              <span
                key={index}
                className={`category-tag ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} (
                {
                  shop.clothingItems.filter(
                    (item) => item.category === category
                  ).length
                }
                )
              </span>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="shop-products-section">
          {filteredProducts.map((item) => (
            <div key={item.itemId} className="product-card">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">${item.price.toFixed(2)}</p>
                <button
                  className="view-product-btn"
                  onClick={() =>
                    navigate(`/${shop.slug}/product/${item.itemId}`)
                  }
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-products-container">
            <button
              className="view-all-products-btn"
              onClick={() => navigate(`/${shop.slug}/products`)}
                >
                  View All Products
               </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsPage;
