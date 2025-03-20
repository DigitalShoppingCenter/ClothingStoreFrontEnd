import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MockShops from '../Mock_DataBase/Mock_Shops';
import '../Styling/productdetails.css';

const ProductDetailsPage = () => {
  const { slug, productSlug } = useParams();
  const [shop, setShop] = useState(null);
  const [product, setProduct] = useState(null);

  // Track which image is currently shown
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Find the shop based on its slug
    const foundShop = MockShops.find((shop) => shop.slug === slug);
    if (foundShop) {
      // Find the product using its unique slug
      const foundProduct = foundShop.clothingItems.find(
        (item) => item.slug === productSlug
      );
      setShop(foundShop);
      setProduct(foundProduct);
      setCurrentImageIndex(0); // Reset to first image
    }
  }, [slug, productSlug]);

  if (!shop || !product) {
    return <p>Product not found.</p>;
  }

  // Products in the same category (excluding the current product)
  const categoryProducts = shop.clothingItems.filter(
    (item) => item.category === product.category && item.slug !== product.slug
  );

  // Products from the same shop in different categories
  const shopDiffProducts = shop.clothingItems.filter(
    (item) => item.slug !== product.slug && item.category !== product.category
  );

  // All other products from the shop (for "Users also searched")
  const storeProducts = shop.clothingItems.filter(
    (item) => item.slug !== product.slug
  );

  // Functions to navigate the images array
  const handlePrevImage = () => {
    if (!product.images) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const handleNextImage = () => {
    if (!product.images) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % product.images.length
    );
  };

  return (
    <div>
      <Navbar />
      <div className="product-details-page">
        {/* Main product details */}
        <div className="product-details-main">
          <div className="product-image-section">
            {product.images && product.images.length > 0 ? (
              <div className="carousel-container">
                {/* Only show arrows if there is more than one image */}
                {product.images.length > 1 && (
                  <button
                    className="arrow left-arrow"
                    onClick={handlePrevImage}
                  >
                    &lt;
                  </button>
                )}
                <img
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} angle ${currentImageIndex + 1}`}
                />
                {product.images.length > 1 && (
                  <button
                    className="arrow right-arrow"
                    onClick={handleNextImage}
                  >
                    &gt;
                  </button>
                )}
              </div>
            ) : (
              <img src={product.imageUrl} alt={product.name} />
            )}
          </div>
          <div className="product-info-section">
            <h1>{product.name}</h1>
            <p className="product-description">
              {product.info || 'No description available.'}
            </p>
            <p className="product-price">
              Price: ${product.price.toFixed(2)}
            </p>
            {/* Availability Stats */}
            {product.available ? (
              <div className="product-stats available">
                <span className="availability-status">
                  Available On Shop
                </span>
                <span className="stock-left">
                  | Stock Left: {product.stockLeft}
                </span>
              </div>
            ) : (
              <div className="product-stats unavailable">
                <span className="availability-status">
                  Not Currently Available On This Shop
                </span>
              </div>
            )}
            <button
              type="submit"
              className="add-to-cart-btn"
              disabled={!product.available}
            >
              Reserve
            </button>
            <Link to={`/${shop.slug}`}>
              <button type="submit" className='go-back-pd'>Go Back</button>
            </Link>
          </div>
        </div>

        {/* More on this category */}
        <div className="more-category">
          <h2>More on this category</h2>
          {categoryProducts.length > 0 ? (
            <ul>
              {categoryProducts.map((item) => (
                <li key={item.slug}>
                  <Link to={`/${shop.slug}/${item.slug}`}>
                    <img src={item.imageUrl} alt={item.name} />
                  </Link>
                  <h3>{item.name}</h3>
                  <p className="product-card-price">
                    ${item.price.toFixed(2)}
                  </p>
                  <Link
                    to={`/${shop.slug}/${item.slug}`}>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No other products in this category.</p>
          )}
        </div>

        {/* More From this Shop (different categories) */}
        <div className="more-shop">
          <h2>More From this Shop</h2>
          {shopDiffProducts.length > 0 ? (
            <ul>
              {shopDiffProducts.map((item) => (
                <li key={item.slug}>
                  <Link to={`/${shop.slug}/${item.slug}`}>
                    <img src={item.imageUrl} alt={item.name} />
                  </Link>
                  <h3>{item.name}</h3>
                  <p className="product-card-price">
                    ${item.price.toFixed(2)}
                  </p>
                  <Link to={`/${shop.slug}/${item.slug}`}></Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No other products from this shop.</p>
          )}
        </div>

        {/* Users also searched (Optional) */}
        <div className="users-searched">
          <h2>Users also searched</h2>
          {storeProducts.length > 0 ? (
            <ul>
              {storeProducts.map((item) => (
                <li key={item.slug}>
                  <Link to={`/${shop.slug}/${item.slug}`}>
                    <img src={item.imageUrl} alt={item.name} />
                  </Link>
                  <h3>{item.name}</h3>
                  <p className="product-card-price">
                    ${item.price.toFixed(2)}
                  </p>
                  <Link to={`/${shop.slug}/${item.slug}`}></Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No suggestions available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
