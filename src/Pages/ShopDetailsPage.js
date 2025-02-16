import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '../Components/Navbar';
import '../Styling/sd-shopdetail.css';
import MockShops from '../Mock_DataBase/Mock_Shops';
import ShopInformation from '../Components/ShopInformation';
import Footer from '../Components/Footer';

const ShopDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [shop, setShop] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Number of items to display per load
  const itemsPerLoad = 6;

  // Fetch shop details based on slug
  useEffect(() => {
    const foundShop = MockShops.find((s) => s.slug === slug);
    if (foundShop) {
      setShop(foundShop);
      setFilteredProducts(foundShop.clothingItems);
      setVisibleCount(itemsPerLoad); // load 6 items initially
      setLoading(false);
    } else {
      setError('Not found');
      setLoading(false);
    }
  }, [slug]);

  // Update products when category changes
  useEffect(() => {
    if (shop) {
      const products =
        selectedCategory === 'All'
          ? shop.clothingItems
          : shop.clothingItems.filter(
              (item) => item.category === selectedCategory
            );
      setFilteredProducts(products);
      setVisibleCount(itemsPerLoad); // reset to initial 6 on category change
    }
  }, [selectedCategory, shop]);

  // Function to load more items when scrolled
  const fetchMoreData = () => {
    console.log('fetchMoreData called');
    setVisibleCount((prev) =>
      Math.min(prev + itemsPerLoad, filteredProducts.length)
    );
  };

  if (loading) {
    return <p>Loading shop details...</p>;
  }

  if (error) {
    return <p className="sd-error-message">{error}</p>;
  }

  // Determine visible products based on the current count
  const visibleProducts = filteredProducts.slice(0, visibleCount);

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
              className={`sd-category-tag ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All ({shop.clothingItems.length})
            </span>
            {shop.categories.map((category, index) => (
              <span
                key={index}
                className={`sd-category-tag ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} (
                {shop.clothingItems.filter((item) => item.category === category).length}
                )
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable container for infinite scroll */}
        <div
          id="scrollableDiv"
          style={{ height: '80vh', overflow: 'auto', padding: '0 16px' }}
        >
          <InfiniteScroll
            dataLength={visibleProducts.length}
            next={fetchMoreData}
            hasMore={visibleProducts.length < filteredProducts.length}
            loader={<h4>Loading more products...</h4>}
            scrollableTarget="scrollableDiv"
          >
            <div className="sd-products-section">
              {visibleProducts.map((item) => (
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
          </InfiniteScroll>
        </div>

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
