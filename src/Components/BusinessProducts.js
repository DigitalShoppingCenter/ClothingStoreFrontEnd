import React, { useState, useEffect } from 'react';


export const BusinessProducts = () => {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    // Simulating fetching mock data
    const mockData = {
      id: 1,
      name: 'Mock Business',
      description: 'This is a mock business description.',
      products: [
        { id: 101, name: 'Mock Product 1', price: 29.99 },
        { id: 102, name: 'Mock Product 2', price: 49.99 },
      ],
      employees: [
        { id: 201, name: 'John Doe', email: 'john@example.com' },
        { id: 202, name: 'Jane Smith', email: 'jane@example.com' },
      ],
    };

    // Set the mock data after a simulated delay
    setTimeout(() => {
      setBusiness(mockData);
    }, 500); // Simulates a 500ms API delay
  }, []);

  if (!business) {
    return <p>Loading business data...</p>;
  }

  return (
    <div className="products-section">
      <h3>Products</h3>
      <button
        onClick={() => alert('Add Product functionality')}
        className="add-product-button"
      >
        Add Product
      </button>

      {business.products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul className="products-list">
          {business.products.map((product) => (
            <li key={product.id} className="product-item">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
              <button
                onClick={() => alert(`Edit Product functionality for ${product.name}`)}
                className="edit-product-button"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
