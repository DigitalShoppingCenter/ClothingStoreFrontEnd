import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/registerbusiness.css';
import MockShops from '../Mock_DataBase/Mock_Shops';

const RegisterBusinessForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logoImage, setLogoImage] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [categories, setCategories] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new shop object
    const newShop = {
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      description,
      logoImage,
      coverImage,
      categories: categories.split(',').map((cat) => cat.trim()),
      clothingItems: [],
    };

    // Add the new shop to Mock_Shops
    MockShops.push(newShop);

    // Redirect to the new shop's page
    navigate(`/shops/${newShop.slug}`);
  };

  return (
    <div className="register-business-form-container">
      <h2>Create Your Shop</h2>
      <form onSubmit={handleSubmit} className="register-business-form">
        <input
          type="text"
          placeholder="Shop Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Shop Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Logo Image URL"
          value={logoImage}
          onChange={(e) => setLogoImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Categories (comma-separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">
          Create Shop
        </button>
      </form>
    </div>
  );
};

export default RegisterBusinessForm;
