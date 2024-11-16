import React, { useState } from 'react';
import '../Styling/clothesbin.css'; // Corrected import for CSS

function Pagination({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get current items for the current page
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle the next page button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Function to handle the previous page button
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="clothes-bin-container">
        <ul className="clothes-list">
          {currentItems.map((item, index) => (
            <li key={index} className="clothes-item">
              <strong>{item.x1}</strong><br />
              Material: {item.x2}<br />
              Condition: {item.x3}<br />
              Color: {item.x4}<br />
              Size: {item.x5}<br /><br />
              <button>Buy Now</button>
            </li>
          ))}
        </ul>
      </div>          

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
