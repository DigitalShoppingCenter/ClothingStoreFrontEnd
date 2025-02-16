import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Styling/sd-shopdetail.css';
import MockShops from '../Mock_DataBase/Mock_Shops';
import ShopInformation from '../Components/ShopInformation';
import Footer from '../Components/Footer';

const ShopDetailsPage = () => {
  const { slug } = useParams(); // Get shop slug from URL
  const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch shop details using the slug
  useEffect(() => {
    const fetchShopDetails = () => {
      const foundShop = MockShops.find((s) => s.slug === slug);
      if (foundShop) {
        setShop(foundShop);
        setFilteredProducts(foundShop.clothingItems);
        setLoading(false);
      } else {
        setError('Not found');
        setLoading(false);
      }
    };

    fetchShopDetails();
  }, [slug]);

  // Filter products based on selected category
  useEffect(() => {
    if (shop) {
      const products =
        selectedCategory === 'All'
          ? shop.clothingItems
          : shop.clothingItems.filter(
              (item) => item.category === selectedCategory
            );
      setFilteredProducts(products);
      setCurrentPage(0); // Reset to first page on category change
    }
  }, [selectedCategory, shop]);

  if (loading) {
    return <p>Loading shop details...</p>;
  }

  if (error) {
    return <p className="sd-error-message">{error}</p>;
  }

  // Pagination logic: calculate total pages and slice products for current page
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="sd-shop-details-page">
        {/* Hero Section */}
        <div
          className="sd-shop-hero"
          style={{ backgroundImage: `url(${shop.coverImage})` }}
        >
          <div className="sd-shop-hero-content">
            <img
              src={shop.logoImage}
              alt={`${shop.name} Logo`}
              className="sd-shop-logo"
            />
            <p className="sd-shop-is-now">Shop is now: {shop.currently}</p>
            <button
              className="sd-view-on-map-btn"
              onClick={() => navigate(`/map?shop=${shop.slug}`)}
            >
              View on Map
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="sd-shop-categories-section">
          <div className="sd-shop-categories">
            <span
              className={`sd-category-tag ${
                selectedCategory === 'All' ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory('All')}
            >
              All ({shop.clothingItems.length})
            </span>
            {shop.categories.map((category, index) => (
              <span
                key={index}
                className={`sd-category-tag ${
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
        <div className="sd-products-section">
          {paginatedProducts.map((item) => (
            <div key={item.itemId} className="sd-product-card">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="sd-product-image"
              />
              <div className="sd-product-details">
                <h3 className="sd-product-name">{item.name}</h3>
                <p className="sd-product-price">${item.price.toFixed(2)}</p>
                <p className="sd-product-info">"{item.info}"</p>
                <button
                  className="sd-view-product-btn"
                  onClick={() => navigate(`/${shop.slug}/${item.slug}`)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="sd-pagination-controls">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className="sd-pagination-arrow"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`sd-page-button ${
                  index === currentPage ? 'active' : ''
                }`}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="sd-pagination-arrow"
            >
              &gt;
            </button>
          </div>
        )}

        <div>
          <ShopInformation businessId={1} />
        </div>

        <div className="sd-view-all-products-container">
          <button
            className="sd-view-all-products-btn"
            onClick={() => navigate(`/${shop.slug}/products`)}
          >
            View All Products
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopDetailsPage;
