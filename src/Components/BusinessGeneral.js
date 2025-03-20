import React, { useState, useEffect } from 'react';

export const BusinessGeneral = () => {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchBusinessData = async () => {
        try {
          // Simulating API response with mock data
          setTimeout(() => {
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
            setBusiness(mockData);
            // setEditedBusiness(mockData);
            setLoading(false);
          }, 1000); // Simulates a 1-second delay
        } catch (err) {
          setError('Failed to load mock business data');
          setLoading(false);
        }
      };
  
      fetchBusinessData();
    
    }, []);

    if (loading) {
        return <p>Loading business data...</p>;
      }
    
      if (error) {
        return <p className="error-message">{error}</p>;
      }

return(
<div className="business-info">
          <h3>{business.name}</h3>
          <p>{business.description}</p>
          {/* <button onClick={() => setEditing(true)} className="edit-button">
            Edit Business
          </button> */}
        </div>)
}