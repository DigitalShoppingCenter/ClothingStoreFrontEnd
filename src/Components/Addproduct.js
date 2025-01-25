import React, { useState } from 'react';
import '../Styling/register_product.css'; 

export default function Addproduct() {


const [nameofproduct, setNameOfProduct] = useState('');
const [material, setMaterial] = useState('');
const [neworused, setNewOrUsed] = useState('');
const [color, setColor] = useState('');
const [size, setSize] = useState('');
const [image, setImage] = useState(null);
const [video, setVideo] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setLoading(true);       
    setError(null);         
    setSuccess(null);       
  

  const formData = new FormData();
  formData.append('nameofproduct', nameofproduct);
  formData.append('material', material);
  formData.append('neworused', neworused);
  formData.append('color', color);
  formData.append('size', size);
  if (image) formData.append('image', image);
  if (video) formData.append('video', video);


    try {
      
      const response = await fetch('https://hostname:portnumber/apiv1/controller/apiendpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nameofproduct, 
          material,
          neworused,
          color,
          size,
          image,
          video,
        }),
      });
  
      
      if (!response.ok) {
        throw new Error('Network response failed');
      }
  
      const result = await response.json(); 
      console.log('Server Response:', result);
      setSuccess('Product successfully submitted!'); 
    } catch (error) {
      console.error('Error:', error);
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  };
  
////////////////////


  return (
    <form onSubmit={handleSubmit} className='product_add'>
      <p id='add_product_text'>Add a New Product !!</p>
  <input
    type="text"
    value={nameofproduct}
    onChange={(e) => setNameOfProduct(e.target.value)}
    placeholder="Name of Product"
  />
  <input
    type="text"
    value={material}
    onChange={(e) => setMaterial(e.target.value)}
    placeholder="Material"
  />
  <input
    type="text"
    value={neworused}
    onChange={(e) => setNewOrUsed(e.target.value)}
    placeholder="New or Used"
  />
  <input
    type="text"
    value={color}
    onChange={(e) => setColor(e.target.value)}
    placeholder="Color"
  />

  
  <select
    value={size}
    onChange={(e) => setSize(e.target.value)}
    className='select_edit'
    required
  >
    <option value="" disabled>Select Size</option>
    <option value="XXS">XXS</option>
    <option value="XS">XS</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
  </select>

  <p> - Select Images (You can select up to 20 images)</p>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])} 
    placeholder="Upload Product Image"
  />
  <p>- Select Videos (You can select up to 10 videos)</p>
  <input
    type="file"
    accept="video/*"
    onChange={(e) => setVideo(e.target.files[0])} 
    placeholder="Upload Product Video"
  />
  
  <button type="submit">Submit</button>

  {loading && <p>Loading...</p>}
  {error && <p style={{ color: 'red' }}>{error}</p>}
  {success && <p style={{ color: 'green' }}>{success}</p>}
</form>


  );
}
