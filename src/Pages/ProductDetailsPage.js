import React from 'react';
import { useParams } from 'react-router-dom';
import MockShops from '../Mock_DataBase/Mock_Shops';
import '../Styling/productdetails.css';

const ProductDetailsPage = () => {
  const { slug, productId } = useParams();
  const shop = MockShops.find((shop) => shop.slug === slug);
  const product = shop?.clothingItems.find((item) => item.name === parseInt(productId));

  if (!shop || !product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className='product-details-page'>
      <div className='product-details-main'>
        <div className='product-image-section'>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className='product-info-section'>
          <h1>{product.name}</h1>
          <p className='product-description'>{product.description}</p>
          <p className='product-price'>Price: ${product.price.toFixed(2)}</p>
          <button className='add-to-cart-btn'>Add to Cart</button>
          <a href={`/shop/${slug}`} className='back-to-shop-link'>Back to Shop</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
