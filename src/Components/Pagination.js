import React, { useState } from 'react';
import clothesbin from '../Styling/clothesbin.css'


function Pagination({ items }) {
   
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