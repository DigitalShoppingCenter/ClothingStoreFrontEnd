import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import MockShops from '../Mock_DataBase/Mock_Shops';
import '../Styling/shoplist.css';
import Navbar from '../Components/Navbar';

const ShopList = () => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of shops per view
  const totalPages = Math.ceil(MockShops.length / itemsPerPage);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setIsPaused(true); // Pause auto-scroll briefly on user interaction
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 5 seconds
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * currentPage;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <div>
      <Navbar />
    <div
      className='shop-carousel-container'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className='shop-carousel' ref={carouselRef}>
        {MockShops.map((shop) => (
          <div key={shop.businessId} className='shop-card'>
            <h2>{shop.name}</h2>
            <p>{shop.description}</p>
            <Link to={`/${shop.slug}`} className='view-details-link'>
              View Shop
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='carousel-controls'>
        <button
          onClick={() => handlePageChange((currentPage - 1 + totalPages) % totalPages)}
          className='carousel-arrow'
        >
          &#9664;
        </button>
        <div className='pagination-dots'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(index)}
            ></span>
          ))}
        </div>
        <button
          onClick={() => handlePageChange((currentPage + 1) % totalPages)}
          className='carousel-arrow'
        >
          &#9654;
        </button>
      </div>
    </div>
    </div>
  );
};

export default ShopList;
