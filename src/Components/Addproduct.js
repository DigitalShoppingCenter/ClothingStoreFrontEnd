import React, { useState } from 'react';
import '../Styling/register_product.css';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [businessId, setBusinessId] = useState(''); // Should be set from context or props
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const token = localStorage.getItem('authToken'); // Ensure auth is sent
    const userRole = localStorage.getItem('userRole'); // Owner or Employee

    const productData = {
      name,
      description,
      price: parseFloat(price),
      businessId: parseInt(businessId),
    };

    try {
      let url = 'https://urchin-app-lpasr.ondigitalocean.app/api/ClothingItem';
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      };

      if (userRole === 'Owner') {
        // Direct creation
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Failed to create product');
        setSuccess('Product successfully added!');
      } else {
        // Employee proposes the change
        options.body = JSON.stringify({
          ...productData,
          operationType: 'Create',
        });
        url += '/ProposeChange'; // Adjust API for proposals
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Failed to propose product');
        setSuccess('Product proposal sent for approval!');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='product_add'>
      <p id='add_product_text'>Add a New Product</p>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Product Name'
        required
      />
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
        required
      />
      <input
        type='number'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder='Price'
        required
      />
      <input
        type='number'
        value={businessId}
        onChange={(e) => setBusinessId(e.target.value)}
        placeholder='Business ID'
        required
      />
      <button type='submit' disabled={loading}>Submit</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}