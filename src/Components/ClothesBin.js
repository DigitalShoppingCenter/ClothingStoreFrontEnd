import React, { useState } from 'react';
import clothesbin from '../Styling/clothesbin.css'


function ClothesBin({ items }) {
    items = [
        { NameOfProduct: 'Versace', Material: 'Leather', 'New Or Used': 'New', Color: 'Red', Size: 'Large'},
        { NameOfProduct: 'Gucci', Material: 'Cotton', 'New Or Used': 'Used', Color: 'Green', Size: 'Medium' },
        { NameOfProduct: 'Chanel', Material: 'Wool', 'New Or Used': 'New', Color: 'Black', Size: 'Small' },
        { NameOfProduct: 'Prada', Material: 'Silk', 'New Or Used': 'New', Color: 'Blue', Size: 'Large' },
        { NameOfProduct: 'Dior', Material: 'Denim', 'New Or Used': 'Used', Color: 'Dark Blue', Size: 'Medium' },
        { NameOfProduct: 'Louis Vuitton', Material: 'Leather', 'New Or Used': 'New', Color: 'Brown', Size: 'Medium' },
        { NameOfProduct: 'Armani', Material: 'Cotton', 'New Or Used': 'New', Color: 'White', Size: 'Large' },
        { NameOfProduct: 'Burberry', Material: 'Wool', 'New Or Used': 'Used', Color: 'Beige', Size: 'Small' },
        { NameOfProduct: 'Fendi', Material: 'Silk', 'New Or Used': 'New', Color: 'Purple', Size: 'Medium' },
        { NameOfProduct: 'Hermès', Material: 'Denim', 'New Or Used': 'Used', Color: 'Light Blue', Size: 'Large' },
        { NameOfProduct: 'Givenchy', Material: 'Leather', 'New Or Used': 'New', Color: 'Gray', Size: 'Medium' },
        { NameOfProduct: 'Bvlgari', Material: 'Cotton', 'New Or Used': 'New', Color: 'Pink', Size: 'Large' },
        { NameOfProduct: 'Dolce & Gabbana', Material: 'Wool', 'New Or Used': 'Used', Color: 'Brown', Size: 'Small' },
        { NameOfProduct: 'Balenciaga', Material: 'Silk', 'New Or Used': 'New', Color: 'Orange', Size: 'Medium' },
        { NameOfProduct: 'Tiffany & Co.', Material: 'Denim', 'New Or Used': 'Used', Color: 'Light Gray', Size: 'Large' },
        { NameOfProduct: 'Ralph Lauren', Material: 'Leather', 'New Or Used': 'New', Color: 'Navy', Size: 'Medium' },
        { NameOfProduct: 'Valentino', Material: 'Cotton', 'New Or Used': 'New', Color: 'Maroon', Size: 'Large' },
        { NameOfProduct: 'Marc Jacobs', Material: 'Wool', 'New Or Used': 'Used', Color: 'Teal', Size: 'Small' },
        { NameOfProduct: 'Kenzo', Material: 'Silk', 'New Or Used': 'New', Color: 'Coral', Size: 'Medium' },
        { NameOfProduct: 'Miu Miu', Material: 'Denim', 'New Or Used': 'Used', Color: 'Light Pink', Size: 'Large' },
        { NameOfProduct: 'Saint Laurent', Material: 'Leather', 'New Or Used': 'New', Color: 'Black', Size: 'Medium' },
        { NameOfProduct: 'Celine', Material: 'Cotton', 'New Or Used': 'New', Color: 'Turquoise', Size: 'Large' },
        { NameOfProduct: 'Bottega Veneta', Material: 'Wool', 'New Or Used': 'Used', Color: 'Olive', Size: 'Small' },
        { NameOfProduct: 'Loewe', Material: 'Silk', 'New Or Used': 'New', Color: 'Silver', Size: 'Medium' },
        { NameOfProduct: 'Giorgio Armani', Material: 'Denim', 'New Or Used': 'Used', Color: 'Charcoal', Size: 'Large' },
        { NameOfProduct: 'Balmain', Material: 'Leather', 'New Or Used': 'New', Color: 'Dark Red', Size: 'Medium' },
        { NameOfProduct: 'Jimmy Choo', Material: 'Cotton', 'New Or Used': 'New', Color: 'Nude', Size: 'Large' },
        { NameOfProduct: 'Oscar de la Renta', Material: 'Wool', 'New Or Used': 'Used', Color: 'Peach', Size: 'Small' },
        { NameOfProduct: 'Alexander McQueen', Material: 'Silk', 'New Or Used': 'New', Color: 'Lavender', Size: 'Medium' },
        { NameOfProduct: 'Maison Margiela', Material: 'Denim', 'New Or Used': 'Used', Color: 'Teal', Size: 'Large' },
        { NameOfProduct: 'Etro', Material: 'Leather', 'New Or Used': 'New', Color: 'Beige', Size: 'Medium' },
        { NameOfProduct: 'Mason\'s', Material: 'Cotton', 'New Or Used': 'New', Color: 'Red', Size: 'Large' },
        { NameOfProduct: 'The Kooples', Material: 'Wool', 'New Or Used': 'Used', Color: 'Dark Green', Size: 'Small' },
        { NameOfProduct: 'Philipp Plein', Material: 'Silk', 'New Or Used': 'New', Color: 'Gold', Size: 'Medium' },
        { NameOfProduct: 'Dsquared2', Material: 'Denim', 'New Or Used': 'Used', Color: 'Midnight Blue', Size: 'Large' },
        { NameOfProduct: 'Rochas', Material: 'Leather', 'New Or Used': 'New', Color: 'Burgundy', Size: 'Medium' },
    ];

    
    const [currentPage, setCurrentPage] = useState(1);
    const [ITEMS_PER_PAGE, setItemsPerPage]=useState(4);
    
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    if(ITEMS_PER_PAGE===1)
    {
        return(<div>
            <div className="clothes-bin-container-1">
              <ul className="clothes-list-1">
                {currentItems.map((item, index) => (
                  <li key={index} className="clothes-item-1">
                    <strong>{item.NameOfProduct}</strong><br />
                    Material: {item.Material}<br />
                    Condition: {item['New Or Used']}<br />
                    Color: {item.Color}<br />
                    Size: {item.Size}<br /><br />
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
    

    return (
      <div>
        <div className="clothes-bin-container">
          <ul className="clothes-list">
            {currentItems.map((item, index) => (
              <li key={index} className="clothes-item">
                <strong>{item.NameOfProduct}</strong><br />
                Material: {item.Material}<br />
                Condition: {item['New Or Used']}<br />
                Color: {item.Color}<br />
                Size: {item.Size}<br /><br />
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
  
  export default ClothesBin;