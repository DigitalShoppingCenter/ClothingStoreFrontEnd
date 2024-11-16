import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Styling/productDetail.css';

function ProductDetail() {
  const { state } = useLocation();
  const { shopName, product } = state || {};
  
  // Set the initial selected image to the first image in detailImages
  const [selectedImage, setSelectedImage] = useState(product?.detailImages[0]);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail-container">
      <h2>{product.type} - {product.brand}</h2>
      {shopName && <h3>Shop: {shopName}</h3>}

      <div className="product-content">
        <div className="product-image-display">
          {/* Display the selected image as the main image */}
          <img src={selectedImage} alt="Selected Product View" className="main-image" />

          {/* Thumbnail images from detailImages */}
          <div className="thumbnail-container">
            {product.detailImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="product-specs">
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
          <p><strong>Colors:</strong> {product.colors.join(', ')}</p>
          {product.fit && <p><strong>Fit:</strong> {product.fit}</p>}
          {product.style && <p><strong>Style:</strong> {product.style}</p>}
          <p><strong>Price:</strong> {product.price}</p>
          {product.description && <p><strong>Description:</strong> {product.description}</p>}
          <button>Reserve !</button> 
          <br></br>
          <br></br>
          <div id='seperation-line'></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
