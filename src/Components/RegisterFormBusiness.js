import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/registerbusiness.css';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../Components/Navbar';
import { parseToken } from '../utils/parseToken';

const RegisterBusinessForm = () => {
    const [businessData, setBusinessData] = useState({
        name: '',
        description: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBusinessData({ ...businessData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
      
        const token = localStorage.getItem('token');
        if (!token) {
          setError("You must be logged in to create a business.");
          return;
        }

        const tokenParsed = parseToken(token);
      
        try {
          const response = await fetch('https://urchin-app-lpasr.ondigitalocean.app/api/Business', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${tokenParsed}`
            },
            body: JSON.stringify({
              name: businessData.name,
              description: businessData.description
            })
          });
      
          if (response.status === 401) {
            setError("Your session has expired or you are unauthorized. Please log in again.");
            return;
          }
      
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || `Server returned status ${response.status}`);
          }
      
          const data = await response.json();
          navigate(`/shops/${data.businessId}`);
      
        } catch (error) {
          console.error('Error creating shop:', error);
          setError(error.message);
        }
      };
      

    return (
        <div>
            <Navbar />
            <div className="register-business-form-container">
                <h2>Create Your Shop</h2>
                <form onSubmit={handleSubmit} className="register-business-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Shop Name"
                        value={businessData.name}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Shop Description"
                        value={businessData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                    
                    <button type="submit" className="submit-button">
                        Create Shop
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default RegisterBusinessForm;