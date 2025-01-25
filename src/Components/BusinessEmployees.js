import React, { useState, useEffect } from 'react';

export const BusinessEmployees = () => {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        // Simulating API response with mock data
        const mockData = {
          employees: [
            { id: 201, name: 'John Doe', email: 'john@example.com' },
            { id: 202, name: 'Jane Smith', email: 'jane@example.com' },
          ],
        };

        // Simulate a delay
        setTimeout(() => {
          setBusiness(mockData);
          setLoading(false);
        }, 500); // Simulates 500ms API delay
      } catch (err) {
        setError('Failed to load business data');
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

  return (
    <div className="business-page">
      <h2>Business Page</h2>

      {/* Employees Section */}
      <div className="employees-section">
        <h3>Employees</h3>
        {business.employees.length === 0 ? (
          <p>No employees added yet.</p>
        ) : (
          <ul className="employees-list">
            {business.employees.map((employee) => (
              <li key={employee.id} className="employee-item">
                <span>{employee.name}</span>
                <span>{employee.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

